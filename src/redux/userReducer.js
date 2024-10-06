import { v4 as uuidv4 } from 'uuid';
import { ADD_USER, REMOVE_USER } from './actions';

const initialUserState = {
    users: [{
        userID: "7653a997-a566-46d1-bd00-d134f72ddecb",
        username: "Sladko3zhka",
        avatar: "img/users-img/user1.png",
        userDescription: "Люблю высыпаться и вкусно покушать.",
        userPosts: [5, 10],
        userComments: [1728167078109, 1728167078121, 1728167880533, 1728167825685, 1728167775174],
    }, {
        userID: "3804bd6d-d7c4-4804-b182-cbe607d26abb",
        username: "BespechnyEzdok",
        avatar: "img/users-img/user2.png",
        userDescription: "Путешествия - моя страсть! Особенно походы.",
        userPosts: [1, 2, 7, 8],
        userComments: [1728167926053, 1728167794310, 1728167755550],
    },
    {
        userID: "d7e8b622-8e69-4493-86fb-76ab726afc31",
        username: "Krasav4ik",
        avatar: "img/users-img/user3.png",
        userDescription: "В поисках новых ощущений =)",
        userPosts: [3, 4, 9, 6],
        userComments: [1728166961303, 1728167078110, 1728167905110, 1728167848581, 1728167728097],
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