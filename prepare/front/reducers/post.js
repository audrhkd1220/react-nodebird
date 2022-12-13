export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'wsJeong',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fssan_na%2F221916293886&psig=AOvVaw00RmEHIQRfkMjrnoA26swP&ust=1670851354701000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOD7rb_U8fsCFQAAAAAdAAAAABAD',
        }, {
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhyeee90.tistory.com%2F465&psig=AOvVaw00RmEHIQRfkMjrnoA26swP&ust=1670851354701000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOD7rb_U8fsCFQAAAAAdAAAAABAI',
        }, {
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheqoo.net%2Fsquare%2F1782897478&psig=AOvVaw00RmEHIQRfkMjrnoA26swP&ust=1670851354701000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOD7rb_U8fsCFQAAAAAdAAAAABAQ',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고싶어요~',
        }],
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};
const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: 'wsJeong',
    },
    Images: [],
    Commnets: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;