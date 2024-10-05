import { ADD_COMMENT, REMOVE_COMMENT } from "./actions";

const initialCommentsState = {
    comments: [{
        id: 1728166961303,
        postId: 1,
        text: "Вау! Сразу туда захотелось!",
    }, {
        id: 1728167078109,
        postId: 1,
        text: "А море холодное?",
    }, {
        id: 1728167078110,
        postId: 2,
        text: "Уютный домик, у меня тоже дача есть))",
    }, {
        id: 1728167078121,
        postId: 3,
        text: "Ваау! Какие милые!",
    }, {
        id: 1728167926053,
        postId: 4,
        text: "Что сказать... Есть, чему поучиться",
    }, {
        id: 1728167905110,
        postId: 5,
        text: "А это платно или бесплатно?",
    },
    {
        id: 1728167880533,
        postId: 6,
        text: "Боюсь летать на самолётах, но вид завораживающий",
    },
    {
        id: 1728167848581,
        postId: 6,
        text: "Трдельники там что надо!",
    },
    {
        id: 1728167825685,
        postId: 7,
        text: "А если б этот дядя вас обратно не забрал?",
    }
        ,
    {
        id: 1728167794310,
        postId: 7,
        text: "Кто не рискует, тот не пьет шампанское =)",
    },
    {
        id: 1728167775174,
        postId: 8,
        text: "А море как, тёплое? Хочется тоже в жаркие страны податься, да вот только работа...",
    },
    {
        id: 1728167755550,
        postId: 9,
        text: "Отличное место, чтобы послать на 9 букв =)",
    },
    {
        id: 1728167728097,
        postId: 10,
        text: "Волга просто роскошная!",
    }]
};

const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload),
            };
        default:
            return state;
    }
};

export default commentsReducer;