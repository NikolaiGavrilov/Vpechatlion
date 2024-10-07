import { v4 as uuidv4 } from 'uuid';
import { ADD_USER, REMOVE_USER } from './actions';

const initialUserState = {
    users: [{
        userID: "7653a997-a566-46d1-bd00-d134f72ddecb",
        username: "Sladko3zhka",
        avatar: "img/users-img/user1.png",
        userDescription: "Люблю вкусняшки. Но главная вкусняшка здесь я!",
        userPosts: [5, 10, 17],
        userComments: [1728167078109, 1728167078121, 1728167880533, 1728167825685, 1728167775174, 1728298405263, 1728298405914, 1728300035449, 1728300719281, 1728300866610],
    }, {
        userID: "3804bd6d-d7c4-4804-b182-cbe607d26abb",
        username: "BespechnyEzdok",
        avatar: "img/users-img/user2.png",
        userDescription: "Путешествия - моя страсть! Особенно походы.",
        userPosts: [1, 2, 7, 8, 13, 14, 16, 22],
        userComments: [1728167926053, 1728167794310, 1728167755550, 1728298925776],
    },
    {
        userID: "d7e8b622-8e69-4493-86fb-76ab726afc31",
        username: "Krasav4ik",
        avatar: "img/users-img/user3.png",
        userDescription: "Привет. Как дела? Давайте знакомиться! Можете называть меня просто красавчиком.",
        userPosts: [3, 4, 9, 6, 18, 20, 23],
        userComments: [1728166961303, 1728167078110, 1728167905110, 1728167848581, 1728167728097, 1728299371809],
    },
    {
        userID: "f9330679-e950-498b-b001-4ee00c825d7e",
        username: "BuLLIeHKa",
        avatar: "img/users-img/user4.png",
        userDescription: "Между нами тает лёд, пусть теперь нас никто не найдёт. Мы промокнем под дождём, и сегодня мы только вдвоём.",
        userPosts: [12, 19],
        userComments: [1728297774999, 1728299064872, 1728302268035, 1728302268659],
    },
    {
        userID: "8cd80280-587c-441f-bf9b-dfb2f97de339",
        username: "MrExtreme",
        avatar: "img/users-img/user5.png",
        userDescription: "Очень люблю активные виды отдыха и иногда позволяю себе полакомиться бургером",
        userPosts: [15, 21],
        userComments: [1728297858480, 1728298049575, 1728298850100, 1728300451010],
    },
    {
        userID: "a5a91f25-1efe-4db2-aeaa-a6438156d9d0",
        username: "ASTROcat",
        avatar: "img/users-img/user6.png",
        userDescription: "Мяу мяу мяу. Мяу? Мяу мяу.",
        userPosts: [11],
        userComments: [1728297977864, 1728299950305, 1728301815051, 1728302266518],
    }
    ]
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = {
                userID: uuidv4(), // Генерация уникального ID
                username: action.payload.username,
                avatar: action.payload.avatar,
                userDescription: action.payload.userDescription,
                userPosts: [],
                userComments: []
            };
            return {
                ...state,
                users: [...state.users, newUser],
            };

        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.userID !== action.payload),
            };

        default:
            return state;
    }
};

export default userReducer;