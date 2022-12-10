import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    },
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    };
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    };
}

//async action creator


// 동적으로 액션을 생성해주는 action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
};

changeNickname('JWS');
//{
//  type: 'CHANGE_NICKNAME',
//  data: 'JWS',
//}
//store.dispatch(changeNickname('JWS'));

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return { ...state, ...action.payload };
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;