import { ADD_POST, TOGGLE_LIKE, UPDATE_POST, DELETE_POST } from "./actions";

const initialState = {
    posts: [
        {
            id: 1,
            category: 'Travel',
            title: "Поездка на Балтийскую косу",
            imgPath: ["img/posts-img/post1.jpg"],
            description:
                "Съездили на Балтийскую косу. Это было незабываемое путешествие! Дикая местность с потрясающей природой и морем в шаговой доступности. Дюны потрясающие, но будьте готовы, что песок будет везде: в палатке, в еде, в одежде. Еще советую заранее договориться о транспорте, потому что от кэмпинговой зоны, где мы разбивали лагерь, до парома в Балтийск, пешком часа полтора, с рюкзаками по песку это будет непросто. Нам повезло, что сразу нашелся местный житель, отвезший нас туда и потом приехавший, чтобы доставить нас в обратную сторону. Всё за скромную плату.",
            likes: 35,
            youLiked: false,
            path: "/posts/1",
            commentIDs: [1728166961303, 1728167078109],
        },
        {
            id: 2,
            category: 'Travel',
            title: "На дачу - тоже путешествие",
            imgPath: ["img/posts-img/post2.jpg"],
            description: "Люблю это место. Конечно, добраться из дома до дачи - целое путешествие. На постоянной основе живу в области, можно сказать, в другой деревне. Так что сперва приходится ехать на вокзал в Москву на автобусе и метро (причем с автобусами бывает напряжно), а потом уже оттуда на электричке. В общей сложности дорога занимает часа три с половиной - четыре. В этот год путешествовать туда и обратно довелось много, и проведенным там временем я доволен. Много грибов собрано, много раз озеро переплыто, много чего по участку и ремонту построек сделано, но вот куча веток перед домом так и не сожжена :)",
            likes: 20,
            youLiked: false,
            path: "/posts/2",
            commentIDs: [1728167078110],
        },
        {
            id: 3,
            category: 'Travel',
            title: "Беловежская пуща-огонь!",
            imgPath: ["img/posts-img/post3.jpg"],
            description: "Бывали ли вы когда-нибудь в Беловежской пуще? Про это место мне много раз рассказывал мой дедушка, большой поклонник Беларуси. И вот довелось самому там побывать. Величественные дубы, свежайший воздух, кругом чистенько и аккуратненько. Раньше в этом месте можно было полюбоваться только на зубров, теперь же там целый зоопарк. Видели оленей, кабанов, лошадей, тех же зубров и много кого еще. Пускай с грибочками не повезло - слишком лес сухой - впечатления остались потрясающие. Взял несколько желудей в качестве трофеев. Подумаю, где посадить.",
            likes: 17,
            youLiked: false,
            path: "/posts/3",
            commentIDs: [1728167078121],
        },
        {
            id: 4,
            category: 'Travel',
            title: "А вы видели ивы в Брестской крепости?",
            imgPath: ["img/posts-img/post4.jpg"],
            description: "Ивы я видел довольно часто, и обычно их ветви свисают до земли или даже стелятся по ней. Но ивы в Брестской крепости поразили моё воображение. У них будто собственный барбершоп. Аккуратно и ровно подстриженные ветки превращают их в что-то особенное и очень красивое. Да и само место обязательно советую посетить. Кстати, на фото речка, видите? А через нее - Польша. Но плавать туда нельзя.",
            likes: 15,
            youLiked: false,
            path: "/posts/4",
            commentIDs: [1728167926053],
        },
        {
            id: 5,
            category: 'Travel',
            title: "Кремль Нижнего Новгорода",
            imgPath: ["img/posts-img/post5_1.jpg", "img/posts-img/post5_2.jpg"],
            description: "Ух, это было настоящее испытание для наших ног, но стены кремля в Нижнем Новгороде можно считать покоренными. Оттуда открываются отличные виды на Волгу.",
            likes: 55,
            youLiked: false,
            path: "/posts/5",
            commentIDs: [1728167905110],
        },
        {
            id: 6,
            category: 'Travel',
            title: "Пролетая над Чехией",
            imgPath: ["img/posts-img/post6_1.jpg", "img/posts-img/post6_2.jpg"],
            description: "Посмотрите, какие виды! Это я пролетаю над Чехией. Готовились к посадке в Праге.",
            likes: 13,
            youLiked: false,
            path: "/posts/6",
            commentIDs: [1728167880533, 1728167848581],
        },
        {
            id: 7,
            category: 'Travel',
            title: "Белое море во всей красе",
            imgPath: [
                "img/posts-img/post7_1.jpg",
                "img/posts-img/post7_2.jpg",
                "img/posts-img/post7_3.jpg",
            ],
            description:
                "Глядя на эти снимки, понимаешь, почему оно называется белым! Это путешествие уникально в том плане, что мы не просто на море выбрались, а на настоящий необитаемый остров. Отплывали из посёлка Сумпосад, договорились с местным, чтобы отвёз нас на лодке и через неделю забрал. Рисково, но схема проверенная - два раза был так на одном острове Седостров и на другом - под названием Тиунец. Каждый раз выбирались так с палатками, выживали около недели, а потом нас забирали. Отличный вариант, чтобы отдохнуть от городской суеты и цивилизации в целом. Только надо позаботиться о провианте и обязательно запастись водой. Пресная вода нам попадалась только в линзах в каменных скалах, когда дождя нет, эти линзы пересыхают. На острове можно найти ягоды, грибы, можно ловить рыбу. Нам очень везло на камбалу, потом коптили ее и уплетали за обе щеки. А природа там чудесная. Камни повсюду огромные, скалы, мхи и сосны. Но учтите, что это дело небезопасное, ведь от диких животных никто не застрахован. Поговаривали, что между этими островами, когда вода замерзает, может переходить медведь.",
            likes: 29,
            youLiked: false,
            path: "/posts/7",
            commentIDs: [1728167825685, 1728167794310],
        },
        {
            id: 8,
            category: 'Travel',
            title: "Египетская сила",
            imgPath: ["img/posts-img/post8_1.jpg", "img/posts-img/post8_2.jpg"],
            description: "Пальмы, песочек, солнышко греет! Египет особенно запомнился мне своим гостеприимством. Просидеть всё время в отеле было бы глупо, хотелось больше местного колорита. Нам посчастливилось познакомиться с местными бедуинами, обитающими недалеко от нашего отеля. Очень добрые люди, живущие в самостоятельно обустроенных жилищах, готовят на костре, зарабатывают тем, что водят экскурсии для туристов. Одну такую экскурсию устроили и нам. Ходили с ними в пустыню, катались на верблюдах, общались на ломанном английском, но прекрасно понимали друг друга.",
            likes: 33,
            youLiked: false,
            path: "/posts/8",
            commentIDs: [1728167775174],
        },
        {
            id: 9,
            category: 'Travel',
            title: "Финляндия и весёлые названия",
            imgPath: ["img/posts-img/post9.jpg"],
            description: "Только посмотрите на название. Наверное, русские туристы очень любят это поселение. Теперь всем рассказываю, где я побывал.",
            likes: 9,
            youLiked: false,
            path: "/posts/9",
            commentIDs: [1728167755550],
        },
        {
            id: 10,
            category: 'Travel',
            title: "Красивейший закат над Волгой",
            imgPath: ["img/posts-img/post10.jpg"],
            description: "Нижний Новгород. Это стоит видеть!",
            likes: 67,
            youLiked: false,
            path: "/posts/10",
            commentIDs: [1728167728097],
        }, {
            id: 11,
            category: 'Culinary',
            title: "Вкуснейшее из фастфуда",
            imgPath: ["img/posts-img/post11_1.jpg", "img/posts-img/post11_2.jpg", "img/posts-img/post11_3.jpg"],
            description: "Турецкий кебаб - наверное, самое вкусное, что я ел в жизни. С нашей шаурмой не сравнится. Нашинкованное мясо, картошка, зелень, соусы... Иногда добавляют наггетсы, грибы, сыры или еще что-то в зависимости от вида блюда. Одним словом, тот, кто это придумал - гений. Очень хочу найти у нас в Москве что-то подобное. Пробовал этот кебаб за границей, на фотках несколько разных вариантов исполнения этого блюда.",
            likes: 99,
            youLiked: false,
            path: "/posts/11",
            commentIDs: [1728297774999, 1728297858480, 1728297977864, 1728298049575],
        }, {
            id: 12,
            category: 'Culinary',
            title: "Не мороженое, а шедевр",
            imgPath: ["img/posts-img/post12_1.jpg", "img/posts-img/post12_2.jpg"],
            description: "Все мы привыкли к мороженому в рожке или эскимо на палочке. Но мне довелось попробовать это. И, скажу вам откровенно, оно превзошло все мои ожидания!",
            likes: 73,
            youLiked: false,
            path: "/posts/12",
            commentIDs: [1728298405263],
        },
        {
            id: 13,
            category: 'Culinary',
            title: "Романтический ужин для жены",
            imgPath: ["img/posts-img/post13_1.jpg", "img/posts-img/post13_2.jpg"],
            description: "Очень старался ее удивить. Здесь токпокки-карбонара, салат цезарь-балтийский и сырники. Увы, сырники немного пригорели ",
            likes: 81,
            youLiked: false,
            path: "/posts/13",
            commentIDs: [1728298405914],
        },
        {
            id: 14,
            category: 'Culinary',
            title: "Токпокки (карбонара-версия)",
            imgPath: ["img/posts-img/post14_1.jpg", "img/posts-img/post14_2.jpg"],
            description: "Нашел этот рецепт на YouTube у одного корейского блоггера. Если интересно, как готовить, пишите в комментариях, отвечу",
            likes: 52,
            youLiked: false,
            path: "/posts/14",
            commentIDs: [1728298850100, 1728298925776, 1728299064872],
        }, {
            id: 15,
            category: 'Culinary',
            title: "Попробовал бургер из оленя",
            imgPath: ["img/posts-img/post15.jpg"],
            description: "А что вы знаете об экзотике? Я вот попробовал бургер из оленя. Не скажу, что прям разительно отличается от привычных нам видов мяса, но очень вкусно.",
            likes: 34,
            youLiked: false,
            path: "/posts/15",
            commentIDs: [],
        },
        {
            id: 16,
            category: 'Culinary',
            title: "Токпокки в кисло-сладком соусе",
            imgPath: ["img/posts-img/post16_1.jpg", "img/posts-img/post16_2.jpg"],
            description: "Тянет меня что-то на корейскую кухню. Попробовал сделать токпокки, на этот раз не карбонарную версию, а чисто на азиатский манер.",
            likes: 60,
            youLiked: false,
            path: "/posts/16",
            commentIDs: [1728299371809],
        }, {
            id: 17,
            category: 'Culinary',
            title: "К Масленице готова",
            imgPath: ["img/posts-img/post17.jpg"],
            description: "Мои блиночки, блиночки мои. Любуюсь и не нарадуюсь. А на вкус просто объедение. А вы уже готовили блины? Пишите в комментариях!",
            likes: 74,
            youLiked: false,
            path: "/posts/17",
            commentIDs: [1728299950305, 1728300035449],
        }, {
            id: 18,
            category: 'Culinary',
            title: "Вкусно кушаю в чешском кафе",
            imgPath: ["img/posts-img/post18.jpg"],
            description: "Приятно удивило это кафе! Поехал со студентами в Чехию в качестве вожатого, здесь каждый день обедаем. Каждый день что-то новое, очень сытная кухня со своим шармом, а на фото вы можете увидеть лучшее блюдо - местную версию Цезаря. P.S.: пробовали еще кнедлики, заснять не было возможности. Но студентам они не понравились.",
            likes: 48,
            youLiked: false,
            path: "/posts/18",
            commentIDs: [1728300451010],
        }, {
            id: 19,
            category: 'Culinary',
            title: "Полезный завтрак",
            imgPath: ["img/posts-img/post19.jpg"],
            description: "Как-то так я питаюсь по утрам. Особенно нравятся карельские пирожки. Они с рисом. А что у вас обычно на завтрак? Только не говорите, что пельмени!",
            likes: 30,
            youLiked: false,
            path: "/posts/19",
            commentIDs: [1728300719281, 1728300866610],
        },
        {
            id: 20,
            category: 'Culinary',
            title: "Шакотис",
            imgPath: ["img/posts-img/post20.jpg"],
            description: "Литовское лакомство необычной формы из яичного теста, испечённый на открытом огне. Мне по форме напоминает елку или гору. Хотя, если принять во внимание отверстие сверху, больше походит на вулкан",
            likes: 14,
            youLiked: false,
            path: "/posts/20",
            commentIDs: [],
        }, {
            id: 21,
            category: 'Culinary',
            title: "Попробовал приготовить бургер",
            imgPath: ["img/posts-img/post21.jpg"],
            description: "Обожаю бургеры, хотя это плохой вариант для поддержания хорошей формы.Ну что, эксперимент можно считать удавшимся. ",
            likes: 27,
            youLiked: false,
            path: "/posts/21",
            commentIDs: [1728301815051],
        }, {
            id: 22,
            category: 'Culinary',
            title: "Много всего наготовил",
            imgPath: ["img/posts-img/post22_1.jpg", "img/posts-img/post22_2.jpg"],
            description: "Возможно, вы уже видели что-то из этих блюд в других моих постах в ленте впечатлений. Салат Цезарь Балтийский, макароны с курицей, перцем и сельдереем, а также классический салат из крабовых палочек. Было очень вкусно!",
            likes: 53,
            youLiked: false,
            path: "/posts/22",
            commentIDs: [1728302266518, 1728302268035, 1728302268659],
        }, {
            id: 23,
            category: 'Culinary',
            title: "Вкусняшка из тайской кухни",
            imgPath: ["img/posts-img/post23.jpg"],
            description: "Снова делюсь кулинарными открытиями из Чехии. В расположенном неподалеку торговом центре Futurum есть прекрасный фудкорт. Там есть азиатские рестораны быстрого питания. Кажется, это блюдо взял в тайском ресторане. Картошка, мясо, овощи, да и соус отменный.",
            likes: 39,
            youLiked: false,
            path: "/posts/23",
            commentIDs: [],
        }, {
            id: 24,
            category: 'Creativity',
            title: "Мастер-класс рисования",
            imgPath: ["img/posts-img/post24_1.jpg", "img/posts-img/post24_2.jpg"],
            description: "Сходили с мужем на мастер-класс рисования. При том, что оба не сильны в рисовании, смогли нарисовать две чудесные картины. Моя картина - с черепахой, картина мужа - с лодочкой. Немного нам, конечно, помог художник, но только на финальном этапе. Очень понравилась такая творческая деятельность. Осталось придумать, куда их повесить.",
            likes: 82,
            youLiked: false,
            path: "/posts/24",
            commentIDs: [1728309022064, 1728309022904],
        },
        {
            id: 25,
            category: 'Creativity',
            title: "Прогулки с кошкой",
            imgPath: ["img/posts-img/post25_1.jpg", "img/posts-img/post25_2.jpg"],
            description: "У меня необычное хобби - прогулки с кошкой. Она сама просится, скребется в окно. Вывожу ее на шлейке. Ходим в любой сезон и в любую погоду.",
            likes: 256,
            youLiked: false,
            path: "/posts/25",
            commentIDs: [1728308598488, 1728308658824, 1728308756560],
        },
        {
            id: 26,
            category: 'Creativity',
            title: "Починка крыльца и ремонт",
            imgPath: ["img/posts-img/post26.jpg"],
            description: "Хобби каждого лета - починка чего-нибудь на даче. Не специалист в этом вопросе, делаю как умею, строго не судите. В этом году ремонтировал крыльцо. Кстати, еще душ починили и провели туда горячую воду.",
            likes: 2,
            youLiked: false,
            path: "/posts/26",
            commentIDs: [],
        }, {
            id: 27,
            category: 'Creativity',
            title: "Баня - моё хобби",
            imgPath: ["img/posts-img/post27_1.jpg", "img/posts-img/post27_2.jpg"],
            description: "А я люблю в баньку сходить. Довелось в Суздале этим летом и попариться, и в купель окунуться. А потом даже в речку занырнул, хотя тогда уже снег шёл. Обошлось без последствий, а всё почему? Потому баня, моё хобби, укрепляет здоровье! Всем советую!",
            likes: 39,
            youLiked: false,
            path: "/posts/27",
            commentIDs: [],
        }, {
            id: 28,
            category: 'Creativity',
            title: "Грибалка для души",
            imgPath: ["img/posts-img/post28.jpg"],
            description: "Обожаю ходить за грибами. Как наступает грибной сезон - сразу в лес. Последние два года очень везло на вкусные находки и много новых для себя грибов попробовал. Но тут, конечно, нужно быть осторожным и собирать грибы со знанием дела, а то отравиться можно.",
            likes: 47,
            youLiked: false,
            path: "/posts/28",
            commentIDs: [1728308411368],
        }, {
            id: 29,
            category: 'Creativity',
            title: "Фотографирую звёзды",
            imgPath: ["img/posts-img/post29.jpg"],
            description: "Нравится делать снимки звёздного неба, да и просто созерцать эту красоту. На этом кадре есть Большая медведица. Видите её?",
            likes: 53,
            youLiked: false,
            path: "/posts/28",
            commentIDs: [1728308291129],
        },

    ]
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case TOGGLE_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload
                        ? {
                            ...post,
                            likes: post.youLiked ? post.likes - 1 : post.likes + 1,
                            youLiked: !post.youLiked,
                        }
                        : post
                ),
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
            };
        default:
            return state;
    }
};

export default postsReducer;
