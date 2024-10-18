// если loggedIn равно false и userID null, то пользователь не авторизован, система его распознавать не будет
// когда пользователь авторизован, то loggedIn будет true, а userID возьмется из usersReducer по совпадению с введенным в форму именем
const initialState = {
    loggedIn: false,
    userID: null,
};

// Действия по успешному входу в учетную запись со сменой состояния на loggedIn true и присвоением текущему пользователю идентификатора (нужно для понимания, какие посты и комментарии принадлежат пользователю, чтобы дать ему возможность их удалять)
// Действие по выходу из аккаунта - откат до изначального состояния
const loggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                userID: action.payload.userID,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default loggedInReducer;