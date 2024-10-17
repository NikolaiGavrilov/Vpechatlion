import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';
import loggedInReducer from './loggedInReducer';

//корневой рут, который сочетает все редьюсеры
const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    users: userReducer,
    loggedIn: loggedInReducer,
});

export default rootReducer;