const sources = {
  archaeology:['ASCSA｜哥林多城市歷史與時間線','https://www.ascsa.edu.gr/excavations/ancient-corinth/about-the-excavations-1/history-timeline'],
  excavation:['ASCSA｜哥林多考古計劃與研究範圍','https://www.ascsa.edu.gr/excavations/ancient-corinth/about-the-excavations-1'],
  acts18:['《使徒行傳》18章｜保羅、工作與迦流','https://bible.usccb.org/bible/acts/18'],
  cor1:['《哥林多前書》1章｜分黨與群體成員','https://bible.usccb.org/bible/1corinthians/1'],
  cor8:['《哥林多前書》8章｜祭偶像食物與良心','https://bible.usccb.org/bible/1corinthians/8'],
  cor10:['《哥林多前書》10章｜主的桌子與一個身體','https://bible.usccb.org/bible/1corinthians/10'],
  cor11:['《哥林多前書》11章｜主餐、分裂與等候','https://bible.usccb.org/bible/1corinthians/11'],
  cor12:['《哥林多前書》12章｜恩賜與身體','https://bible.usccb.org/bible/1corinthians/12'],
  rom16:['《羅馬書》16章｜非比、該猶與以拉都','https://bible.usccb.org/bible/romans/16'],
  catholic:['梵蒂岡｜《天主教教理》§1362–1381：紀念、祭獻與臨在','https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html'],
  catholicMeal:['梵蒂岡｜《天主教教理》§1382–1401：領受與合一','https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vi_the_paschal_banquet.html'],
  lutheran:['密蘇里路德會｜信仰說明：聖餐與領餐資格','https://www.lcms.org/what-we-believe/beliefs'],
  reformed:['Westminster Theological Seminary｜《西敏信條》第29章','https://wts.edu/wcf'],
  methodist:['聯合衛理公會｜《This Holy Mystery》官方文件入口','https://www.umcdiscipleship.org/resources/this-holy-mystery-a-united-methodist-understanding-of-holy-communion'],
  methodistGrace:['Ask The UMC｜聖餐作為施恩途徑','https://www.umc.org/content/ask-the-umc-what-do-i-need-to-know-about-holy-communion-in-the-united-methodist-church'],
  methodistTable:['聯合衛理公會｜開放的主餐與領餐實踐','https://www.umc.org/en/content/an-open-table-how-united-methodists-understand-communion'],
  methodistMemory:['Ask The UMC｜記念如何超越回想','https://www.umc.org/en/content/ask-the-umc-is-communion-simply-a-ritual-of-remembrance'],
  baptist:['美南浸信會｜《浸信會信仰與信息》2000版第VII條','https://bfm.sbc.net/bfm2000/']
};
const comparisonTopics = ['基督怎樣臨在？','記念與領受恩典','同領一餅與群體','領餐與聚會實踐'];
const comparisonCaption = '五份代表文件對聖餐的理解與實踐';
const compareJumpLabel = '比較五個傳統怎樣理解聖餐';
const researchSourceKeys = ['excavation','archaeology','cor8','cor10','cor11','rom16'];
const events = [
  {id:'colony',era:'城市形成',date:'公元前146年／前44年',title:'從希臘城到羅馬殖民城',type:'歷史與考古',text:'哥林多在公元前146年遭羅馬軍隊摧毀，前44年由凱撒重建為殖民城。閱讀保羅書信時，要把較早的希臘城市與後來的羅馬城市分開。',lens:'研讀問題：一座經歷重建的城市，居民會怎樣建立身份？這是可探索的問題；不能只憑殖民城背景，就斷定每位信徒的出身或價值觀。',refs:['archaeology','cor1']},
  {id:'ports',era:'城市形成',date:'地理背景｜古代至羅馬時期',title:'地峽、港口與移動的人',type:'地理與考古',text:'哥林多位於連接希臘本土與伯羅奔尼撒的地峽旁，交通通向兩側海灣。這個位置有助理解城市的人員流動；《羅馬書》16章提到堅革哩教會及非比，讓港口網絡有了具體的人物面孔。',lens:'把城市交通與書信問安並讀，但不要把每次傳信的路線當作已知。今日運河的面貌亦不能直接套回保羅時代。',refs:['excavation','rom16']},
  {id:'work',era:'保羅與教會',date:'約公元50年代初｜徒18:1–11',title:'工作、住家與福音的起點',type:'經文敘事',text:'保羅到哥林多，遇見同業的亞居拉、百基拉，與他們同住並工作。他在會堂辯論，後來到敬畏神的提多猶士都家中；管會堂的基利司布和全家也信主。徒18記述他在城裏教導一年零六個月。',lens:'經文呈現工作、家庭和會堂交織的關係網。不能因此宣稱已找到保羅的工場，或把所有聚會都定位在同一座房屋。年份是行程重建的概略範圍。',refs:['acts18']},
  {id:'bema',era:'保羅與教會',date:'公元1世紀｜徒18:12–17',title:'審判臺：公共空間與權力',type:'經文與遺址',text:'徒18記述保羅被帶到迦流的審判臺前。哥林多廣場現存一座常被稱為Bema的平台，研究與導覽常將它和這段故事聯繫起來。',lens:'遺址能幫助想像羅馬城市的公共治理；「存在這類平台」與「能確認保羅站過的確切位置」是不同層次的判斷。先讀迦流拒絕審理的理由，再問宗教爭論如何進入城市法庭。',refs:['acts18','archaeology']},
  {id:'status',era:'保羅與教會',date:'公元1世紀｜林前1:10–31',title:'分黨、體面與誰值得被聽見',type:'經文研讀',text:'哥林多人以保羅、亞波羅、磯法等名字表達歸屬。保羅回應時，把群體帶回基督的十字架，又提醒他們：按人的標準，有智慧、有能力、出身尊貴的並不多。這不等於教會所有人都同樣貧窮。',lens:'可探索城市的身份與榮譽如何影響教會，但「每一派恰好對應某階級」需要額外證據。經文明說的分黨，比我們重建派系成員的細節更確定。',refs:['cor1']},
  {id:'house',era:'餐桌與信仰',date:'公元1世紀｜羅16:23；林前11',title:'家庭聚會：我們知道房間點安排嗎？',type:'經文與重建界線',text:'羅16:23提到該猶接待保羅和全教會，顯示接待者在群體生活中的重要性。林前11則直接說有人飢餓、有人醉酒，並責備羞辱沒有的人。',lens:'可以假設房屋空間、身份或到達時間加劇差距，作為待檢驗的重建；經文沒有交代房間平面、座位表或每人到達的鐘數。本頁不把任何發掘房屋指認為這場主餐的會址。',refs:['rom16','cor11']},
  {id:'food',era:'餐桌與信仰',date:'公元1世紀｜林前8；10:14–33',title:'神廟、市場與朋友飯局',type:'經文研讀',text:'保羅討論在偶像廟裏坐席，也討論市場出售的食物及不信者邀請的飯局。他的回應要按情境細讀：既拒絕參與偶像崇拜，也顧及別人的良心與益處。',lens:'不要把所有吃肉的場合合併成同一條規則。並讀8:10、10:20–21、10:25及10:27–29：參與祭祀、買食物和被告知祭肉，分別帶出甚麼問題？',refs:['cor8','cor10']},
  {id:'supper',era:'餐桌與信仰',date:'公元1世紀｜林前11:17–34',title:'有人飢餓，有人醉酒：誰的晚餐？',type:'經文研讀',text:'保羅說他們聚在一起，竟不是吃主的晚餐，因為各人先吃自己的飯，甚至羞辱沒有的人。他隨後傳述耶穌設立主餐的傳統，要求自省，最後囑咐聚餐時彼此等候。',lens:'把責備、設立主餐的傳統、自省和彼此等候連起來讀。「不按理」先描述吃喝的方式，不能簡化成「我必須先成為毫無過失的人」。對主的身體的辨認亦涉及聖餐與群體的解釋討論。',refs:['cor11'],compare:true},
  {id:'body',era:'餐桌與信仰',date:'公元1世紀｜林前10:16–17；12:12–27',title:'一個餅、一個身體與軟弱的肢體',type:'經文並讀',text:'林前10把同領一餅與成為一個身體連在一起；12章又以身體和肢體說明不同恩賜，強調看來較軟弱的肢體仍不可缺少。',lens:'這裏是跨段落的神學並讀：從餐桌走到彼此照顧。可問：若有人在聚會中長期被忽略，群體可以怎樣具體回應自己所領受的主餐？這是研讀應用，並非考古結論。',refs:['cor10','cor12'],compare:true},
  {id:'erastus',era:'證據辨讀',date:'羅馬時期｜銘文與羅16:23',title:'以拉都銘文：同名就等於同一人？',type:'實物與身份推論',text:'劇場附近的鋪路銘文記下一位名叫Erastus的人自費鋪路，並提到市政職位。羅16:23也有一位任城市財政職務的以拉都。有研究把兩者聯繫起來。',lens:'銘文證明一位同名捐贈者及其市政活動；要認定他就是保羅書信的人物，仍須比較年代、職銜與身份。這項對應應保留為討論，不能用作已證實教會有某位高官的唯一根據。',refs:['archaeology','rom16']}
];
const positions = [
  {id:'catholic',name:'天主教',representative:'《天主教教理》§1362–1401',cells:[
    '基督以獨特而真實的方式臨在。祝聖使餅酒的實體轉變為基督的體血，餅酒的外形仍存；教理稱此為「實體轉變」。',
    '感恩祭紀念並使基督唯一的逾越祭獻以聖事方式臨現；不是再釘一次十字架。領受使人更緊密與基督結合，滋養愛德。',
    '領受者與基督及教會的結合加深。教理§1396以林前10:16–17說明聖體聖事建立教會的合一。',
    '教理鼓勵妥善準備並在彌撒中領受；自知有重罪者須先領和好聖事。與教會完全共融是通常原則；§1401列有受限的特殊情況。'
  ],refs:['catholic','catholicMeal']},
  {id:'lutheran',name:'路德宗',representative:'美國密蘇里路德會（LCMS）',cells:[
    '基督的真體真血在餅酒中、同餅酒並在餅酒之下賜予領受者。這份說明堅持真實臨在，沒有把聖餐化為單純心中回想。',
    '基督藉聖餐賜下赦罪、生命與救恩；信心倚靠基督的應許領受恩益。重點是基督給人的恩賜。',
    '共同領餐也是共同承認信仰的行動，因此這個教會把教義上的共識與餐桌相交連在一起。',
    'LCMS通常接納本會及相交教會中合資格的會友，牧者可處理特殊個案。這是LCMS的實踐，不能套用到所有路德宗教會。'
  ],refs:['lutheran']},
  {id:'reformed',name:'改革宗',representative:'《西敏信條》第29章',cells:[
    '餅酒仍是餅酒。合宜領受者憑信心，真實但屬靈地領受基督及其恩益；基督的體血並非以肉身方式在餅酒中。',
    '聖餐持續紀念基督一次的獻上，印證恩益，滋養信徒成長；因此「記念」與「領受屬靈餵養」並不互相排斥。',
    '第29.1條把聖餐稱為與基督、並與其他肢體相交的連結和憑據。它同時關乎個人信心與教會群體。',
    '第29章要求按基督設立的方式在群體中施行，並討論不合宜領受。文本沒有在本章規定每週或每月的固定次數。'
  ],refs:['reformed']},
  {id:'methodist',name:'衛理宗',representative:'美國聯合衛理公會（UMC）',cells:[
    '肯定復活基督在聖餐中的真實臨在；聖靈使群體藉餅酒與基督相交。官方說明以奧祕及聖靈工作表達，不要求用實體轉變解釋。',
    '聖餐是施恩途徑：記念救贖，也在當下領受滋養、更新，盼望神的將來。領受者的回應包括愛神、愛人與服侍。',
    '大祝謝禱文祈求信徒與基督合一、彼此合一，並在世界中同作事工。餐桌相交延伸到群體及世界的生活。',
    '官方鼓勵每週領餐，邀請愛基督、悔罪並願與人和睦者；未受洗者若領受，應引導其受洗。這是UMC原則，香港堂會安排須另查。'
  ],refs:['methodist','methodistGrace','methodistTable','methodistMemory']},
  {id:'baptist',name:'浸信會',representative:'美南浸信會《信仰與信息》2000版',cells:[
    '第VII條以象徵性的順服行動描述主餐。這份簡短宣言未詳細建立基督臨在方式的理論，不能只憑它斷言所有浸信會否定任何屬靈臨在。',
    '信徒藉餅與葡萄所出的汁記念救贖主之死，並期待祂再來。宣言以順服與記念表述，沒有採用實體轉變的框架。',
    '文件描述教會成員一同參與的行動；讀者可與林前10–11章並讀，思考記念基督如何塑造共同生活。後一句是本頁研讀建議。',
    '第VII條把信徒浸禮列作領主餐的先決條件；沒有指定領餐頻率。浸信會堂會自治，此代表文件不涵蓋所有堂會的領餐政策。'
  ],refs:['baptist']}
];
