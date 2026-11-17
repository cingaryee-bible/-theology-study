const atlasSources={
 clement:['《革利免一書》47–48章','https://www.newadvent.org/fathers/1010.htm'],
 augsburg:['路德宗信條歷史與作者','https://lutheranreformation.org/theology/the-lutheran-confessions/the-texts-of-the-lutheran-confessions/'],
 wesley:['衛斯理｜《經常領聖餐的責任》','https://nnuwesleycenter.whdl.org/sites/default/files/resource/book/EN_John_Wesley_101_duty_constant_communion.htm?language=en']
};
Object.assign(atlasSources, {"archaeology":["ASCSA｜哥林多城市歷史與時間線","https://www.ascsa.edu.gr/excavations/ancient-corinth/about-the-excavations-1/history-timeline"],"excavation":["ASCSA｜哥林多考古計劃與研究範圍","https://www.ascsa.edu.gr/excavations/ancient-corinth/about-the-excavations-1"],"acts18":["《使徒行傳》18章｜保羅、工作與迦流","https://bible.usccb.org/bible/acts/18"],"cor1":["《哥林多前書》1章｜分黨與群體成員","https://bible.usccb.org/bible/1corinthians/1"],"cor8":["《哥林多前書》8章｜祭偶像食物與良心","https://bible.usccb.org/bible/1corinthians/8"],"cor10":["《哥林多前書》10章｜主的桌子與一個身體","https://bible.usccb.org/bible/1corinthians/10"],"cor11":["《哥林多前書》11章｜主餐、分裂與等候","https://bible.usccb.org/bible/1corinthians/11"],"cor12":["《哥林多前書》12章｜恩賜與身體","https://bible.usccb.org/bible/1corinthians/12"],"rom16":["《羅馬書》16章｜非比、該猶與以拉都","https://bible.usccb.org/bible/romans/16"],"catholic":["梵蒂岡｜《天主教教理》§1362–1381：紀念、祭獻與臨在","https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html"],"catholicMeal":["梵蒂岡｜《天主教教理》§1382–1401：領受與合一","https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vi_the_paschal_banquet.html"],"lutheran":["密蘇里路德會｜信仰說明：聖餐與領餐資格","https://www.lcms.org/what-we-believe/beliefs"],"reformed":["Westminster Theological Seminary｜《西敏信條》第29章","https://wts.edu/wcf"],"methodist":["聯合衛理公會｜《This Holy Mystery》官方文件入口","https://www.umcdiscipleship.org/resources/this-holy-mystery-a-united-methodist-understanding-of-holy-communion"],"methodistGrace":["Ask The UMC｜聖餐作為施恩途徑","https://www.umc.org/content/ask-the-umc-what-do-i-need-to-know-about-holy-communion-in-the-united-methodist-church"],"methodistTable":["聯合衛理公會｜開放的主餐與領餐實踐","https://www.umc.org/en/content/an-open-table-how-united-methodists-understand-communion"],"methodistMemory":["Ask The UMC｜記念如何超越回想","https://www.umc.org/en/content/ask-the-umc-is-communion-simply-a-ritual-of-remembrance"],"baptist":["美南浸信會｜《浸信會信仰與信息》2000版第VII條","https://bfm.sbc.net/bfm2000/"]});
const atlasCities={
 corinth:{name:'哥林多',lat:37.906,lon:22.879,scripture:[['徒18章','保羅與亞居拉、百基拉同業工作；迦流面前的爭論。','acts18'],['林前10–12章','祭偶像食物、主的餐桌、彼此等候與一個身體。','cor11']],church:'保羅建立群體後，書信反映分黨與主餐問題。《革利免一書》47章其後再次勸哥林多人處理紛爭；到了晚期古代，考古可見基督教大型建築。',historyRefs:['clement','archaeology'],places:[['古哥林多','37.906, 22.879','廣場、審判臺與城市遺址。平台與徒18的對應須分清證據層次。'],['堅革哩港','37.883, 22.990','羅16:1提到當地教會與非比。'],['Lechaion港','37.932, 22.860','通向哥林多灣；後世大型教堂遺址。']],reading:['cor8','cor10','cor11','rom16'],context:'地峽旁的羅馬殖民城。古代港口與今日城市並不相同；地圖標記為遺址或城市概略位置。'},
 ephesus:{name:'以弗所',lat:37.941,lon:27.342,scripture:[['使徒行傳19章','水洗、按手、推喇奴講堂、書卷與劇場騷動。','https://bible.usccb.org/bible/acts/19'],['啟示錄2:1–7','肯定勞碌與忍耐，責備離棄起初的愛，呼召悔改。','https://bible.usccb.org/bible/revelation/2']],church:'徒19敘述保羅的城市事工；徒20是米利都對以弗所長老的告別。啟2呈現較後期群體的處境；431年的大公會議則距保羅時代近四世紀。',historyRefs:['https://whc.unesco.org/en/list/1018/'],places:[['大劇場','37.941, 27.342','徒19敘事中的聚集場所；現存建築有不同時期。'],['亞底米神廟','37.949, 27.364','城市宗教與公共生活背景。'],['米利都','37.530, 27.278','徒20告別地點，與以弗所分開標示。']],reading:['https://bible.usccb.org/bible/acts/19','https://bible.usccb.org/bible/acts/20','https://bible.usccb.org/bible/revelation/2'],context:'羅馬亞細亞省的港城。可進一步開啟原有以弗所詳細時間線。'},
 rome:{name:'羅馬',lat:41.903,lon:12.496,scripture:[['羅馬書16章','非比、接待與跨城市的同工網絡。','rom16']],church:'《革利免一書》以羅馬教會致哥林多教會的形式，回應群體紛爭。它讓研究延伸到保羅之後的教會往來。',historyRefs:['clement'],places:[['羅馬','41.903, 12.496','城市概略位置；不是革利免寫作房間的定位。']],reading:['clement','rom16'],context:'此處呈現羅馬—哥林多的文獻聯繫，並不據此繪出已知航線。'},
 augsburg:{name:'奧格斯堡',lat:48.370,lon:10.898,scripture:[['林前11章','後世聖餐論述所閱讀的經文之一。','cor11']],church:'1530年《奧格斯堡信條》由墨蘭頓撰寫，呈交帝國議會。這是路德宗信仰表述的發展節點，不是哥林多當地事件。',historyRefs:['augsburg'],places:[['奧格斯堡','48.370, 10.898','宗教改革時期帝國議會的城市。']],reading:['augsburg','lutheran'],context:'由新約餐桌問題延伸到宗教改革的聖餐理解。地圖移到德意志地區，避免把後世事件放在哥林多。'},
 oxford:{name:'牛津',lat:51.752,lon:-1.258,scripture:[['林前11章／路22:19','經常領餐、恩典與「不按理」的顧慮。','cor11']],church:'衛斯理的《經常領聖餐的責任》序言回顧其為牛津學生預備的早期講論。他勸信徒把領餐看作基督的吩咐與滋養。',historyRefs:['wesley'],places:[['牛津','51.752, -1.258','講論早期教學脈絡；不是後來每次修訂的出版地。']],reading:['wesley','methodist'],context:'18世紀衛斯理的聖餐教導。此處以1732年前後的早期講論脈絡定位；現存版本有後來序言。'}
};
const sharedAtlasEvents=[
 {year:-146,date:'前146年',track:'羅馬帝國',city:'corinth',title:'羅馬攻陷哥林多',text:'希臘城市遭摧毀。這是羅馬共和國階段，早於帝制。',refs:['archaeology']},
 {year:-44,date:'前44年',track:'羅馬帝國',city:'corinth',title:'凱撒重建殖民城',text:'羅馬殖民城的形成，是保羅時代城市的前史。',refs:['archaeology']},
 {year:50,date:'公元1世紀中葉',track:'羅馬帝國',city:'corinth',title:'帝制下的亞該亞行省',text:'徒18稱迦流為亞該亞方伯，提供羅馬帝制下行省行政與地方司法的窗口；不等於這段記述交代全帝國制度。',refs:['acts18']},
 {year:51,date:'約50年代初',track:'聖經事件',city:'corinth',title:'保羅在哥林多',text:'徒18：同業工作、會堂與迦流。時間是行程重建的約數。',refs:['acts18']},
 {year:54,date:'約50年代',track:'聖經事件',city:'ephesus',title:'保羅在以弗所',text:'徒19：城市事工、聖靈與劇場事件。',refs:['https://bible.usccb.org/bible/acts/19']},
 {year:55,date:'約50年代中期',track:'聖經事件',city:'corinth',title:'哥林多書信中的主餐',text:'林前10–11把餅杯、分裂與彼此等候連在一起；年份為約數。',refs:['cor10','cor11']},
 {year:96,date:'公元1世紀末前後',track:'初期教會',city:'rome',title:'羅馬教會致哥林多人',text:'《革利免一書》47–48章回看保羅時期的分黨，勸人恢復愛。此處年代採常見概略定位。',refs:['clement']},
 {year:550,date:'公元6世紀',track:'初期教會',city:'corinth',title:'晚期古代的教會建築',text:'Lechaion等地的大型基督教建築顯示後世城市面貌。',refs:['archaeology']},
 {year:1530,date:'1530年',track:'神學家',city:'augsburg',title:'墨蘭頓與信條寫作',text:'墨蘭頓撰寫《奧格斯堡信條》，將教義整理為公開信仰表述。',refs:['augsburg']},
 {year:1530,date:'1530年6月25日',track:'宗派發展',city:'augsburg',title:'《奧格斯堡信條》呈交',text:'路德宗信仰表述的重要節點；可與今日LCMS聖餐文件對照。',refs:['augsburg','lutheran']},
 {year:1732,date:'約1732年；後有修訂',track:'神學家',city:'oxford',title:'衛斯理：經常領餐',text:'講論為牛津學生預備；現存序言回顧早期寫作，主張領餐帶來靈命滋養。',refs:['wesley']},
 {year:2000,date:'2000年',track:'宗派發展',city:'corinth',title:'浸信會代表文件再讀主餐',text:'《信仰與信息》以象徵、順服和盼望再來表述主餐。這是美國文件對哥林多經文的接受史，並非在哥林多發生。',refs:['baptist'],reception:true},
 {year:2004,date:'2004年',track:'宗派發展',city:'corinth',title:'衛理宗《This Holy Mystery》',text:'美國聯合衛理公會採納聖餐解釋文件。地圖只標示所研讀的聖經城市；這不是文件採納會址。',refs:['methodist'],reception:true}
];
const atlasPageCity = document.body.dataset.researchCity || 'corinth';
const ephesusAtlasEvents = atlasPageCity === 'ephesus' ? events.filter(e=>['apollos','disciples','teaching','books','riot','farewell','procession','coin','library','council'].includes(e.id)).map((e,i)=>({year:({procession:104,coin:125,library:125,council:431})[e.id]||50+i,date:e.date,track:e.id==='council'?'初期教會':e.era==='保羅之後'?'羅馬帝國':'聖經事件',city:'ephesus',title:e.title,text:e.text,refs:e.refs})) : [];
const atlasEvents = [...ephesusAtlasEvents,...sharedAtlasEvents].sort((a,b)=>a.year-b.year);
const atlasStart = atlasEvents.findIndex(e=>e.city===atlasPageCity && e.track==='聖經事件');
(function(){
 let city=atlasPageCity,selected=atlasStart,map,markers={},activeTrack='',localOnly=false;
 const el=id=>document.getElementById(id);
 function ref(key){return atlasSources[key]||sources[key]||[key.startsWith('http')?'閱讀原始資料':key,key];}
 function refs(keys){return keys.map(k=>{const [name,url]=ref(k);return `<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`}).join(' · ')}
 function dossier(){const c=atlasCities[city];el('atlas-city-title').textContent=c.name+'｜經文・教會・地點';
 el('atlas-dossier').innerHTML=`<section><h3>聖經事件與經文</h3>${c.scripture.map(([n,t,k])=>`<h4>${n}</h4><p>${t}</p>${refs([k])}`).join('')}</section><section><h3>教會歷史</h3><p>${c.church}</p>${refs(c.historyRefs)}</section><section><h3>相關地點</h3>${c.places.map(([n,coords,t])=>`<h4>${n}</h4><p>${t}</p><a target="_blank" rel="noopener" href="https://www.openstreetmap.org/?mlat=${coords.split(',')[0].trim()}&mlon=${coords.split(',')[1].trim()}#map=14/${coords.replace(', ','/')}">地點地圖 ↗</a>`).join('')}</section><section><h3>並讀與研究入口</h3><p>${c.context}</p>${refs(c.reading)}${city==='ephesus'?`<p><a href="${atlasPageCity==='ephesus'?'#ephesus-scenes':'explore.html#history'}">以弗所詳細場景 →</a></p>`:''}${city==='corinth'?'<p><a href="corinth.html#compare">五傳統聖餐比較 →</a> · <a href="corinth.html#corinth-scenes">哥林多背景場景 →</a></p>':''}</section>`;
 el('atlas-dossier').insertAdjacentHTML('beforeend',window.cityBuildingPhotos?window.cityBuildingPhotos(city):'');
 el('atlas-city-buttons').innerHTML=Object.entries(atlasCities).map(([id,c])=>`<button type="button" data-city="${id}" aria-pressed="${id===city}">${c.name}</button>`).join('');
 if(map){Object.entries(markers).forEach(([id,m])=>m.setStyle({fillColor:id===city?'#a44e2b':'#234e40',radius:id===city?10:7}));map.setView([c.lat,c.lon],city==='corinth'||city==='ephesus'?7:5);}
 else el('atlas-map-fallback').src=`https://www.openstreetmap.org/export/embed.html?bbox=${c.lon-4}%2C${c.lat-3}%2C${c.lon+4}%2C${c.lat+3}&layer=mapnik&marker=${c.lat}%2C${c.lon}`;
 }
 function timeline(){const visible=atlasEvents.map((e,i)=>({...e,i})).filter(e=>(!activeTrack||e.track===activeTrack)&&(!localOnly||e.city===city));
 el('atlas-time-list').innerHTML=visible.map(e=>`<li><button type="button" data-event="${e.i}" aria-current="${e.i===selected?'true':'false'}"><time>${e.date}</time><span class="atlas-tag">${e.track}</span><strong>${e.title}</strong><small>${atlasCities[e.city].name}${e.reception?'（經文接受史）':''}</small></button></li>`).join('')||'<li>此城市在這個分類暫未有條目。</li>';
 const e=atlasEvents[selected];el('atlas-event').innerHTML=`<span class="atlas-tag">${e.track} · ${e.date}</span><h3>${e.title}</h3><p>${e.text}</p>${window.buildingPhotos?window.buildingPhotos(e.city,e.title+e.text):''}${refs(e.refs)}`;el('atlas-scrub').max=atlasEvents.length-1;el('atlas-scrub').value=selected;el('atlas-current-time').textContent=e.date+' · '+e.title;
 }
 function chooseCity(id){city=id;if(atlasEvents[selected].city!==id)selected=atlasEvents.findIndex(e=>e.city===id);dossier();timeline();}
 function chooseEvent(i){selected=i;city=atlasEvents[i].city;dossier();timeline();}
 el('atlas-city-buttons').addEventListener('click',e=>{const b=e.target.closest('[data-city]');if(b)chooseCity(b.dataset.city)});
 el('atlas-time-list').addEventListener('click',e=>{const b=e.target.closest('[data-event]');if(b)chooseEvent(Number(b.dataset.event))});
 el('atlas-track').addEventListener('change',e=>{activeTrack=e.target.value;timeline()});
 el('atlas-local').addEventListener('change',e=>{localOnly=e.target.checked;timeline()});
 el('atlas-scrub').addEventListener('input',e=>chooseEvent(Number(e.target.value)));
 el('atlas-reset').addEventListener('click',()=>{activeTrack='';localOnly=false;el('atlas-track').value='';el('atlas-local').checked=false;chooseEvent(atlasStart);if(map)map.fitBounds(Object.values(atlasCities).map(c=>[c.lat,c.lon]));});
 dossier();timeline();
 if(window.L){map=L.map('atlas-map',{scrollWheelZoom:false}).setView([39,20],5);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:18}).addTo(map);Object.entries(atlasCities).forEach(([id,c])=>{markers[id]=L.circleMarker([c.lat,c.lon],{radius:7,color:'#fff',weight:2,fillColor:'#234e40',fillOpacity:1}).addTo(map).bindTooltip(c.name,{permanent:true,direction:'top'}).on('click',()=>chooseCity(id))});el('atlas-map-fallback').hidden=true;dossier();
 document.getElementById('nav-history').addEventListener('click',()=>setTimeout(()=>map.invalidateSize(),0));window.addEventListener('hashchange',()=>{if(location.hash!=='#compare')setTimeout(()=>map.invalidateSize(),0)});
 }else{el('atlas-map').hidden=true;el('atlas-map-status').textContent='地圖標記元件暫未載入；可使用下方城市按鈕同步切換資料與地圖。';}
})();
