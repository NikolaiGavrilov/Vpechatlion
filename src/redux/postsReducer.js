import { ADD_POST, TOGGLE_LIKE } from './actions';

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Поездка на Балтийскую косу',
            imgPath: ['img/posts-img/post1.jpg'],
            description: "Съездили на Балтийскую косу",
            likes: 35,
            youLiked: false,
            path: '/posts/1',
        },
        {
            id: 2,
            title: 'На дачу - тоже путешествие',
            imgPath: ['img/posts-img/post2.jpg'],
            description: "А куча так и не сожжена...",
            likes: 20,
            youLiked: false,
            path: '/posts/2',
        },
        {
            id: 3,
            title: 'Беловежская пуща-огонь!',
            imgPath: ['img/posts-img/post3.jpg'],
            description: "Видели оленей и много кого еще",
            likes: 17,
            youLiked: false,
            path: '/posts/3',
        },
        {
            id: 4,
            title: 'А вы видели ивы в Брестской крепости?',
            imgPath: ['img/posts-img/post4.jpg'],
            description: "У них будто собственный барбершоп...",
            likes: 15,
            youLiked: false,
            path: '/posts/4',
        },
        {
            id: 5,
            title: 'Кремль Нижнего Новгорода',
            imgPath: ['img/posts-img/post5_1.jpg', 'img/posts-img/post5_2.jpg',],
            description: "И с реки посмотрели, и по самому кремлю полазали",
            likes: 55,
            youLiked: false,
            path: '/posts/5',
        },
        {
            id: 6,
            title: 'Пролетая над Чехией',
            imgPath: ['img/posts-img/post6_1.jpg', 'img/posts-img/post6_2.jpg'],
            description: "Посмотрите, какие виды!",
            likes: 13,
            youLiked: false,
            path: '/posts/6',
        },
        {
            id: 7,
            title: 'Белое море во всей красе',
            imgPath: ['img/posts-img/post7_1.jpg', 'img/posts-img/post7_2.jpg', 'img/posts-img/post7_3.jpg',],
            description: "Глядя на эти снимки, понимаешь, почему оно называется белым!",
            likes: 29,
            youLiked: false,
            path: '/posts/7',
        },
        {
            id: 8,
            title: 'Египетская сила',
            imgPath: ['img/posts-img/post8_1.jpg', 'img/posts-img/post8_2.jpg',],
            description: "Пальмы, песочек, солнышко греет!",
            likes: 33,
            youLiked: false,
            path: '/posts/8',
        },
        {
            id: 9,
            title: 'Финляндия и весёлые названия',
            imgPath: ['img/posts-img/post9.jpg'],
            description: "Теперь всем расскажу, где я побывал",
            likes: 9,
            youLiked: false,
            path: '/posts/9',
        },
        {
            id: 10,
            title: 'Красивейший закат над Волгой',
            imgPath: ['img/posts-img/post10.jpg'],
            description: "Нижний Новгород. Это стоит видеть!",
            likes: 67,
            youLiked: false,
            path: '/posts/10',
        },

    ],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case TOGGLE_LIKE:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload
                        ? { ...post, likes: post.youLiked ? post.likes - 1 : post.likes + 1, youLiked: !post.youLiked }
                        : post
                ),
            };
        default:
            return state;
    }
};

export default postsReducer;