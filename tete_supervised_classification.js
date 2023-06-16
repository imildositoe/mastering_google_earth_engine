var roi = ee.FeatureCollection("users/sitoeimildo/Caia_Maringue_Chemba"),
    L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2"),
    geometry = /* color: #d63000 */ee.Geometry.MultiPoint(),
    forest = /* color: #0aff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([34.91422324873517, -17.71571280327478]),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92177634932111, -17.71767504289311]),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92726951338361, -17.72748591890144]),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93962913252423, -17.752337734181236]),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([34.91628318525861, -17.73795026141624]),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([34.893623883500794, -17.735988243748707]),
            {
              "class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92246299482892, -17.76214671165201]),
            {
              "class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([34.948555524125794, -17.784378402064995]),
            {
              "class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([34.926582867875794, -17.77195515121587]),
            {
              "class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([34.921089703813294, -17.79549320996563]),
            {
              "class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93894248701642, -17.793531823553064]),
            {
              "class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([34.929329449907044, -17.77522451149105]),
            {
              "class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([34.956795270219544, -17.788301354439767]),
            {
              "class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94649558760236, -17.75953103691117]),
            {
              "class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([34.91490989424298, -17.800723468364776]),
            {
              "class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92520957686017, -17.798762139427033]),
            {
              "class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94924216963361, -17.801377239887053]),
            {
              "class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96294154218672, -17.79376040085918]),
            {
              "class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93341578535078, -17.800298263381002]),
            {
              "class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([34.912129774608594, -17.807489635511676]),
            {
              "class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([34.917622938671094, -17.806182134867075]),
            {
              "class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([34.925862684764844, -17.80422086593154]),
            {
              "class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96362818769453, -17.79637557460488]),
            {
              "class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94646204999922, -17.815334438094368]),
            {
              "class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([34.931355848827344, -17.827754669574464]),
            {
              "class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97392787031172, -17.815334438094368]),
            {
              "class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([34.445210829296094, -17.810104608048334]),
            {
              "class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([34.43628443769453, -17.821871509925423]),
            {
              "class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([34.43903101972578, -17.83559858023687]),
            {
              "class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([34.404012098827344, -17.74798866318873]),
            {
              "class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([35.096150770702344, -17.831676668084388]),
            {
              "class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([35.11675013593672, -17.830369344842207]),
            {
              "class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([35.109883680858594, -17.774145376964498]),
            {
              "class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([35.12498988203047, -17.726406496507657]),
            {
              "class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([35.098897352733594, -17.725098402849984]),
            {
              "class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([35.145589247264844, -17.752566364172196]),
            {
              "class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([35.11331690839766, -17.73817890978011]),
            {
              "class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([35.14764918378828, -17.798990710035426]),
            {
              "class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([35.12292994550703, -17.84867099684107]),
            {
              "class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([35.05563868574141, -17.849978185693935]),
            {
              "class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([35.19159449628828, -17.70612997245222]),
            {
              "class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([35.22112025312422, -17.73229279982576]),
            {
              "class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([35.23416651777266, -17.77218375613205]),
            {
              "class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([35.236226454296094, -17.798990710035426]),
            {
              "class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([35.23279322675703, -17.829062012005362]),
            {
              "class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([35.20532740644453, -17.84736379838499]),
            {
              "class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([35.30420435956953, -17.7630292409814]),
            {
              "class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([35.332356825389844, -17.778068554040622]),
            {
              "class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([35.35570277265547, -17.79768314710985]),
            {
              "class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([35.370808973827344, -17.814680717727004]),
            {
              "class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([35.368062391796094, -17.840174035246587]),
            {
              "class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([35.38660182050703, -17.841481286509367]),
            {
              "class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([35.28635157636641, -17.72051999988163]),
            {
              "class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([35.065938368358594, -17.571331109472933]),
            {
              "class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([35.07074488691328, -17.590968280216547]),
            {
              "class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([35.09546412519453, -17.60602199965395]),
            {
              "class": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([35.08447779706953, -17.645941001027335]),
            {
              "class": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([35.07829798749922, -17.662298693105026]),
            {
              "class": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96362818769453, -17.54841838309755]),
            {
              "class": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([34.4904871889462, -17.996405772677374]),
            {
              "class": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([34.7431727358212, -18.32002058892373]),
            {
              "class": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([34.6772547670712, -18.330449768380177]),
            {
              "class": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([34.8640223451962, -17.058793521133026]),
            {
              "class": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96550820966276, -17.304167849951046]),
            {
              "class": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([34.95589517255338, -17.276631960724014]),
            {
              "class": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93804238935026, -17.24384577339959]),
            {
              "class": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([34.923622833686196, -17.338909635926694]),
            {
              "class": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89684365888151, -17.31793424908967]),
            {
              "class": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([35.02112649579557, -17.397234817717393]),
            {
              "class": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96138833661588, -17.329077721665406]),
            {
              "class": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([34.942848907904946, -17.258272413951538]),
            {
              "class": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([34.87825856885744, -17.125803214273052]),
            {
              "class": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([34.90091787061525, -17.155985962363463]),
            {
              "class": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([34.9146507807715, -17.175667719747583]),
            {
              "class": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([34.86109243116213, -17.10020965443914]),
            {
              "class": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([34.86109243116213, -17.106772441203674]),
            {
              "class": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([34.871392113779315, -17.102834796901643]),
            {
              "class": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([34.86109243116213, -17.115959953993183]),
            {
              "class": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([34.88924489698244, -17.13892675076122]),
            {
              "class": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([34.87482534131838, -17.198627129006926]),
            {
              "class": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([34.90778432569338, -17.179603820553613]),
            {
              "class": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([34.54935537061525, -16.816477517912325]),
            {
              "class": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([34.568581444834, -16.840138193674644]),
            {
              "class": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([34.7938011713965, -16.961024276392102]),
            {
              "class": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([34.29117665967775, -17.1185848743324]),
            {
              "class": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00528798780275, -18.06111095995169]),
            {
              "class": 0,
              "system:index": "85"
            })]),
    crops = /* color: #ffdf23 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([34.548492439665, -17.57692459593895]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([34.32670594064156, -17.53044290598708]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([34.32567597237984, -17.534044026364448]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([34.325332649625935, -17.53666297808804]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([34.3672180256025, -17.485586602276456]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([34.3400955280439, -17.677048733327098]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([34.3122863849775, -17.65218649175921]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([34.53372956124703, -17.73330321097333]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([34.502830513395466, -17.66265522273873]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([34.50420380441109, -17.475107622373127]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([34.49665070382515, -17.473142746456478]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([34.49768067208687, -17.475762576298052]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([34.325332649625935, -17.538299803705936]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([34.31949616280953, -17.532079787749915]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([34.287574579717564, -17.52847862837261]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([34.35967235803788, -17.497047295269574]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([34.18972759485428, -17.524877397505332]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([34.18801098108475, -17.50621532939028]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([34.195907404424595, -17.513418460186983]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([34.17908458948319, -17.52847862837261]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([34.18904094934647, -17.533061909716494]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([34.18251781702225, -17.512108821292937]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([34.199683954717564, -17.47347022724898]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([34.375465204717564, -17.460370536069487]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([34.363448908330845, -17.500649078127402]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([34.28250682021816, -17.345580646129907]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27701365615566, -17.353117816270096]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27804362441738, -17.356067059387545]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27529704238613, -17.36163772248671]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([34.286626693265035, -17.353117816270096]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([34.28216349746425, -17.358688568994634]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([34.31924235488613, -17.23740459861311]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([34.28422343398769, -17.212482331585807]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([34.29246318008144, -17.20625123985612]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27770030166347, -17.214122057679855]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27701365615566, -17.218713213392952]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27873026992519, -17.241339386093106]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([34.297613021390035, -17.23707669587165]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([34.2735804286166, -17.244618311601194]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27667033340175, -17.221008748497148]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([34.34636485244472, -17.200675874633657]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([34.5097864833041, -17.223960108887113]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([34.32164561416347, -17.240683594002885]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([34.483350631253316, -17.107837808457244]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([34.47373759414394, -17.117353383842907]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([34.4713343348666, -17.13014942474451]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([34.46652781631191, -17.137695395006148]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([34.29726969863613, -17.076662690475406]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([34.30791270400722, -17.08552351764983]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([34.29864298965175, -17.085195346375002]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27598368789394, -17.06911424638303]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([34.28525340224941, -17.081257246016975]),
            {
              "class": 1,
              "system:index": "51"
            })]),
    grassland = /* color: #40ffe9 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([34.544805404202535, -17.138843667967127]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([34.552015182034566, -17.123423410448854]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([34.53896891738613, -17.104720531423784]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([34.5866907801791, -17.098485820788564]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([34.55716502334316, -17.098813968657257]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([34.55064189101894, -17.077154969697716]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([34.50394999648769, -17.044661755498595]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([34.46927439834316, -17.053195874410175]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([34.49845683242519, -17.061401390286196]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([34.40884959365566, -17.04367702438836]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([34.62102305556972, -17.06271423936314]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([34.62102305556972, -17.07288850660725]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([34.60935008193691, -17.06271423936314]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([34.47373759414394, -17.160167447087087]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([34.47373759414394, -17.163775844283524]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([34.46755778457363, -17.17164846725126]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([34.525579329983785, -17.14835765660024]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([34.48850047256191, -17.129329192125905]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([34.56712138320644, -17.16705614446529]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([34.55544840957363, -17.169680342839886]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([34.7075403895541, -17.150326007191165]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([34.69174754287441, -17.124407720420965]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([34.52351939346035, -17.236256936470742]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([34.530042525784566, -17.242487016645747]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([34.56780802871425, -17.294942503327466]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([34.563001510159566, -17.296909293522358]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([34.56231486465175, -17.306415149712898]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([34.586004134671285, -17.28716873936668]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([34.58394419814785, -17.290119041390852]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([34.56780802871425, -17.31273645204857]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([34.541028853909566, -17.300936410852277]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([34.54068553115566, -17.285201845083048]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([34.517339583890035, -17.237006376769198]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([34.50326335097988, -17.231759851731468]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([34.32645213271816, -17.272088679664225]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([34.26122080947597, -17.275694893211778]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([34.25984751846035, -17.289791232389906]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([34.24577128555019, -17.29995303990867]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([34.22654521133144, -17.310769831105826]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([34.24886119033535, -17.311753144207177]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([34.27083384658535, -17.314375286761408]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([34.2409647669955, -17.325191229317277]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([34.524549361722066, -17.286840925111967]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([34.560254928128316, -17.310769831105826]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([34.52866923476894, -17.296347301475784]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([34.6251429286166, -17.3189639462127]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([34.61861979629238, -17.308147637122193]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([34.62479960586269, -17.325518975211832]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([34.57536112930019, -17.316341869127623]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([34.56059825088222, -17.317325152419112]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([34.54068553115566, -17.311753144207177]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([34.62376963760097, -17.338300608824092]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([34.598020431058, -17.353047541498253]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([34.61484324599941, -17.359929037604793]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([34.6035135951205, -17.361239769477603]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([34.60385691787441, -17.36975929812174]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([34.6141566004916, -17.36910396382999]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([34.63853251601894, -17.369431631268938]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([34.65604197646816, -17.35042595123064]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([34.68144786025722, -17.299625248425937]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([34.91902720596035, -17.291758077638395]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([34.47579753066738, -17.400795341936472]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([34.48197734023769, -17.433225951686005]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([34.45931803847988, -17.383103492662315]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([34.49056040908535, -17.410623407481033]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([34.49502360488613, -17.383103492662315]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([34.418462630765035, -17.405054235225375]),
            {
              "class": 2,
              "system:index": "66"
            })]),
    water = /* color: #006cff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([34.981167094303665, -17.322236385683173]),
            {
              "class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98211123187691, -17.327316463052135]),
            {
              "class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98399950702339, -17.332232533162273]),
            {
              "class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98502947528511, -17.328791297904917]),
            {
              "class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98219706256538, -17.328217752425186]),
            {
              "class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98219706256538, -17.331740932074286]),
            {
              "class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98554445941597, -17.336493020780782]),
            {
              "class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98623110492378, -17.33239639989908]),
            {
              "class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([34.980394618107375, -17.329119037374742]),
            {
              "class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97636057574898, -17.316992287494298]),
            {
              "class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97910715778023, -17.318549144765534]),
            {
              "class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([34.976446406437454, -17.319040781163363]),
            {
              "class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97550226886421, -17.312403578812866]),
            {
              "class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([34.974643961979446, -17.31543541703314]),
            {
              "class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98219706256538, -17.31797556730549]),
            {
              "class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98005129535347, -17.319204659670323]),
            {
              "class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([34.981939570499954, -17.318794963128884]),
            {
              "class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98073794086128, -17.323301574837387]),
            {
              "class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([34.981424586369094, -17.32395707278529]),
            {
              "class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([34.988376872135696, -17.33960639150161]),
            {
              "class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([34.990865962101516, -17.34378477971492]),
            {
              "class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([34.993355052067336, -17.346242610683092]),
            {
              "class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([34.988119380070266, -17.34124498645524]),
            {
              "class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98554445941597, -17.338295505003934]),
            {
              "class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([34.99498583514839, -17.348290778000337]),
            {
              "class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([34.99618746478706, -17.350912398791515]),
            {
              "class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([34.99670244891792, -17.354271295658023]),
            {
              "class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([34.996874110294875, -17.35738436463777]),
            {
              "class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([34.99627329547554, -17.36254538883065]),
            {
              "class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00279642779976, -17.367870102716754]),
            {
              "class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00382639606148, -17.3696722785167]),
            {
              "class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00030733783394, -17.369999944939014]),
            {
              "class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([35.004856364323196, -17.370737192246086]),
            {
              "class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00700213153511, -17.37368615179782]),
            {
              "class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([35.008375422550735, -17.376962717826203]),
            {
              "class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([35.00820376117378, -17.380730696268913]),
            {
              "class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([35.015327708317336, -17.381549811754518]),
            {
              "class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([35.01404024799019, -17.381385988950647]),
            {
              "class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([34.98048044879585, -17.30781475557753]),
            {
              "class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97696139056831, -17.30486473730428]),
            {
              "class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([34.974643961979446, -17.302570245929726]),
            {
              "class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97799135883003, -17.298964558795486]),
            {
              "class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97807718951851, -17.308716140609782]),
            {
              "class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([34.968635813786086, -17.289622222498576]),
            {
              "class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96657587726265, -17.282902003171056]),
            {
              "class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([34.970438258244094, -17.27880418808907]),
            {
              "class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96880747516304, -17.274870199840677]),
            {
              "class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([34.972412364079055, -17.275198035403353]),
            {
              "class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([34.975416438175735, -17.286180189584066]),
            {
              "class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97395731647163, -17.284623058315095]),
            {
              "class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([34.97558809955269, -17.291671021057546]),
            {
              "class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([34.96597506244331, -17.286016281649584]),
            {
              "class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([34.968893305851516, -17.29224468056725]),
            {
              "class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([34.95249964435249, -17.240034349520432]),
            {
              "class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([34.9447748823896, -17.23191870112492]),
            {
              "class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94305826862007, -17.231836723059253]),
            {
              "class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([34.931471125675735, -17.21453853777264]),
            {
              "class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92717959125191, -17.207815583544164]),
            {
              "class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([34.930183665348586, -17.21757198588559]),
            {
              "class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([34.927437083317336, -17.211259078431997]),
            {
              "class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93009783466011, -17.224048640951384]),
            {
              "class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([34.941169993473586, -17.228311631822567]),
            {
              "class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([34.948980586124954, -17.233640232099834]),
            {
              "class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94451739032417, -17.23437802617745]),
            {
              "class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([34.94958140094429, -17.236673366682382]),
            {
              "class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([34.955675379826125, -17.243067379076226]),
            {
              "class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([34.924720149856284, -17.20370214728063]),
            {
              "class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92326102815218, -17.197962719131077]),
            {
              "class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92506347261019, -17.191731138511997]),
            {
              "class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92729507051058, -17.193945013540944]),
            {
              "class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92549262605257, -17.194190998021398]),
            {
              "class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([34.924462657790855, -17.19435498749348]),
            {
              "class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92961249909945, -17.185089354636805]),
            {
              "class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([34.929955821853355, -17.17918534684223]),
            {
              "class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([34.932187419753745, -17.178775339315965]),
            {
              "class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([34.93227325044222, -17.184105366401717]),
            {
              "class": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([34.930213313918784, -17.189353243260168]),
            {
              "class": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92935500703402, -17.194518976820326]),
            {
              "class": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([34.9308999594266, -17.195010943929393]),
            {
              "class": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([34.92635093293734, -17.19632284982931]),
            {
              "class": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([34.898970943313316, -17.171660283368794]),
            {
              "class": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89905677400179, -17.172808346221707]),
            {
              "class": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([34.9008592184598, -17.176908512660695]),
            {
              "class": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([34.913991313796714, -17.144268677050167]),
            {
              "class": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([34.90738235078402, -17.14336648952532]),
            {
              "class": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([34.91381965241976, -17.132539897479496]),
            {
              "class": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([34.90309081636019, -17.13647691303075]),
            {
              "class": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89931426606722, -17.134590436819792]),
            {
              "class": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([34.897064801447044, -17.123966724336725]),
            {
              "class": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89912473797048, -17.111252289510976]),
            {
              "class": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([34.900755521051536, -17.112482756660853]),
            {
              "class": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89938223003591, -17.11650222598438]),
            {
              "class": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([34.91011106609548, -17.128149993512118]),
            {
              "class": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89715063213552, -17.12527913264072]),
            {
              "class": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89767225922045, -17.0798765615832]),
            {
              "class": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([34.894067370304434, -17.057476868743553]),
            {
              "class": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([34.890805804142325, -17.056820426945553]),
            {
              "class": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([34.87089308441576, -17.03884943678495]),
            {
              "class": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([34.88814505279955, -17.05641014965002]),
            {
              "class": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([34.89612730682787, -17.05993850493316]),
            {
              "class": 3,
              "system:index": "99"
            })]);

//// CLASSIFICATION ////


// Load feature collection of Caia Maringue Chemba districts.
// Display it on the map.
// This is going to be our ROI.
Map.centerObject(roi, 8);
Map.addLayer(roi);


// Load USGS Landsat 9 Level 2, Collection 2, Tier 1
// Rename it to L9
print(L9.size());


// Filter collection to keep images from 2022 (dry season) in the polygon
var filtered = L9.filterDate('2022-04-01', '2022-09-30')
  .filterBounds(roi);
  
print(filtered.size());


// Define a function that scales and masks Landsat surface reflectance images
function prepLANDSR(image) {
  // Mask for unwanted pixels
  var qaMask = image.select('QA_PIXEL').bitwiseAnd(parseInt('11111', 2)).eq(0);
  var saturationMask = image.select('QA_RADSAT').eq(0);
  // Apply the scaling factors to the appropriate bands
  var getFactorImg = function(factorNames) {
    var factorList = image.toDictionary().select(factorNames).values();
    return ee.Image.constant(factorList);
  };
  var scaleImg = getFactorImg([
    'REFLECTANCE_MULT_BAND_.|TEMPERATURE_MULT_BAND_ST_B10']);
  var offsetImg = getFactorImg([
    'REFLECTANCE_ADD_BAND_.|TEMPERATURE_ADD_BAND_ST_B10']);
  var scaled = image.select('SR_B.|ST_B10').multiply(scaleImg).add(offsetImg);
  // Replace original bands with scaled bands and apply masks.
  return image.addBands(scaled, null, true)
    .updateMask(qaMask).updateMask(saturationMask);
}

// Map (.map) the function to clean the collection and select the
// bands from B2 to B7
filtered = filtered.map(prepLANDSR)
    .select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7']);


// Make median composite 
var composite = filtered.median();


// Clip composite to the ROI's extent.
var clipped = composite.clip(roi);


// Define visualization parameters and visualize
var vp = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0,
  max: 0.2
}
Map.centerObject(roi, 8);
Map.addLayer(clipped, vp, 'real colors');


var vp = {
  bands: ['SR_B5', 'SR_B4', 'SR_B3'],
  min: 0,
  max: 0.2
}
Map.centerObject(roi, 8);
Map.addLayer(clipped, vp, 'false colors (vegetation)');


// Create ground control points usign GUI tool.
// The Google Earth Satellite basemap can be used as a reference to define
// land cover classes.
// Set import as FeatureCollection.
// Add property called 'class' and assign integer value starting from 0.
// Merge GCPs.

// Forest: at least 50 (100) class: 0
// Crops: at least 30 (70): class 1
// Grasslands: at least 50 (100) class: 2
// Water: at least 10 points (30) class: 3
// Bare: at least 20 (50) class: 4
//Settlement: at least 10 (30) class: 5


// Mesclar GCPs.



// To assess classification accuracy we use only 70% of the data to 
// train our classifier. The remaining 30% will be used for validation
// To do so, let's add column of random numbers to the ground control points.



// Check sizes



// Overlay the point on the image to get training data.
// Sobrepõe o ponto na imagem para obter dados de treinamento.


// Get band names from clipped image
// Obtém os nomes das bandas da imagem recortada


// Train a random forest classifier.
// Treina um classificador de floresta aleatório.


// Classify the image.
// Classifica a imagem.


// Print and display.
// Imprimir e exibir.


// Use classification map to assess accuracy using the validation fraction
// of the overall training set created above.
// Use o mapa de classificação para avaliar a precisão usando a fração de validação
// do conjunto geral de treinamento criado acima.


// Try to improve the classification
// Tenta melhorar a classificação

// Define function for calculating image indices
// Define função para calcular índices de imagem
var addI = function(image) {
  var ndvi = image.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
  var ndwi = image.normalizedDifference(['SR_B3', 'SR_B6']).rename('NDWI');
  var ndbi = image.normalizedDifference(['SR_B6', 'SR_B5']).rename('NDBI');
  var bsi = image.expression(
      '(( X + Y ) - (A + B)) /(( X + Y ) + (A + B)) ', {
        'X': image.select('SR_B6'), //swir1
        'Y': image.select('SR_B4'),  //red
        'A': image.select('SR_B5'), // nir
        'B': image.select('SR_B2'), // blue
  }).rename('BSI');
  return image.addBands(ndvi).addBands(ndwi).addBands(ndbi).addBands(bsi);
};

// Calculate indices on clipped image
// Calcula índices na imagem recortada

// Load WorldClim BIO Variables V1 and rename them climate
// Select Mean Annual Temperature and Annual precipitation
// Carregue as Variáveis ​​V1 do WorldClim BIO e renomeie-as como clima
// Selecione Temperatura Anual Média e Precipitação Anual


// Clip the climate variables and add them as new bands to the clipped image
// Recorte as variáveis ​​climáticas e adicione-as como novas bandas à imagem recortada


/// Repeat same processes as above
// Overlay the point on the image to get training data.
// Sobrepõe o ponto na imagem para obter dados de treinamento.


// Get band names from clipped image
// Obtém os nomes das bandas da imagem recortada


// Train a random forest classifier.
// Treina um classificador de floresta aleatório.


// Classify the image.
// Classifica a imagem.


// Print and display.
// Imprimir e exibir.


// Use classification map to assess accuracy using the validation fraction
// of the overall training set created above.
// Use o mapa de classificação para avaliar a precisão usando a fração de validação
// do conjunto geral de treinamento criado acima.
