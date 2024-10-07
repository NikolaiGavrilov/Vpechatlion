const initialState = {
    loggedIn: false,
    userID: null,
};

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