//Экшены для постов
export const UPDATE_POST = "UPDATE_POST";

export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: post,
});

export const ADD_POST = 'ADD_POST';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});

export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const toggleLike = (id) => ({
    type: TOGGLE_LIKE,
    payload: id,
});

export const DELETE_POST = 'DELETE_POST';

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id,
});

//Экшены для комментов
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
});

export const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    payload: id,
});

//Экшены для юзеров (на момент версии от 17 октября 2024 года неактуальны, но будут использоваться потом по мере расширения функционала для регистрации и для удаления пользователем своего профиля через личный кабинет)
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const removeUser = (userID) => ({
    type: REMOVE_USER,
    payload: userID,
});

//Экшены для входа в состояние зарегистрированного пользователя (залогиниться) и выхода из него
export const login = (userID) => ({
    type: 'LOGIN',
    payload: { userID },
});

export const logout = () => ({
    type: 'LOGOUT',
});