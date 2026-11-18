const chronologySources={
 narrative:['讀經入口｜香港聖經公會《和合本修訂版》','https://rcuv.hkbs.org.hk/'],
 ot:['Metropolitan Museum｜東地中海年代與帝國背景','https://www.metmuseum.org/fr/toah/ht/04/wae.html'],
 exodus:['ESV讀經資料｜出埃及定年分歧','https://www.esv.org/resources/esv-global-study-bible/introduction-to-exodus/'],
 nt:['ESV讀經資料｜新約事件年代（代表方案）','https://www.esv.org/resources/esv-global-study-bible/chart-40-00-nt-timeline/'],
 paul:['American Bible Society｜保羅書信與寫作時間','https://www.americanbible.org/engage/bible-resources/articles/letters-of-paul/'],
 synagogue:['Cambridge History of Judaism｜聖殿與會堂','https://www.cambridge.org/core/books/abs/cambridge-history-of-judaism/temple-and-the-synagogue/AFA83581E6314B2CB8AAA104802B7EC7'],
 jewish:['Cambridge History of Christianity｜猶太散居群體','https://www.cambridge.org/core/books/abs/cambridge-history-of-christianity/jewish-diaspora/8E9DE1E71C3D52EFB516819FD8218E0C'],
 maccabees:['Center for Online Judaic Studies｜希臘化至哈斯摩尼歷史','https://cojs.org/jews_and_judaism_from_alexander_to_the_maccabees_-332-63_bce/'],
 groups:['Josephus《猶太戰記》卷二｜猶太群體的古代描述','https://www.perseus.tufts.edu/hopper/text?doc=J.+BJ+2.119'],
 septuagint:['American Bible Society｜希臘文猶太經典譯本','https://www.americanbible.org/engage/bible-resources/articles/greek-versions-of-the-jewish-scriptures/'],
 scrolls:['以色列博物館｜死海古卷','https://dss.collections.imj.org.il/']
};
const places={
 '迦南':[31.8,35.1],'埃及':[30.0,31.2],'耶路撒冷':[31.78,35.23],'撒馬利亞':[32.28,35.19],'巴比倫':[32.54,44.42],'亞歷山太':[31.20,29.92],'死海區域':[31.74,35.46],'伯利恆':[31.70,35.20],'約旦河區域':[31.84,35.55],'加利利':[32.83,35.58],'凱撒利亞':[32.50,34.90],'安提阿':[36.20,36.16],'哥林多':[37.91,22.88],'以弗所':[37.94,27.34],'羅馬':[41.90,12.50]
};
let selected=0,map,marker;
const get=id=>document.getElementById(id);
const eras=[...new Set(bibleTimeline.map(e=>e.era))];
get('period').innerHTML='<option value="">所有時期</option>'+eras.map(e=>`<option>${e}</option>`).join('');
get('kind').innerHTML='<option value="">所有類型</option>'+[...new Set(bibleTimeline.map(e=>e.kind))].map(e=>`<option>${e}</option>`).join('');
function choose(i,focus=false){selected=i;const e=bibleTimeline[i];const src=chronologySources[e.source];
 get('chosen').innerHTML=`<div class="eyebrow">${e.era} · ${e.kind}</div><h2 tabindex="-1" id="chosen-title">${e.title}</h2><p class="date">${e.date}</p><p>${e.text}</p><div class="lens"><h3>相關經文／文獻</h3><p>${e.scripture}</p><a href="https://rcuv.hkbs.org.hk/" target="_blank" rel="noopener">到香港聖經公會閱讀《和合本修訂版》 ↗</a><p class="context">上面為本頁撰寫的內容摘要，並非經文引文。讀經網站開啟後，可按上列書卷及章節查閱。</p></div><p><strong>年代及資料來源</strong><br><a href="${src[1]}" target="_blank" rel="noopener">${src[0]} ↗</a></p><p class="context">${e.source==='narrative'?'本項依經文相對次序安排，不以章節次序證明絕對年代。':'所列範圍供研讀定位；單一參考書的方案不代表所有研究者共識。'} 地圖標示城市或區域概略位置，不代表事件精確現場或古代國界。</p>${e.place==='哥林多'?'<a href="corinth.html#history">深入哥林多 →</a>':e.place==='以弗所'?'<a href="explore.html#history">深入以弗所 →</a>':''}`;
 get('map-label').textContent=e.place==='未定位'?'未提供可確認的地理定位；地圖保留區域全覽。':'相關地理脈絡：'+e.place;
 if(map){if(marker)map.removeLayer(marker);const p=places[e.place];if(p){map.setView(p,['迦南','埃及','約旦河區域','死海區域'].includes(e.place)?6:8);marker=L.circleMarker(p,{radius:9,color:'#fff',fillColor:'#984a29',fillOpacity:1,weight:2}).addTo(map).bindTooltip(e.place,{permanent:true});}else map.setView([33,35],4);}
 get('scrub').value=i;get('scrub-label').textContent=(i+1)+' / '+bibleTimeline.length+' · '+e.title;
 document.querySelectorAll('[data-index]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.index)===i)));
 if(focus){get('chosen-title').focus({preventScroll:true});if(window.innerWidth<=700)get('chosen').scrollIntoView({block:'start',behavior:'smooth'});}
}
function render(){const query=get('search').value.trim().toLowerCase();const shown=bibleTimeline.map((e,i)=>({...e,i})).filter(e=>(!get('period').value||e.era===get('period').value)&&(!get('kind').value||e.kind===get('kind').value)&&(!query||Object.values(e).join(' ').toLowerCase().includes(query)));
 get('count').textContent=`顯示 ${shown.length} / ${bibleTimeline.length} 個節點`;
 get('long-timeline').innerHTML=eras.map(era=>{const rows=shown.filter(e=>e.era===era);return rows.length?`<section class="epoch"><h2>${era}</h2><ol>${rows.map(e=>`<li><button data-index="${e.i}" aria-current="${e.i===selected}"><span class="date">${e.date}</span><strong>${e.title}</strong><span>${e.kind} · ${e.scripture}</span></button></li>`).join('')}</ol></section>`:''}).join('')||'<p>沒有符合的節點，試試清除篩選。</p>';
}
get('long-timeline').addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b)choose(Number(b.dataset.index),true)});
for(const id of ['period','kind','search'])get(id).addEventListener(id==='search'?'input':'change',render);
get('clear').addEventListener('click',()=>{get('period').value='';get('kind').value='';get('search').value='';render()});
get('scrub').max=bibleTimeline.length-1;get('scrub').addEventListener('input',e=>choose(Number(e.target.value)));
if(window.L){map=L.map('bible-map',{scrollWheelZoom:false}).setView([33,35],4);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:18}).addTo(map);}else{get('bible-map').innerHTML='<p>地圖暫未載入。事件、年代及資料來源仍可閱讀。</p>';}
render();choose(0);
