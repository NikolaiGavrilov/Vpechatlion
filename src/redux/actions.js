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