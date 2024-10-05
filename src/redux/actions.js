//Экшены для постов
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