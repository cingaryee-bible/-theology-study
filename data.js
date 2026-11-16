const sources = {
  acts18: ['《使徒行傳》18 章', 'https://bible.usccb.org/bible/acts/18'],
  acts: ['《使徒行傳》19 章', 'https://bible.usccb.org/bible/acts/19'],
  acts20: ['《使徒行傳》20 章', 'https://bible.usccb.org/bible/acts/20'],
  cor: ['《哥林多前書》16 章', 'https://bible.usccb.org/bible/1corinthians/16'],
  date: ['Paul Trebilco，《The Early Christians in Ephesus from Paul to Ignatius》', 'https://api.pageplace.de/preview/DT0400.9783161574849_A42509400/preview-9783161574849_A42509400.pdf'],
  unesco: ['UNESCO｜以弗所世界遺產條目', 'https://whc.unesco.org/en/list/1018/'],
  harbor: ['奧地利考古研究所｜以弗所城郊及港灣研究', 'https://www.oeaw.ac.at/en/oeai/research/historical-archaeology/historical-archaeology-in-the-mediterranean/ephesos-periurban-research'],
  strabo: ['斯特拉波《地理志》14.1.22–24｜Perseus 英譯', 'https://beta.perseus.tufts.edu/urn%3Acts%3AgreekLit%3Atlg0099.tlg001.perseus-eng3%3A14.1/'],
  inscription: ['Christina Kokkinia｜薩魯塔里斯銘文研究（IEph 27）', 'https://ejournals.epublishing.ekt.gr/index.php/tekmiria/article/view/17405'],
  procession: ['Harvard Center for Hellenic Studies｜以弗所的巡遊路線', 'https://research-bulletin.chs.harvard.edu/2015/02/20/a-stroll-along-the-sea/'],
  celsus: ['奧地利科學院｜塞爾蘇斯圖書館與修復工程', 'https://www.oeaw.ac.at/en/news/weltkulturerbe-erhalten-oesterreichische-forscherinnen-starten-restaurierung-der-celsusbibliothek-in-ephesos'],
  coin: ['Roman Provincial Coinage｜哈德良時期以弗所錢幣 III 2074A', 'https://rpc.ashmus.ox.ac.uk/coins/3/2074A'],
  archive: ['奧地利考古研究所｜以弗所數碼研究書庫', 'https://www.oeaw.ac.at/en/oeai/oeaidigital/e-resources/celsus-digital-ephesos-library'],
  ag: ['美國神召會｜《基本真理宣言》§7–8', 'https://ag.org/Beliefs/Statement-of-Fundamental-Truths/'],
  agPaper: ['美國神召會｜聖靈的洗立場文件', 'https://ag.org/en/Beliefs/Position-Papers/Baptism-in-the-Holy-Spirit'],
  methodist: ['美國聯合衛理公會｜《藉水與聖靈》', 'https://www.umc.org/en/content/by-water-and-the-spirit-a-united-methodist-understanding-of-baptism'],
  ccc: ['《天主教教理》§1288（含徒 19:5–6）', 'https://www.catholicculture.org/culture/library/catechism/cat_view.cfm?recnum=4138'],
  vatican: ['梵蒂岡｜《天主教教理》§1315–1321', 'https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_2/in_brief.html']
};
const events = [
  {id:'temple', era:'保羅之前', date:'希臘化時期以前至羅馬時期', title:'亞底米神廟與朝聖', type:'古代文獻', text:'斯特拉波記述早期神廟歷經興建、擴建，後遭焚毀，再由以弗所人重建。神廟吸引地中海各地的朝聖者，今日遺址只餘少量構件。', lens:'徒 19:24–27 將銀匠的生計與女神的聲望放在同一段演說裏。斯特拉波的記述提供神廟歷史和城市背景，銀匠對生意的憂慮則來自《使徒行傳》。', refs:['strabo','unesco','acts']},
  {id:'harbor', era:'保羅之前', date:'希臘化至羅馬時期｜長期變化', title:'河口、海岸線與港城', type:'考古研究', text:'以弗所位於卡伊斯特羅斯河原有的河口地帶。隨沉積物累積，海岸線逐漸西移，聚落與港口的位置亦隨時代變化。羅馬港城留下港池和通向海域的水道。', lens:'今日遺址離海有一段距離。閱讀古城故事時，可以把它放回河口港城的環境，理解人員、貨物和朝聖者如何進出。', refs:['unesco','harbor']},
  {id:'apollos', era:'保羅在以弗所', date:'約公元 50 年代｜徒 18:18–28', title:'亞波羅與約翰的洗', type:'經文敘事', text:'《使徒行傳》先記述百基拉、亞居拉留在以弗所，後來向只熟悉約翰之洗的亞波羅更詳細講解神的道。亞波羅再前往亞該亞。', lens:'把徒 18:24–28 與 19:1–7 並讀，可以觀察兩段如何描寫約翰的洗；路加沒有交代亞波羅與這班門徒之間有何關係。', refs:['acts18','acts','date']},
  {id:'disciples', era:'保羅在以弗所', date:'約公元 50 年代｜徒 19:1–7', title:'十二位左右的門徒', type:'經文敘事', text:'保羅遇到一群曾受約翰之洗的人。他們聽見保羅指向耶穌的教導後，奉主耶穌的名受洗。保羅按手，聖靈臨到，他們說方言並說預言。', lens:'經文交代了這一群人的經歷。「約公元 50 年代」是依保羅行程重建的範圍，經文本身沒有標出個別事件年份。', refs:['acts','date'], compare:true},
  {id:'teaching', era:'保羅在以弗所', date:'約公元 50 年代｜徒 19:8–10', title:'從會堂到推喇奴講堂', type:'經文敘事', text:'徒 19 說保羅在會堂講論三個月，後來轉到推喇奴的講堂，每天與人討論，持續兩年。這段敘事描寫信息如何從一個會堂傳到羅馬的亞細亞省。', lens:'可與林前 16:8–9 並讀。保羅在信中表示要留在以弗所，並提到傳道的機會和反對者。這是書信對他身處以弗所的資料，講堂的名稱和事工時長則見於徒 19。', refs:['acts','cor','date']},
  {id:'books', era:'保羅在以弗所', date:'約公元 50 年代｜徒 19:11–20', title:'耶穌之名與焚燒書卷', type:'經文敘事', text:'徒 19 把士基瓦眾子企圖借用耶穌之名的事件，與人公開承認從前所行、燒掉書卷連在一起。作者以五萬銀錢表達書卷價值之高。', lens:'這個金額來自敘事本身。閱讀時可以追問，書卷、技藝和生計在這段故事裏有何關係。', refs:['acts']},
  {id:'riot', era:'保羅在以弗所', date:'約公元 50 年代｜徒 19:23–41', title:'銀匠、劇場與城市治理', type:'經文敘事', text:'底米丟召集同行，指出保羅的宣講可能影響銀製神龕生意和亞底米的聲望。人群湧入劇場。城裏的書記勸散眾人，指出有法庭、總督，也可循正式集會處理。', lens:'考古遺址確認以弗所有大劇場，並呈現羅馬城市公共建築的規模。騷動、演說和書記的處置則見於徒 19；現存劇場亦經歷了多個時期。', refs:['acts','unesco']},
  {id:'farewell', era:'保羅在以弗所', date:'約公元 50 年代｜徒 20:17–38', title:'米利都告別', type:'經文敘事', text:'保羅從米利都請以弗所的長老到他那裏，回顧自己的事工，囑咐他們照管群體。徒 20:31 的「三年」是告別講話中的回顧，可和徒 19 所列的時段一起讀。', lens:'這次見面的地點在米利都。事件放在時間線上，可以把以弗所的城市事工與後來對教會領袖的託付連起來。', refs:['acts20','acts','date']},
  {id:'procession', era:'保羅之後', date:'公元 104 年', title:'薩魯塔里斯銘文與亞底米巡遊', type:'實物證據', text:'銘文記錄蓋烏斯・維比烏斯・薩魯塔里斯的捐贈，並規定在特定場合把神像與其他象徵城市的像帶往劇場，過程涉及城門與城內路線。銘文原刻在劇場入口附近。', lens:'這份較保羅晚約半世紀的材料展示了宗教、城市榮譽和公共空間如何交疊。它記下的是有規程的巡遊，徒 19 記述的則是一次騷動。', refs:['inscription','procession']},
  {id:'coin', era:'保羅之後', date:'公元 2 世紀｜哈德良時期', title:'鑄在錢幣上的亞底米', type:'實物證據', text:'羅馬省幣目錄 RPC III 2074A 收錄以弗所發行的錢幣。一面是皇帝哈德良，另一面呈現以弗所亞底米。', lens:'正反兩面的圖像給我們一個具體例子，看到羅馬皇帝與地方女神可以同時出現在城市發行的貨幣上。錢幣與徒 19 中的銀製神龕屬不同物件。', refs:['coin','acts']},
  {id:'library', era:'保羅之後', date:'公元 2 世紀', title:'塞爾蘇斯圖書館', type:'考古研究', text:'蓋烏斯・尤利烏斯・阿奎拉為紀念父親塞爾蘇斯而建圖書館。建築鄰近商業市集，地底有塞爾蘇斯的墓室。今日所見的立面經過 1970 年代重組。', lens:'圖書館比保羅到訪晚了數十年。把它放回正確時期，可以用它理解後來羅馬以弗所的城市建設與菁英紀念文化。', refs:['celsus','unesco']},
  {id:'council', era:'保羅之後', date:'公元 431 年', title:'以弗所大公會議', type:'古代歷史', text:'公元 431 年，以弗所成為早期教會大公會議的會址。當地的聖母教堂遺址，以及後世在阿亞索盧克山上的聖約翰大殿遺址，見證城市在不同時期的基督教歷史。', lens:'從徒 19 到 431 年隔了近四個世紀。時間線將這段距離保留下來，方便分辨保羅時期與晚期古代的以弗所。', refs:['unesco']}
];
const positions = [
  {id:'ag', name:'古典五旬節派', representative:'美國神召會', cells:['聖靈的洗與重生有別，在重生之後，賜信徒能力去見證與事奉。','立場文件直接討論徒 19:1–7，將這段放進《使徒行傳》多次領受聖靈的敘事中，作為信徒也可期待這經驗的經文之一。','將說方言視為聖靈的洗最初可見的憑據，並區分此憑據和聚會中運用的方言恩賜。'], refs:['ag','agPaper']},
  {id:'methodist', name:'衛理宗', representative:'美國聯合衛理公會', cells:['在水與聖靈中受洗。聖靈在洗禮前、當中及之後工作，使人參與基督的死與復活，進入教會群體。','按這份文件的框架，徒 19 的水洗與聖靈臨到可放在歸信與進入群體的整體脈絡中讀。這一欄是用文件的洗禮神學來讀該段。','文件講到領受聖靈、歸屬基督與信仰成長，沒有把說方言列為領受聖靈的初始憑據。'], refs:['methodist']},
  {id:'catholic', name:'天主教', representative:'《天主教教理》', cells:['洗禮與堅振同屬基督徒入門聖事；堅振加深洗禮恩寵，使人更能見證基督。','§1288 引用徒 19:5–6，把使徒為受洗者按手、領受聖靈，理解為堅振聖事的源頭之一。','教理以聖事所賜的聖靈恩寵、印記和見證能力說明堅振，沒有把說方言列作堅振的憑據。'], refs:['ccc','vatican']}
];
