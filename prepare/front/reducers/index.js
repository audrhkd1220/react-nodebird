import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE:
                //HYDRATE는 서버 사이드 랜더를 위한 것.
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;