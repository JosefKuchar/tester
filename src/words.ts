import { v1 } from "uuid";

export let words = [
  {
    name: "Chapter 2",
    words: [
      {
        name: "Parts of a house",
        words: [
          { en: ["attic", "loft"], cs: ["podkroví", "půda"] },
          { en: ["balcony"], cs: ["balkon"] },
          { en: ["basement", "cellar"], cs: ["suterén", "sklep"] },
          { en: ["boiler room"], cs: ["technická místnost", "kotelna"] },
          { en: ["ceiling"], cs: ["strop"] },
          { en: ["chimney"], cs: ["komín"] },
          { en: ["dressing room"], cs: ["šatník"] },
          { en: ["door"], cs: ["dveře"] },
          { en: ["back door"], cs: ["zadní dveře"] },
          { en: ["front door"], cs: ["vstupní dveře"] },
          { en: ["downstairs"], cs: ["přízemí"] },
          { en: ["drive"], cs: ["příjezdová cesta"] },
          { en: ["fence"], cs: ["plot"] },
          { en: ["floor"], cs: ["patro", "podlaha"] },
          { en: ["garage"], cs: ["garáž"] },
          { en: ["underground garage"], cs: ["podzemní garáž"] },
          { en: ["garden"], cs: ["zahrada"] },
          { en: ["front garden"], cs: ["předzahrádka"] },
          { en: ["rear garden"], cs: ["zahrada za domem"] },
          { en: ["gate"], cs: ["vrata"] },
          { en: ["laundry"], cs: ["prádelna"] },
          { en: ["lawn"], cs: ["trávník"] },
          { en: ["letterbox"], cs: ["schránka na poštu"] },
          { en: ["roof"], cs: ["střecha"] },
          { en: ["staircase"], cs: ["schodiště"] },
          { en: ["stairs"], cs: ["schody"] },
          { en: ["toilet"], cs: ["toaleta"] },
          { en: ["upstairs"], cs: ["patro", "horní podlaží"] },
          { en: ["WC"], cs: ["WC"] },
          { en: ["window"], cs: ["okno"] }
        ]
      },
      {
        name: "Furniture and accessories",
        words: [
          {
            name: "In the whole house",
            words: [
              { en: ["blind"], cs: ["roleta", "žaluzie"] },
              { en: ["central heating"], cs: ["ústřední topení"] },
              { en: ["curtain"], cs: ["závěs", "záclona"] },
              { en: ["doorbell"], cs: ["zvonek u dveří"] },
              { en: ["doormat"], cs: ["rohožka"] },
              { en: ["electrical appliances"], cs: ["elektrický spotřebič"] },
              { en: ["fitted carpet"], cs: ["celoplošný koberec"] },
              { en: ["fitting"], cs: ["instalace", "armatura"] },
              { en: ["furniture"], cs: ["nábytek"] },
              { en: ["hall"], cs: ["předsíň"] },
              { en: ["household appliances"], cs: ["domácí spotřebiče"] },
              { en: ["light"], cs: ["lampa", "světlo"] },
              { en: ["light bulb"], cs: ["žárovka"] },
              { en: ["net curtain"], cs: ["záclona"] },
              { en: ["plant"], cs: ["rostlina"] },
              { en: ["radiator"], cs: ["radiátor", "topení"] },
              { en: ["vacuum cleaner"], cs: ["vysavač"] },
              { en: ["wallpaper"], cs: ["tapeta"] },
              { en: ["windowsill"], cs: ["okenní parapet"] }
            ]
          },
          {
            name: "Bathroom",
            words: [
              { en: ["bath"], cs: ["vana"] },
              { en: ["bathroom"], cs: ["koupelna"] },
              { en: ["mirror"], cs: ["zrcadlo"] },
              { en: ["shower"], cs: ["sprcha"] },
              { en: ["soap"], cs: ["mýdlo"] },
              { en: ["tap"], cs: ["kohoutek"] },
              { en: ["toothbrush"], cs: ["zubní kartáček"] },
              { en: ["towel"], cs: ["ručník"] },
              { en: ["washbasin"], cs: ["umyvadlo"] },
              { en: ["washing machine"], cs: ["pračka"] }
            ]
          },
          {
            name: "Bedroom",
            words: [
              { en: ["bed"], cs: ["postel"] },
              { en: ["bedding"], cs: ["ložní prádlo"] },
              { en: ["bedroom"], cs: ["ložnice"] },
              { en: ["bedside table"], cs: ["noční stolek"] },
              { en: ["blanket"], cs: ["přikrývka"] },
              { en: ["bookshelf"], cs: ["police na knihy"] },
              { en: ["chair"], cs: ["židle"] },
              { en: ["mattress"], cs: ["matrace"] },
              { en: ["pillow"], cs: ["polštář"] },
              { en: ["rug"], cs: ["kobereček"] },
              { en: ["sheet"], cs: ["prostěradlo"] },
              { en: ["shelf"], cs: ["police"] },
              { en: ["wardrobe"], cs: ["šatník"] }
            ]
          },
          {
            name: "Sitting room / living room",
            words: [
              { en: ["armchair"], cs: ["křeslo"] },
              { en: ["audio system", "stereo"], cs: ["stereo zařízení"] },
              { en: ["bookcase"], cs: ["knihovna"] },
              { en: ["carpet"], cs: ["koberec"] },
              { en: ["CD player"], cs: ["CD přehrávač"] },
              { en: ["coffee table"], cs: ["konferenční stolek"] },
              { en: ["couch", "sofa"], cs: ["pohovka"] },
              { en: ["cushion"], cs: ["polštářek"] },
              { en: ["dinning table"], cs: ["jídelní stůl"] },
              { en: ["fireplace"], cs: ["krb"] },
              { en: ["living room", "sitting room"], cs: ["obývací pokoj"] },
              { en: ["TV set"], cs: ["televize"] }
            ]
          },
          {
            name: "Kitchen",
            words: [
              { en: ["cooker"], cs: ["sporák"] },
              { en: ["electric cooker"], cs: ["elektrický sporák"] },
              { en: ["crockery"], cs: ["porcelánové (stolní) nádobí"] },
              { en: ["cupboard"], cs: ["skříňka"] },
              { en: ["cutlery"], cs: ["příbory"] },
              { en: ["dishwasher"], cs: ["myčka"] },
              { en: ["freezer"], cs: ["mrazák"] },
              { en: ["fridge"], cs: ["lednička"] },
              { en: ["kettle"], cs: ["konvice"] },
              { en: ["electric kettle"], cs: ["varná konvice"] },
              { en: ["kitchen"], cs: ["kuchyně"] },
              { en: ["kitchen table"], cs: ["kuchyňský stůl"] },
              { en: ["microwave oven"], cs: ["mikrovlnná trouba"] },
              { en: ["oven"], cs: ["trouba"] },
              { en: ["running water"], cs: ["tekoucí voda"] },
              { en: ["sink"], cs: ["dřez"] },
              { en: ["teapot"], cs: ["konvice na čaj"] }
            ]
          }
        ]
      },
      {
        name: "Types of houses and flats",
        words: [
          { en: ["apartment", "flat"], cs: ["byt"] },
          { en: ["bedsit"], cs: ["obývací ložnice"] },
          { en: ["double bedsit"], cs: ["obývací ložnice pro dvě osoby"] },
          { en: ["block of flats"], cs: ["bytový dům"] },
          { en: ["bungalow"], cs: ["přízemní domek"] },
          { en: ["cottage"], cs: ["chalupa", "chata"] },
          { en: ["detached house"], cs: ["samostatný dům"] },
          { en: ["farmhouse"], cs: ["usedlost", "zemědělské stavení"] },
          { en: ["high rise", "towerblock"], cs: ["věžák"] },
          { en: ["mansion"], cs: ["sídlo", "velký obytný dům"] },
          { en: ["office building"], cs: ["kancelářská budova"] },
          { en: ["residential building"], cs: ["obytná budova"] },
          { en: ["semi-detached house"], cs: ["dvojdomek"] },
          { en: ["skyscraper"], cs: ["mrakodrap"] },
          { en: ["studio flat"], cs: ["garsonka"] },
          { en: ["terraced house"], cs: ["řadový dům"] },
          { en: ["two-roomed flat"], cs: ["dvoupokojový byt"] }
        ]
      },
      {
        name: "Renting a flat",
        words: [
          {
            name: "Renting a flat",
            words: [
              { en: ["accommodation"], cs: ["ubytování"] },
              { en: ["bill"], cs: ["účet", "poplatek"] },
              { en: ["electricity bill"], cs: ["poplatek za elektřinu"] },
              { en: ["excluding bills"], cs: ["poplatky navíc"] },
              { en: ["including bills"], cs: ["poplatky zahrnuté v ceně"] },
              { en: ["telephone bill"], cs: ["účet za telefon"] },
              { en: ["estate agent"], cs: ["realitní makléř"] },
              { en: ["flatmate"], cs: ["spolubydlící (v bytě)"] },
              { en: ["for sale"], cs: ["na prodej"] },
              { en: ["landlady"], cs: ["domácí", "majitelka bytu"] },
              { en: ["landlord"], cs: ["domácí", "majitel bytu"] },
              { en: ["per month"], cs: ["měsíčně"] },
              { en: ["per week"], cs: ["týdně"] },
              { en: ["reasonable price"], cs: ["přijatelná cena"] },
              { en: ["rent"], cs: ["nájem"] },
              { en: ["roommate"], cs: ["spolubydlící (v pokoji)"] },
              { en: ["tenant"], cs: ["nájemník"] },
              { en: ["to let"], cs: ["k pronájmu"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              {
                en: ["can afford something", "could afford something"],
                cs: ["moci si něco dovolit (finančně)"]
              },
              {
                en: ["find a place of your own"],
                cs: ["najít si vlastní bydlení"]
              },
              { en: ["let a flat"], cs: ["pronajmout byt"] },
              { en: ["pay in advance"], cs: ["zaplatit předem"] },
              { en: ["pay the bills"], cs: ["platit poplatky"] },
              { en: ["pay the rent"], cs: ["platit nájem"] },
              { en: ["rent a flat"], cs: ["pronajmout si byt"] },
              {
                en: ["share a flat", "share a room"],
                cs: ["bydlet společně v bytě", "bydlet společně v pokoji"]
              }
            ]
          }
        ]
      },
      {
        name: "Location",
        words: [
          {
            en: ["amenities", "facilities"],
            cs: ["vybavenost", "infrastruktura"]
          },
          { en: ["area"], cs: ["oblast"] },
          { en: ["capital", "capital city"], cs: ["hlavní město"] },
          { en: ["city"], cs: ["velkoměsto"] },
          { en: ["conveniently located"], cs: ["výhodně situovaný"] },
          { en: ["countryside", "the country", "village"], cs: ["venkov"] },
          { en: ["district"], cs: ["oblast"] },
          { en: ["easy access to something"], cs: ["snadný přístup k něčemu"] },
          { en: ["home town"], cs: ["domovské město"] },
          { en: ["housing estate"], cs: ["sídliště"] },
          { en: ["inhabitant", "resident"], cs: ["obyvatel"] },
          { en: ["location"], cs: ["poloha", "umístění"] },
          { en: ["neighbour"], cs: ["soused"] },
          { en: ["neighbourhood"], cs: ["okolí"] },
          { en: ["old town"], cs: ["staré město"] },
          { en: ["public transport"], cs: ["hromadná doprava"] },
          { en: ["rural"], cs: ["venkovský"] },
          { en: ["slums"], cs: ["slumy"] },
          { en: ["suburbs"], cs: ["předměstí"] },
          { en: ["tourist resort"], cs: ["turistické středisko"] },
          { en: ["tourist town"], cs: ["turistické město"] },
          { en: ["town"], cs: ["město"] },
          { en: ["underground station"], cs: ["stanice metra"] },
          { en: ["urban"], cs: ["městský"] },
          { en: ["view off"], cs: ["vyhlídka", "výhled"] }
        ]
      },
      {
        name: "Conditions and size",
        words: [
          {
            name: "Conditions and size",
            words: [
              { en: ["ancient"], cs: ["starožitný", "starodávný"] },
              { en: ["bare"], cs: ["holý"] },
              { en: ["bright"], cs: ["jasný"] },
              { en: ["comfortable"], cs: ["pohodlný"] },
              { en: ["uncomfortable"], cs: ["nepohodlný"] },
              { en: ["cosy"], cs: ["útulný"] },
              { en: ["fitted kitchen"], cs: ["kuchyně na míru"] },
              { en: ["furnished"], cs: ["zařízený"] },
              { en: ["unfurnished"], cs: ["nezařízený"] },
              { en: ["in bad condition"], cs: ["ve špatném stavu"] },
              { en: ["in good condition"], cs: ["v dobrém stavu"] },
              { en: ["modern"], cs: ["moderní"] },
              { en: ["recently renovated"], cs: ["nedávno zrenovovaný"] },
              { en: ["roomy", "spacious"], cs: ["prostorný"] },
              { en: ["tiny"], cs: ["maličký"] }
            ]
          },
          {
            name: "Verbs and expressions",
            words: [
              { en: ["collapse", "fall down"], cs: ["zhroutit se"] },
              { en: ["DIY", "Do it yourself"], cs: ["udělej si sám"] },
              {
                en: ["do up one's house", "redecorate"],
                cs: ["vylepšovat dům", "nově vymalovat"]
              }
            ]
          }
        ]
      },
      {
        name: "Housework",
        words: [
          {
            name: "Verbs",
            words: [
              { en: ["clean"], cs: ["mýt", "čistit"] },
              { en: ["commute"], cs: ["dojíždět do práce"] },
              { en: ["cook"], cs: ["vařit"] },
              { en: ["vacuum"], cs: ["luxovat"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["be at home", "be in home"], cs: ["být doma"] },
              { en: ["clean the bathroom"], cs: ["umýt koupelnu"] },
              { en: ["clean the floors"], cs: ["umýt podlahy"] },
              { en: ["clean the windows"], cs: ["umýt okna"] },
              { en: ["clean up the mess"], cs: ["uklidit nepořádek"] },
              { en: ["do the cooking"], cs: ["vařit"] },
              {
                en: ["do the dishes", "do the washing-up"],
                cs: ["mýt nádobí"]
              },
              {
                en: ["do the housework", "do household jobs"],
                cs: ["dělat domácí práce"]
              },
              { en: ["do the ironing"], cs: ["žehlit"] },
              { en: ["do the shopping"], cs: ["nakupovat"] },
              { en: ["do the washing"], cs: ["prát"] },
              { en: ["feel homesick"], cs: ["stýskat si po domově"] },
              { en: ["get home"], cs: ["dostat se domů"] },
              { en: ["leave the house"], cs: ["odejít z domu"] },
              { en: ["lock the door"], cs: ["zamknout dveře"] },
              { en: ["make the beds"], cs: ["stlát postele"] },
              { en: ["move house"], cs: ["přestěhovat se"] },
              { en: ["move in"], cs: ["nastěhovat se"] },
              { en: ["move out"], cs: ["vystěhovat se"] },
              { en: ["put away one's clothes"], cs: ["uklidit si oblečení"] },
              { en: ["see somebody home"], cs: ["vyprovodit někoho domů"] },
              { en: ["stay in"], cs: ["zůstat doma"] },
              { en: ["stay out"], cs: ["zůstat venku"] }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Chapter 3",
    words: [
      {
        name: "Types of schools",
        audio: [6],
        words: [
          { en: ["academy"], cs: ["akademie"], audio: [7] },
          {
            en: ["elementary school", "primary school"],
            cs: ["základní škola"],
            audio: [8, 9]
          },
          {
            en: ["high school", "secondary school"],
            cs: ["střední škola"],
            audio: [10, 11]
          },
          { en: ["independent school"], cs: ["soukromá škola"], audio: [12] },
          {
            en: ["kindergarden", "nursery school"],
            cs: ["mateřská škola"],
            audio: [13]
          },
          {
            en: ["middle school", "junior high school"],
            cs: ["střední škola"],
            audio: [14]
          },
          {
            en: ["mixed school", "co-educational school"],
            cs: ["koedukační škola"],
            audio: [15, 16]
          },
          {
            en: ["private school", "public school"],
            cs: ["soukromá škola"],
            audio: [17]
          },
          {
            en: ["single-sex school"],
            cs: ["chlapecká nebo dívčí škola"],
            audio: [18]
          },
          {
            en: ["state school", "public school"],
            cs: ["státní škola"],
            audio: [19]
          },
          { en: ["university"], cs: ["univerzita"], audio: [20] },
          {
            en: ["vocational school"],
            cs: ["učňovská škola", "odborná škola"],
            audio: [21]
          }
        ]
      },
      {
        name: "Places in a school",
        audio: [22],
        words: [
          {
            en: ["canteen", "dining room"],
            cs: ["školní jídelna"],
            audio: [23]
          },
          { en: ["classroom"], cs: ["třída"], audio: [24] },
          {
            en: ["common room"],
            cs: ["studovna", "místnost pro odpočinek"],
            audio: [25]
          },
          { en: ["computer room"], cs: ["počítačová učebna"], audio: [26] },
          { en: ["corridor"], cs: ["chodba"], audio: [27] },
          { en: ["gym"], cs: ["tělocvična"], audio: [28] },
          { en: ["headmaster's office"], cs: ["ředitelna"], audio: [29] },
          { en: ["laboratory", "lab"], cs: ["laboratoř"], audio: [30, 31] },
          { en: ["library"], cs: ["knihovna"], audio: [32] },
          { en: ["office"], cs: ["kabinet", "kancelář"], audio: [33] },
          { en: ["playground"], cs: ["hřiště"], audio: [34] },
          {
            en: ["science lab"],
            cs: ["učebna fyziky", "učebna biologie", "učebna chemie"],
            audio: [35]
          },
          { en: ["sports field"], cs: ["sportovní hřiště"], audio: [36] },
          { en: ["staffroom"], cs: ["sborovna"], audio: [37] }
        ]
      },
      {
        name: "People in a school",
        audio: [38],
        words: [
          { en: ["classmate"], cs: ["spolužák"], audio: [39] },
          { en: ["collage student"], cs: ["student"], audio: [40] },
          {
            en: ["deputy head", "assistant principal"],
            cs: ["zástupce ředitele"],
            audio: [41]
          },
          { en: ["examiner"], cs: ["zkoušející"], audio: [42] },
          { en: ["form teacher"], cs: ["třídní učitel"], audio: [43] },
          {
            en: ["headmaster", "head teacher", "principal"],
            cs: ["ředitel"],
            audio: [44]
          },
          {
            en: ["headmistress", "head teacher", "principal"],
            cs: ["ředitelka"],
            audio: [45]
          },
          { en: ["lacturer"], cs: ["přednášející", "lektor"], audio: [46] },
          { en: ["professor"], cs: ["profesor"], audio: [47] },
          {
            en: ["schoolboy", "pupil"],
            cs: ["školák", "žák"],
            audio: [48, 49]
          },
          {
            en: ["schoolgirl", "pupil"],
            cs: ["školačka", "žačka"],
            audio: [50]
          },
          { en: ["schoolmate"], cs: ["spolužák ze školy"], audio: [51] },
          { en: ["secretary"], cs: ["sekretář", "sekretářka"], audio: [52] },
          { en: ["student"], cs: ["student"], audio: [53] },
          { en: ["teacher"], cs: ["učitel"], audio: [54] },
          { en: ["teaching staff"], cs: ["pedagogický sbor"], audio: [55] },
          {
            en: ["university student"],
            cs: ["student univerzity"],
            audio: [56]
          }
        ]
      },
      {
        name: "School subjects",
        audio: [57],
        words: [
          { en: ["Art"], cs: ["umění"], audio: [58] },
          { en: ["Biology"], cs: ["biologie"], audio: [59] },
          { en: ["Chemistry"], cs: ["chemie"], audio: [60] },
          {
            en: ["Civic studies", "Civics"],
            cs: ["občanská výchova"],
            audio: [61]
          },
          { en: ["club"], cs: ["klub", "kroužek"], audio: [62] },
          {
            en: ["Czech language and literature"],
            cs: ["český jazyk a literatura"],
            audio: [63]
          },
          {
            en: ["English language and literature"],
            cs: ["anglický jazyk a literatura"],
            audio: [64]
          },
          { en: ["foreign languages"], cs: ["cizí jazyky"], audio: [65] },
          { en: ["Geography"], cs: ["zeměpis"], audio: [66] },
          { en: ["humanities"], cs: ["humanitní předměty"], audio: [67] },
          { en: ["History"], cs: ["dějepis"], audio: [68] },
          {
            en: [
              "Information and Communication Technology",
              "Information Technology",
              "ICT",
              "IT"
            ],
            cs: ["informatika"],
            audio: [69, 70, 71, 72]
          },
          { en: ["Mathematics", "Maths"], cs: ["matematika"], audio: [73] },
          { en: ["Music"], cs: ["hudba"], audio: [74] },
          {
            en: ["Physical Education", "PE"],
            cs: ["tělesná výchova"],
            audio: [75]
          },
          { en: ["Physics"], cs: ["fyzika"], audio: [76] },
          {
            en: ["Religious Education", "RE"],
            cs: ["výchova k náboženství"],
            audio: [77]
          },
          { en: ["Science"], cs: ["přírodní vědy"], audio: [78] },
          { en: ["subject"], cs: ["předmět"], audio: [79] }
        ]
      },
      {
        name: "School objects",
        audio: [80],
        words: [
          { en: ["blackboard"], cs: ["tabule"] },
          { en: ["blackboard marker"], cs: ["fix na tabuli"] },
          { en: ["board"], cs: ["tabule"] },
          { en: ["calculator"], cs: ["kalkulačka"] },
          { en: ["chalk"], cs: ["křída"] },
          { en: ["copybook", "notebook"], cs: ["sešit"] },
          { en: ["coursebook", "textbook"], cs: ["učebnice"] },
          { en: ["duster"], cs: ["houba", "utěrka na tabuli"] },
          { en: ["exercise book", "workbook"], cs: ["sešit"] },
          { en: ["file"], cs: ["pořadač", "šanon"] },
          { en: ["folder"], cs: ["desky"] },
          { en: ["interactive whiteboard"], cs: ["interaktivní tabule"] },
          { en: ["locker"], cs: ["zamykací skříňka"] },
          { en: ["PE kit"], cs: ["cvičební úbor"] },
          { en: ["pen"], cs: ["pero", "propisovačka"] },
          { en: ["pencil"], cs: ["tužka"] },
          { en: ["pencil case"], cs: ["penál"] },
          { en: ["pencil sharpener"], cs: ["ořezávátko"] },
          { en: ["row of desks"], cs: ["řada lavic", "oddělení"] },
          { en: ["rubber"], cs: ["guma"] },
          { en: ["ruler"], cs: ["pravítko"] },
          { en: ["whiteboard"], cs: ["bílá tabule"] }
        ]
      },
      {
        name: "Exams",
        words: [
          {
            name: "Exams",
            words: [
              { en: ["academic results"], cs: ["studijní výsledky"] },
              { en: ["academic standards"], cs: ["studijní požadavky"] },
              { en: ["exam paper"], cs: ["test"] },
              { en: ["past exam paper"], cs: ["test z minulých let"] },
              { en: ["exam results"], cs: ["výsledky zkoušky"] },
              { en: ["examination", "exam"], cs: ["zkoušky"] },
              {
                en: ["get a place at a university"],
                cs: ["dostat se na univerzitu"]
              },
              {
                en: ["school-leaving exam"],
                cs: ["závěrečná zkouška", "maturita"]
              },
              {
                en: ["university entrance exam"],
                cs: ["přijímací zkouška na univerzitu"]
              }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["cheat in an exam"], cs: ["podvádět při zkoušce"] },
              {
                en: ["do an exam", "sit an exam", "take an exam"],
                cs: ["skládat zkoušku"]
              },
              {
                en: ["do badly in an exam"],
                cs: ["mít špatné výsledky u zkoušky"]
              },
              {
                en: ["do well in an exam"],
                cs: ["mít dobré výsledky u zkoušky"]
              },
              { en: ["fail an exam"], cs: ["propadnout u zkoušky"] },
              {
                en: ["get 56 marks in a test", "score 56 marks in a test"],
                cs: ["dostat v testu 56 bodů"]
              },
              { en: ["grade", "mark"], cs: ["stupeň", "známka"] },
              {
                en: ["grade exam papers", "mark exam papers"],
                cs: ["známkovat zkouškové archy", "známkovat zkouškové otázky"]
              },
              { en: ["grade a test", "mark a test"], cs: ["známkovat test"] },
              {
                en: ["grade homework", "mark homework"],
                cs: ["známkovat domácí úkol"]
              },
              { en: ["pass an exam"], cs: ["složit zkoušku"] },
              {
                en: ["prepare for an exam"],
                cs: ["připravovat se na zkoušku"]
              },
              { en: ["retake an exam"], cs: ["opakovat zkoušku"] },
              { en: ["revise for an exam"], cs: ["opakovat si na zkoušku"] },
              { en: ["study for an exam"], cs: ["učit se na zkoušku"] }
            ]
          }
        ]
      },
      {
        name: "Being at school / Studying",
        words: [
          {
            name: "Being at school / Studying",
            words: [
              { en: ["absence"], cs: ["nepřítomnost"] },
              { en: ["absent"], cs: ["nepřítomen"] },
              { en: ["attendance"], cs: ["docházka"] },
              { en: ["break"], cs: ["přestávka"] },
              {
                en: ["bully"],
                cs: ["ten, kdo šikanuje", "ten, kdo ubližuje spolužákům"]
              },
              { en: ["clas"], cs: ["lekce", "vyučování"] },
              { en: ["competition"], cs: ["soutěž"] },
              { en: ["compulsory"], cs: ["povinný"] },
              { en: ["deadline"], cs: ["termín", "lhůta"] },
              { en: ["grade", "mark"], cs: ["stupeň", "známka"] },
              { en: ["grant", "scholarship"], cs: ["stipendium"] },
              { en: ["holiday"], cs: ["prázdniny"] },
              { en: ["learning difficulties"], cs: ["poruchy učení"] },
              { en: ["lesson"], cs: ["hodina", "lekce"] },
              { en: ["lunch break"], cs: ["přestávka na oběd"] },
              { en: ["newcomer"], cs: ["nový žák"] },
              { en: ["optional"], cs: ["nepovinný", "volitelný"] },
              { en: ["present"], cs: ["přítomný", "současný"] },
              { en: ["school certificate"], cs: ["vysvědčení"] },
              { en: ["school fee"], cs: ["školné"] },
              { en: ["school trip"], cs: ["školní výlet"] },
              { en: ["set books"], cs: ["školní četba"] },
              { en: ["sports club"], cs: ["sportovní klub", "sportovní tým"] },
              { en: ["staff meeting"], cs: ["pedagogická rada"] },
              { en: ["term"], cs: ["semestr", "pololetí"] },
              { en: ["timetable"], cs: ["rozvrh hodin"] },
              { en: ["written work"], cs: ["písemná práce"] }
            ]
          },
          {
            name: "Verbs",
            words: [
              { en: ["attend"], cs: ["chodit do školy"] },
              { en: ["chatter"], cs: ["povídat"] },
              { en: ["learn"], cs: ["učit se"] },
              { en: ["set"], cs: ["zadat"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["attend a course"], cs: ["chodit do kuzu"] },
              { en: ["attend classes"], cs: ["chodit na vyučování"] },
              { en: ["attend school"], cs: ["chodit do školy"] },
              { en: ["discuss set books"], cs: ["rezebírat povinnou četbu"] },
              { en: ["do a course"], cs: ["studovat obor"] },
              { en: ["do a project"], cs: ["dělat projekt"] },
              {
                en: ["do a task", "do an activity"],
                cs: ["dělat úkol", "zabývat se činností"]
              },
              { en: ["do an exercise"], cs: ["dělat cvičení"] },
              { en: ["do an experiment"], cs: ["provádět pokus"] },
              { en: ["do homework"], cs: ["dělat domácí úkol"] },
              { en: ["do one's best"], cs: ["pracovat co nejlépe"] },
              { en: ["go to school"], cs: ["chodit do školy"] },
              { en: ["hand in homework"], cs: ["odevzdat domácí úkol"] },
              { en: ["have a break"], cs: ["dát si pauzu"] },
              { en: ["make a presentation"], cs: ["dělat prezentace"] },
              { en: ["make mistakes"], cs: ["dělat chyby"] },
              { en: ["make notes"], cs: ["dělat si poznámky"] },
              { en: ["make progress"], cs: ["dělat pokroky"] },
              { en: ["memorise", "learn by heart"], cs: ["učit se nazpaměť"] },
              { en: ["miss lessons"], cs: ["zameškat hodiny"] },
              {
                en: ["participate", "take part in a lesson"],
                cs: ["zapojit se v hodině"]
              },
              {
                en: ["pay attention in class"],
                cs: ["dávat při vyučování pozor"]
              },
              { en: ["read maps"], cs: ["šíst z mapy"] },
              {
                en: ["set an essay"],
                cs: ["zadat písemnou práci", "zadat esej"]
              },
              { en: ["set homework"], cs: ["zadat domácí úkol"] },
              { en: ["skip classes", "play truant"], cs: ["chodit za školu"] },
              { en: ["solve a problem"], cs: ["řešit problém"] },
              { en: ["study hard"], cs: ["pilně studovat"] },
              { en: ["study sources"], cs: ["studijní prameny"] },
              { en: ["take the register"], cs: ["zapsat do třídnice"] },
              { en: ["turn up late", "be late"], cs: ["přijít pozdě"] },
              { en: ["wipe the board"], cs: ["smazat tabuli"] },
              { en: ["write an essay"], cs: ["napsat esej"] }
            ]
          }
        ]
      },
      {
        name: "Graduation",
        words: [
          {
            name: "Graduation",
            words: [
              {
                en: ["BA", "Bachlor of Arts"],
                cs: ["bakalář (humanitní obory)"]
              },
              {
                en: ["BSc", "Bachelor of Science"],
                cs: ["bakalář (přírodní vědy)"]
              },
              { en: ["graduate"], cs: ["absolvent"] },
              {
                en: ["MA", "Master of Arts"],
                cs: ["magistr (humanitní obory)"]
              },
              {
                en: ["MSc", "Master of Science"],
                cs: ["magistr (přírodní vědy)"]
              },
              { en: ["PhD", "Doctor of Philosophy"], cs: ["doktor"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["get into university"], cs: ["dostat se na univerzitu"] },
              {
                en: ["graduate from university"],
                cs: ["vystudovat univezitu"]
              },
              {
                en: [
                  "receive a certificate",
                  "obtain a certificate",
                  "get a certificate"
                ],
                cs: ["získat certifikát"]
              },
              {
                en: ["receive a degree", "obtain a degree", "get a degree"],
                cs: ["získat akademickou hodnost", "získat titul"]
              },
              {
                en: ["receive a diploma", "obtain a diploma", "get a diploma"],
                cs: ["získat diplom"]
              }
            ]
          }
        ]
      },
      {
        name: "Adjectives describing teachers and students",
        words: [
          { en: ["active"], cs: ["aktivní"] },
          { en: ["cooperative"], cs: ["ochotný spolupracovat"] },
          { en: ["uncooperative"], cs: ["nespolupracující"] },
          { en: ["demanding"], cs: ["náročný"] },
          { en: ["fair"], cs: ["čestný", "spravedlivý"] },
          { en: ["unfair"], cs: ["nespravedlivý"] },
          { en: ["gifted"], cs: ["nadaný"] },
          { en: ["imaginative"], cs: ["nápaditý"] },
          { en: ["motivated"], cs: ["motivovaný"] },
          { en: ["motivating"], cs: ["motivující"] },
          { en: ["passive"], cs: ["pasivní"] },
          { en: ["professional"], cs: ["profesionální"] },
          { en: ["punctual"], cs: ["přesný"] },
          { en: ["strict"], cs: ["přísný"] },
          { en: ["systematic"], cs: ["systematický"] },
          { en: ["talented"], cs: ["talentovaný"] }
        ]
      }
    ]
  },
  {
    name: "Chapter 4",
    words: [
      {
        name: "Jobs",
        words: [
          { en: ["accountant"], cs: ["účetní"] },
          { en: ["au pair"], cs: ["au pair"] },
          { en: ["babysitter"], cs: ["někdo na hlídání dětí", "chůva"] },
          { en: ["beautician"], cs: ["kosmetička"] },
          { en: ["bus driver"], cs: ["řidič autobusu"] },
          { en: ["car mechanic"], cs: ["automechanik"] },
          { en: ["chef"], cs: ["šéfkuchař"] },
          { en: ["chemist", "pharmacist"], cs: ["farmaceut"] },
          { en: ["cleaner"], cs: ["uklízečka"] },
          { en: ["computer programmer"], cs: ["programátor"] },
          { en: ["cook"], cs: ["kuchař"] },
          { en: ["dentist"], cs: ["zubař"] },
          { en: ["doctor"], cs: ["lékař"] },
          { en: ["dressmaker"], cs: ["švadlena", "dámský krejčí"] },
          { en: ["driving instructor"], cs: ["instruktor autoškoly"] },
          { en: ["economist"], cs: ["ekonom"] },
          { en: ["electrician"], cs: ["elektrikář"] },
          { en: ["engineer"], cs: ["inženýr", "technik"] },
          { en: ["executive"], cs: ["vedoucí úředník", "manažer"] },
          { en: ["farmer"], cs: ["rolník", "farmář"] },
          { en: ["fashion designer"], cs: ["módní návrhář"] },
          { en: ["film director"], cs: ["režisér"] },
          { en: ["firefighter"], cs: ["hasič"] },
          { en: ["flight attendant"], cs: ["letuška", "stevard"] },
          { en: ["fruit picker"], cs: ["česač ovoce"] },
          { en: ["hairdresser"], cs: ["kadeřník"] },
          { en: ["housewife"], cs: ["hospodyně", "žena v domácnosti"] },
          { en: ["instructor"], cs: ["instruktor"] },
          { en: ["IT specialist"], cs: ["informatik"] },
          { en: ["journalist"], cs: ["novinář"] },
          { en: ["lawyer"], cs: ["právník"] },
          { en: ["lecturer"], cs: ["lektor"] },
          { en: ["librarian"], cs: ["knihovník"] },
          {
            en: ["lollipop lady"],
            cs: [
              "žena",
              " která dohlíží na bezpečnost školáků na přechodu při cestě do školy"
            ]
          },
          {
            en: ["lollipop man"],
            cs: [
              "muž",
              " který dohlíží na bezpečnost školáků na přechodu při cestě do školy"
            ]
          },
          { en: ["manager"], cs: ["vedoucí", "manažer"] },
          { en: ["miner"], cs: ["horník"] },
          { en: ["musician"], cs: ["hudebník"] },
          { en: ["nurse"], cs: ["zdravotní sestra", "ošetřovatel"] },
          { en: ["painter"], cs: ["malíř"] },
          { en: ["photographer"], cs: ["fotograf"] },
          { en: ["pilot"], cs: ["pilot"] },
          { en: ["plumber"], cs: ["instalatér"] },
          { en: ["police officer"], cs: ["policista"] },
          { en: ["politician"], cs: ["politik"] },
          { en: ["postman"], cs: ["listonoš"] },
          { en: ["postwoman"], cs: ["listonoška"] },
          { en: ["psychologist"], cs: ["psycholog"] },
          { en: ["receptionist"], cs: ["recepční"] },
          {
            en: ["sales representative", "sales rep"],
            cs: ["obchodní zástupce"]
          },
          { en: ["scientist"], cs: ["vědec"] },
          { en: ["secretary"], cs: ["sekretář", "tajemník"] },
          { en: ["security guard"], cs: ["pracovník ochrany"] },
          { en: ["shop assistant"], cs: ["prodavač"] },
          { en: ["shopkeeper"], cs: ["majitel obchodu"] },
          { en: ["stockbroker"], cs: ["burzovní makléř"] },
          { en: ["surgeon"], cs: ["chirurg"] },
          { en: ["tailor"], cs: ["krejčí"] },
          { en: ["taxi driver"], cs: ["taxikář"] },
          { en: ["teacher"], cs: ["učitel"] },
          { en: ["ticket inspector"], cs: ["revizor", "průvodčí"] },
          { en: ["tour guide"], cs: ["průvodce"] },
          { en: ["translator"], cs: ["překladatel"] },
          { en: ["travel agent"], cs: ["pracovník cestovní kanceláře"] },
          { en: ["TV presenter"], cs: ["televizní moderátor"] },
          { en: ["vet"], cs: ["veterinář"] },
          { en: ["waiter"], cs: ["číšník"] },
          { en: ["waitress"], cs: ["servírka"] }
        ]
      },
      {
        name: "Adjectives to describe jobs",
        words: [
          { en: ["badly paid"], cs: ["špatně placený"] },
          { en: ["full-time"], cs: ["plný úvazek"] },
          { en: ["manual"], cs: ["manuální"] },
          { en: ["part-time"], cs: ["částečný úvazek"] },
          { en: ["permanent"], cs: ["stálý", "trvalý"] },
          { en: ["temporary"], cs: ["dočasný"] },
          { en: ["well-paid"], cs: ["dobře placený"] }
        ]
      },
      {
        name: "Looking for a job",
        words: [
          {
            name: "Looking for a job",
            words: [
              { en: ["applicant"], cs: ["uchazeč o práci"] },
              { en: ["candidate"], cs: ["kandidát"] },
              { en: ["suitable candidate"], cs: ["vhodný kandidát"] },
              { en: ["curriculum viae", "CV"], cs: ["životopis"] },
              { en: ["employment contract"], cs: ["pracovní smlouva"] },
              { en: ["experience"], cs: ["zkušenost"] },
              { en: ["five years' experience"], cs: ["pětiletá zkušenost"] },
              { en: ["form"], cs: ["formulář"] },
              { en: ["application form"], cs: ["formulář žádosti o práci"] },
              { en: ["job"], cs: ["práce"] },
              { en: ["job advertisement"], cs: ["pracovní inzerát"] },
              { en: ["job application"], cs: ["žádost o práci"] },
              { en: ["job centre"], cs: ["pracovní úřad"] },
              { en: ["job interview"], cs: ["pracovní pohovor"] },
              { en: ["opportunity"], cs: ["příležitost"] },
              { en: ["previous experience"], cs: ["předchozí zkušenost"] },
              { en: ["qualifications"], cs: ["kvalifikace"] },
              { en: ["recruitment"], cs: ["nábor"] },
              { en: ["references"], cs: ["doporučení", "reference"] },
              { en: ["skills"], cs: ["dovednosti", "znalosti"] },
              { en: ["computer skills"], cs: ["znalost práce s počítačem"] },
              { en: ["training"], cs: ["školení"] },
              { en: ["training session"], cs: ["pracovní školení", "trénink"] },
              { en: ["vacancy"], cs: ["volné místo"] }
            ]
          },
          {
            name: "Verbs",
            words: [{ en: ["recruit"], cs: ["nabírat"] }]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["apply for a job"], cs: ["žádat o práci"] },
              { en: ["apply for a position"], cs: ["ucházet o pozici"] },
              { en: ["enclose a CV"], cs: ["přiložit životopis"] },
              { en: ["fill in a form"], cs: ["vyplnit formulář"] },
              { en: ["find work"], cs: ["najít práci"] },
              {
                en: ["interview applicants"],
                cs: ["vést pracovní pohovor s uchazeči"]
              },
              { en: ["look for a job"], cs: ["hledat práci"] },
              {
                en: ["the job involves dealing with people"],
                cs: ["součástí práce je jednání s lidmi"]
              }
            ]
          }
        ]
      },
      {
        name: "Work and money",
        words: [
          {
            name: "Work and money",
            words: [
              { en: ["bonus"], cs: ["prémie", "bonus"] },
              { en: ["earnings"], cs: ["výdělky"] },
              { en: ["fee"], cs: ["poplatky"] },
              {
                en: ["fringe benefits", "perks"],
                cs: ["vedlejší výhody", "benefity (mimo plat)"]
              },
              { en: ["income"], cs: ["příjem"] },
              { en: ["minimum wage"], cs: ["minimální mzda"] },
              { en: ["pay", "salary"], cs: ["plat"] },
              { en: ["decent pay"], cs: ["slušný plat"] },
              { en: ["pay rise"], cs: ["zvýšení platu"] },
              { en: ["reasonable pay"], cs: ["přiměřený plat"] },
              { en: ["sick pay"], cs: ["nemocenská"] },
              { en: ["pension"], cs: ["penze", "důchod"] },
              { en: ["profit"], cs: ["zisk"] },
              { en: ["starting salary"], cs: ["nástupní plat"] },
              {
                en: ["wages"],
                cs: [
                  "mzda (týdenní",
                  " denní",
                  " hodinová",
                  " většinou za nekvalifikovanou práci)"
                ]
              }
            ]
          },
          {
            name: "Verbs",
            words: [
              { en: ["earn"], cs: ["vydělávat"] },
              { en: ["pay"], cs: ["platit"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["get a pay rise"], cs: ["dostat přidáno"] },
              { en: ["get paid overtime"], cs: ["dostat zaplacené presčasy"] }
            ]
          }
        ]
      },
      {
        name: "At work",
        words: [
          {
            name: "At work",
            words: [
              { en: ["at work"], cs: ["v práci"] },
              { en: ["career prospects"], cs: ["kariérní vyhlídky"] },
              { en: ["deadline"], cs: ["termín dokončení práce"] },
              { en: ["hard work"], cs: ["težká práce"] },
              { en: ["management"], cs: ["vedení"] },
              { en: ["office"], cs: ["kancelář"] },
              { en: ["overwork"], cs: ["přepracování"] },
              {
                en: ["responsible for somebody", "responsible for something"],
                cs: ["zodpovídat za něco", "zodpovídat za někoho"]
              },
              { en: ["teamwork"], cs: ["týmová práce"] },
              { en: ["working conditions"], cs: ["pracovní podmínky"] },
              { en: ["workplace"], cs: ["pracoviště"] }
            ]
          },
          {
            name: "Verbs",
            words: [
              {
                en: ["assist somebody"],
                cs: ["pomáhat někomu", "asistovat někomu"]
              },
              { en: ["manage"], cs: ["řídit", "zvládat"] },
              { en: ["work"], cs: ["pracovat"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              {
                en: ["be in charge of something"],
                cs: ["mít na starost", "zodpovídat za něco"]
              },
              { en: ["be part of a team"], cs: ["být součástí týmu"] },
              { en: ["be self-employed"], cs: ["samostatně podnikat"] },
              { en: ["be promoted", "get promoted"], cs: ["povýšit"] },
              {
                en: ["clock in", "clock on"],
                cs: ["píchnout příchod do práce"]
              },
              { en: ["concentrate on something"], cs: ["soustředit se na"] },
              { en: ["deal with people"], cs: ["jednat s lidmi"] },
              { en: ["do a hard day's work"], cs: ["pracovat těžce celý den"] },
              { en: ["do a training course"], cs: ["účastnit se školení"] },
              { en: ["do one's job well"], cs: ["dělat svou práci dobře"] },
              { en: ["do physical work"], cs: ["pracovat manuálně"] },
              {
                en: ["do something for a living", "earn a living"],
                cs: ["vydělávat si na živobytí"]
              },
              {
                en: ["do overtime", "work overtime"],
                cs: ["pracovat přesčas"]
              },
              { en: ["get a job"], cs: ["dostat práci"] },
              { en: ["give somebody a hand"], cs: ["pomáhat někomu"] },
              { en: ["go on strike"], cs: ["stávkovat"] },
              { en: ["go to work"], cs: ["jít do práce"] },
              { en: ["pay per hour"], cs: ["platit hodinově"] },
              { en: ["pay per month"], cs: ["platit měsíčně"] },
              { en: ["pay per week"], cs: ["platit týdně"] },
              { en: ["run a business"], cs: ["provozovat podnik"] },
              {
                en: ["take over duties from somebody"],
                cs: ["převzít od někoho povinnosti"]
              },
              { en: ["work as an engineer"], cs: ["pracovat jako inženýr"] },
              { en: ["work for a company"], cs: ["pracovat pro podnik"] },
              { en: ["work from home"], cs: ["pracovat doma"] },
              { en: ["work long hours"], cs: ["pracovat dlouho"] },
              { en: ["work on something"], cs: ["pracovat na něčem"] },
              { en: ["work shifts"], cs: ["pracovat na směny"] }
            ]
          }
        ]
      },
      {
        name: "Holidays and days off",
        words: [
          {
            name: "Holidays and days off",
            words: [
              { en: ["holiday"], cs: ["dovolená", "svátek"] },
              { en: ["leave"], cs: ["dovolená"] },
              { en: ["maternity leave"], cs: ["mateřská dovolená"] },
              { en: ["paid leave"], cs: ["placená dovolená"] },
              { en: ["sick leave"], cs: ["pracovní neschopnost"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              { en: ["be off sick"], cs: ["být na neschopence"] },
              {
                en: ["take a week's leave"],
                cs: ["vzít si týdenní dovolenou"]
              },
              { en: ["take a day off work"], cs: ["vzít si den volna"] }
            ]
          }
        ]
      },
      {
        name: "People at work",
        words: [
          { en: ["boss"], cs: ["šéf"] },
          { en: ["colleague", "workmate"], cs: ["kolega", "spolupracovník"] },
          { en: ["employee"], cs: ["zaměstnanec"] },
          { en: ["employer"], cs: ["zaměstnavatel"] },
          { en: ["staff"], cs: ["zaměstnanci"] },
          { en: ["team"], cs: ["skupina", "tým"] },
          { en: ["worker"], cs: ["dělník"] }
        ]
      },
      {
        name: "Employment",
        words: [
          { en: ["career"], cs: ["profesní kariéra"] },
          { en: ["employ"], cs: ["zaměstnat"] },
          { en: ["employment"], cs: ["zaměstnání"] },
          { en: ["job"], cs: ["práce"] },
          { en: ["current job"], cs: ["běžná práce"] },
          { en: ["holiday job"], cs: ["prázdninová brigáda"] },
          { en: ["summer job"], cs: ["letní brigáda"] },
          { en: ["odd jobs"], cs: ["příležitostné práce"] },
          { en: ["occupation"], cs: ["zaměstnání", "povolání"] },
          { en: ["position", "post"], cs: ["pracovní pozice", "postavení"] },
          {
            en: ["profession"],
            cs: ["profese (zaměstnání s odbornou kvalifikací)"]
          },
          { en: ["by profession"], cs: ["zaměstnáním"] },
          { en: ["self-employed"], cs: ["samostatně podnikající"] },
          { en: ["work experience"], cs: ["pracovní zkušenosti"] }
        ]
      },
      {
        name: "Lack of employment",
        words: [
          {
            name: "Lack of employment",
            words: [
              { en: ["economic crisis"], cs: ["hospodářská krize"] },
              { en: ["pensioner"], cs: ["důchodce"] },
              { en: ["retirement"], cs: ["důchod", "penze"] },
              { en: ["unemployed", "out of work"], cs: ["nezaměstnaný"] },
              { en: ["unemployment"], cs: ["nezaměstnanost"] },
              { en: ["high unemployment"], cs: ["vysoká nezaměstnanost"] },
              { en: ["low unemployment"], cs: ["nízká nezaměstnanost"] },
              { en: ["unemployment benefit"], cs: ["dávka v nezaměsatnanosti"] }
            ]
          },
          {
            name: "Verbs",
            words: [
              { en: ["resign"], cs: ["vzdát se funkce", "odstoupit"] },
              { en: ["retire"], cs: ["jít do důchodu"] }
            ]
          },
          {
            name: "Useful expressions",
            words: [
              {
                en: [
                  "fire somebody",
                  "sack somebody",
                  "give somebody the sack"
                ],
                cs: ["propustit", "vyhodit někoho z práce"]
              },
              {
                en: ["give up", "quit one's job"],
                cs: ["odejít", "skončit s prací"]
              },
              { en: ["go bankrupt"], cs: ["zbankrotovat"] },
              {
                en: ["hand in one's resignation"],
                cs: ["podat rezignaci", "dát výpověď"]
              },
              { en: ["lose one's job"], cs: ["přijít o práci"] },
              {
                en: ["make somebody redundant"],
                cs: ["propustit někoho pro nadbytečnost"]
              },
              { en: ["one the dole"], cs: ["být na podpoře"] }
            ]
          }
        ]
      }
    ]
  }
];

interface IWord {
  name?: string;
  en?: string[];
  cs?: string[];
  audio?: number[];
  words?: IWord[];
  uuid?: string;
  parent?: IWord;
}

function tree(array: IWord[], parent?: IWord) {
  let rows: any[] = [];

  array.forEach((node, index) => {
    if (typeof node.name !== "undefined") {
      node.uuid = v1();
      node.parent = parent;
    }

    if (typeof node.words !== "undefined") {
      rows.push(...tree(node.words, node));
    }
  });

  return rows;
}

tree(words);
