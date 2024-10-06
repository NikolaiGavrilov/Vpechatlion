import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    users: userReducer,
});

export default rootReducer;