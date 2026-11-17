const buildingPhotoCatalog=[
 {id:'artemis',city:'ephesus',name:'亞底米神廟',src:'photos/artemis.jpg',file:'Ephesus_Temple_of_Artemis.jpg',author:'simonjenkins’ photos',license:'by-sa/2.0',note:'神廟遺址現況；不是完整古建築。',match:['亞底米神廟','神廟與朝聖']},
 {id:'theatre',city:'ephesus',name:'以弗所大劇場',src:'theatre.jpg',file:'Theater_of_Ephesus.jpg',author:'CherryX',license:'by-sa/3.0',note:'現存劇場經歷多次擴建，並非單一時期面貌。',match:['劇場','銀匠']},
 {id:'celsus',city:'ephesus',name:'塞爾蘇斯圖書館',src:'photos/celsus.jpg',file:'Celsus_library_in_Ephesus.jpg',author:'Dennis G. Jarvis',license:'by-sa/2.0',note:'公元2世紀建築；照片立面經現代重組，晚於保羅時代。',match:['塞爾蘇斯','圖書館','墓室']},
 {id:'agora',city:'ephesus',name:'以弗所商業市集',src:'photos/agora.jpg',file:'Agora,_Ephesus.jpg',author:'CherryX',license:'by-sa/3.0',note:'商業市集與柱廊遺址，鄰近圖書館。',match:['商業市集']},
 {id:'mary',city:'ephesus',name:'以弗所聖母教堂',src:'photos/mary.jpg',file:'Ephesos_Marienkirche.JPG',author:'Elelicht',license:'by-sa/3.0',note:'Church of Mary遺址；與山上的「聖母之家」是不同地點。',match:['聖母教堂','大公會議']},
 {id:'john',city:'ephesus',name:'聖約翰大殿',src:'photos/john.jpg',file:'Selçuk_Nave_of_St_John_Basilica_in_2011_3305.jpg',author:'Dosseman',license:'by-sa/4.0',note:'阿亞索盧克山上的大殿遺址；屬後世基督教建築。',match:['聖約翰大殿','大公會議']},
 {id:'apollo',city:'corinth',name:'哥林多阿波羅神廟',src:'corinth.jpg',file:'Greece_Corinth_Temple_of_Apollo.jpg',author:'Gruffi',license:'by-sa/2.5',note:'現存阿波羅神廟遺柱；不把它指認為林前8章某次飯宴的確切神廟。',match:['阿波羅','神廟、市場']},
 {id:'bema',city:'corinth',name:'哥林多審判臺與廣場',src:'photos/bema.jpg',file:'Ancient_Corinth_-_Bema.jpg',author:'Ploync',license:'by/3.0',note:'Bema平台與廣場現況；與徒18事件的具體對應仍須審慎。',match:['審判臺','廣場','迦流','羅馬殖民城']},
 {id:'corinth-theatre',city:'corinth',name:'哥林多古劇場',src:'photos/corinth-theatre.jpg',file:'Ancient_Greek_theatre_of_Corinth,_202770.jpg',author:'Zde',license:'by-sa/4.0',note:'劇場遺址；以拉都鋪路銘文位於劇場附近，並非這幅照片的主體。',match:['劇場','以拉都銘文']},
 {id:'lechaion',city:'corinth',name:'Lechaion教堂',src:'photos/lechaion.jpg',file:'Lechaion_Basilica_01.JPG',author:'Schuppi',license:'by-sa/4.0',note:'Lechaion大型教堂的遺址現況；屬晚期古代，並非保羅時代的聚會場所。',match:['Lechaion','大型基督教建築','晚期古代的教會建築']}
];
function renderBuildingFigures(items){return '<div class="building-photos">'+items.map(p=>`<figure><a href="${p.src}" target="_blank" rel="noopener" aria-label="放大${p.name}照片"><img src="${p.src}" alt="${p.name}遺址照片" loading="lazy" width="960" height="640"></a><figcaption><strong>${p.name}</strong><p>${p.note}</p><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p.file)}" target="_blank" rel="noopener">${p.author}／Wikimedia Commons ↗</a> · <a href="https://creativecommons.org/licenses/${p.license}/" target="_blank" rel="noopener">CC ${p.license.toUpperCase().replace('/',' ')} ↗</a><small>沿用來源圖片；顯示時等比例縮放，點圖放大。</small></figcaption></figure>`).join('')+'</div>';}
window.buildingPhotos=(city,text)=>renderBuildingFigures(buildingPhotoCatalog.filter(p=>p.city===city&&p.match.some(w=>text.includes(w))));
window.cityBuildingPhotos=city=>renderBuildingFigures(buildingPhotoCatalog.filter(p=>p.city===city));
document.addEventListener('DOMContentLoaded',()=>{
 const city=document.body.dataset.researchCity||'corinth';
 const note=city==='ephesus'?'會堂、推喇奴講堂：目前沒有獲可靠確認的原建築遺址照片。城門在本文只作泛稱，未指定哪一道門；圖書館照片右側可見古城門，但不指認為104年巡遊所經城門。':'亞居拉與百基拉的住家／工場、提多猶士都的家、該猶接待教會的住家及保羅講論的會堂：原建築未獲可靠確認，不能提供其真實建築照片。林前所說的偶像廟及私人飯局也未具體指認；阿波羅神廟照片只供城市背景參照。';
 document.getElementById('building-gallery').innerHTML='<h2>建築物照片索引</h2>'+window.cityBuildingPhotos(city)+'<div class="lens"><h3>未確認原建築的項目</h3><p>'+note+'</p></div>';
});
