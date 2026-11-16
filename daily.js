const daily = document.getElementById('daily-body');

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content) node.textContent = content;
  if (className) node.className = className;
  return node;
}

function external(label, url, className) {
  const link = element('a', label + ' ↗', className);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function youtubeVideoId(link) {
  let url;
  try {
    url = new URL(link);
  } catch {
    return null;
  }

  const [, route, segment] = url.pathname.split('/');
  let id;
  if (url.hostname === 'youtu.be') {
    id = route;
  } else if (['www.youtube.com', 'youtube.com', 'm.youtube.com', 'music.youtube.com',
    'www.youtube-nocookie.com', 'youtube-nocookie.com'].includes(url.hostname)) {
    if (route === 'watch') id = url.searchParams.get('v');
    if (['embed', 'shorts', 'live'].includes(route)) id = segment;
  }
  return /^[A-Za-z0-9_-]{11}$/.test(id ?? '') ? id : null;
}

function song(songData, label, className) {
  const section = element('section', '', className);
  section.append(
    element('div', label, 'eyebrow'),
    element('h2', songData.title),
    element('p', songData.credit),
    element('p', songData.note)
  );

  const videoId = youtubeVideoId(songData.url);
  if (videoId) {
    const player = element('iframe', '', 'song-player');
    player.title = songData.title + '｜YouTube 播放器';
    player.loading = 'lazy';
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.allow = 'encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?playsinline=1';
    section.append(player);
  }

  section.append(external('在 YouTube 開啟', songData.url, 'listen'));
  return section;
}

function renderReading(reading) {
  const box = element('details', '', 'reading');
  const verses = element('ol', '', 'verses');
  for (const [number, text] of reading.verses) {
    const line = element('li');
    line.append(element('span', String(number), 'verse-number'), element('span', text));
    verses.append(line);
  }
  box.append(element('summary', reading.ref), element('p', reading.summary), verses,
    external('查閱經文', reading.url));
  return box;
}

function renderSection(entry) {
  const panel = element('details', '', 'daily-panel');
  panel.id = entry.id;
  const summary = element('summary');
  summary.append(element('h2', entry.title));
  const section = element('div', '', 'daily-panel-content');
  panel.append(summary, section);
  for (const paragraph of entry.paragraphs ?? []) section.append(element('p', paragraph));
  if (entry.items?.length) {
    const list = element('ol');
    for (const item of entry.items) list.append(element('li', item));
    section.append(list);
  }
  if (entry.links?.length) {
    const list = element('ul', '', 'links');
    for (const link of entry.links) {
      const item = element('li');
      item.append(external(link.label, link.url));
      list.append(item);
    }
    section.append(list);
  }
  return panel;
}

function render(entry) {
  const article = element('article', '', 'daily-article');
  const readings = element('section');
  readings.id = 'readings';
  readings.append(element('h2','今日經文'), element('p','修訂共同經課（半連續讀經） · 繁體和合本。點選各段標題可展開全文。','reading-source'));
  for (const reading of entry.readings) readings.append(renderReading(reading));

  const navigation = element('nav', '', 'daily-subnav');
  navigation.setAttribute('aria-label', '今日研讀目錄');
  for (const [id, label] of [['readings','今日經文'],['study','深度研究'],['together','並讀'],['original','原文'],['context','歷史文化'],['today','今日應用'],['questions','思考'],['action','行動'],['news','新聞與代禱']]) {
    const link = element('a', label);
    link.href = '#' + id;
    link.addEventListener('click', () => revealSection(id));
    navigation.append(link);
  }
  const date = new Intl.DateTimeFormat('zh-HK',{dateStyle:'full',timeZone:'Asia/Hong_Kong'})
    .format(new Date(entry.date + 'T04:00:00Z'));
  article.append(readings, ...entry.sections.map(renderSection));
  daily.replaceChildren(song(entry.opening, '開始祈禱 · 泰澤短誦', 'daily-opening'),
    element('p', date + ' · 每日經課深度研究', 'eyebrow'),
    element('h1', entry.title), navigation, article,
    song(entry.closing, '回應詩歌', 'daily-end'));
  revealSection(location.hash.slice(1))?.scrollIntoView();
}

function revealSection(id) {
  const anchor = document.getElementById(id);
  if (anchor instanceof HTMLDetailsElement) anchor.open = true;
  return anchor;
}

async function load() {
  try {
    const response = await fetch('./daily.json', {cache:'no-store'});
    if (response.ok) {
      const entry = await response.json();
      render(entry);
      const today = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Hong_Kong'}).format();
      if (entry.date !== today) {
        daily.prepend(element('p','以下是最近刊登的研讀。今日篇章尚未上載。','reading-source'));
      }
      return;
    }
    if (response.status !== 404) throw Error('daily API unavailable');
    daily.replaceChildren(element('h1','每日經課深度研究'),
      element('p','今日的研讀尚未上載。'),
      external('先閱讀今日經文','https://lectionary.library.vanderbilt.edu/daily-readings/'));
  } catch {
    daily.replaceChildren(element('h1','每日經課深度研究'),
      element('p','暫時載入不到研讀，請稍後重新整理。'),
      external('先閱讀今日經文','https://lectionary.library.vanderbilt.edu/daily-readings/'));
  }
}
const hash = location.hash;
if (hash === '#history' || hash === '#compare' || hash.startsWith('#event-')) {
  location.replace('./explore.html' + hash);
} else {
  window.addEventListener('hashchange', () => revealSection(location.hash.slice(1)));
  load();
}
