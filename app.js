const byId = (id) => document.getElementById(id);
const topics = typeof comparisonTopics !== 'undefined' ? comparisonTopics : ['聖靈與水洗', '怎樣讀徒 19', '說方言的角色'];
const era = byId('era');
const eventList = byId('events');
const detail = byId('event-detail');
const picker = byId('position-picker');

function links(refs) {
  return '<ul class="links">' + refs.map((key) => {
    const [label, url] = sources[key];
    return `<li><a href="${url}" target="_blank" rel="noopener">${label} ↗</a></li>`;
  }).join('') + '</ul>';
}

function renderHistory(selected) {
  if (era.value && era.value !== selected.era) era.value = '';
  eventList.innerHTML = [...new Set(events.map((event) => event.era))]
    .filter((group) => !era.value || group === era.value)
    .map((group) => {
      const rows = events.filter((event) => event.era === group).map((event) =>
        `<li><a class="event" href="#event-${event.id}" ${event === selected ? 'aria-current="true"' : ''}>
          <time>${event.date}</time>${event.title}
        </a></li>`
      ).join('');
      return `<h3 class="era-heading">${group}</h3><ul class="timeline-list">${rows}</ul>`;
    }).join('');
  detail.innerHTML = `
    <div class="meta"><span class="kind">${selected.type}</span><span>${selected.date}</span></div>
    <h2 id="event-title" tabindex="-1">${selected.title}</h2>
    <p>${selected.text}</p>
    ${window.buildingPhotos ? window.buildingPhotos(document.body.dataset.researchCity || 'corinth', selected.title + selected.text + selected.lens) : ''}
    <div class="lens"><h3>研讀線索</h3><p>${selected.lens}</p></div>
    <h3>資料來源</h3>
    ${links(selected.refs)}
    ${selected.compare ? `<a class="jump" href="#compare">${typeof compareJumpLabel !== 'undefined' ? compareJumpLabel : '比較各傳統點讀徒 19'} →</a>` : ''}
  `;
}

function renderComparison() {
  const selected = positions.filter((position) => byId('tradition-' + position.id).checked);
  if (!selected.length) {
    byId('comparison').innerHTML = '<p>請勾選至少一個傳統。</p>';
    return;
  }
  const headings = selected.map((position) =>
    `<th scope="col">${position.name}<small>${position.representative}</small></th>`
  ).join('');
  const rows = topics.map((topic, index) =>
    `<tr><th scope="row">${topic}</th>${selected.map((position) => `<td>${position.cells[index]}</td>`).join('')}</tr>`
  ).join('');
  const sourceRow = selected.map((position) => `<td>${links(position.refs)}</td>`).join('');
  const mobileRows = topics.map((topic, index) =>
    `<section class="mobile-row"><h2>${topic}</h2><dl>${selected.map((position) =>
      `<dt>${position.name}</dt><dd>${position.cells[index]}</dd>`
    ).join('')}</dl></section>`
  ).join('');
  const mobileSources = selected.map((position) =>
    `<dt>${position.name} · ${position.representative}</dt><dd>${links(position.refs)}</dd>`
  ).join('');
  byId('comparison').innerHTML = `
    <div class="table-scroll"><table>
      <caption class="sr-only">${typeof comparisonCaption !== 'undefined' ? comparisonCaption : '各傳統對徒 19:1–7 的理解'}</caption>
      <thead><tr><th scope="col">比較範圍</th>${headings}</tr></thead>
      <tbody>${rows}<tr><th scope="row">資料來源</th>${sourceRow}</tr></tbody>
    </table></div>
    <div class="mobile-comparison">${mobileRows}
      <section class="mobile-row"><h2>資料來源</h2><dl>${mobileSources}</dl></section>
    </div>
  `;
}

function route(moveFocus = false) {
  const hash = location.hash;
  const comparison = hash === '#compare';
  document.querySelectorAll('.topic-nav a').forEach((link) => {
    link.href = link.href.split('#')[0] + (comparison ? '#compare' : '#history');
  });
  byId('compare').hidden = !comparison;
  byId('history').hidden = comparison;
  for (const page of ['compare', 'history']) {
    const link = byId('nav-' + page);
    if ((page === 'compare') === comparison) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (comparison) {
    if (moveFocus) {
      byId('compare-title').setAttribute('tabindex', '-1');
      byId('compare-title').focus({preventScroll:true});
      window.scrollTo(0, 0);
    }
    return;
  }
  const chosen = events.find((event) => hash === '#event-' + event.id);
  renderHistory(chosen ?? events.find((event) => !era.value || era.value === event.era));
  if (chosen) {
    detail.scrollIntoView({block:'nearest'});
    if (moveFocus) byId('event-title').focus({preventScroll:true});
  } else if (moveFocus) window.scrollTo(0, 0);
}

era.addEventListener('change', () => {
  const first = events.find((event) => !era.value || event.era === era.value);
  history.replaceState(null, '', '#event-' + first.id);
  renderHistory(first);
});
picker.insertAdjacentHTML('beforeend', positions.map((position) =>
  `<label class="choice"><input type="checkbox" id="tradition-${position.id}" checked> ${position.name}</label>`
).join(''));
picker.addEventListener('change', renderComparison);
byId('research-links').innerHTML = links(typeof researchSourceKeys !== 'undefined' ? researchSourceKeys : ['archive','unesco','strabo','harbor','inscription']);
window.addEventListener('hashchange', () => route(true));
renderComparison();
route();

