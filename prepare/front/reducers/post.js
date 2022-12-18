import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'wsJeong',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'data:image/jpeg;base64,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',
        }, {
            src: 'data:image/png;base64,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',
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlBOIgxwJYlsbFxzgEap5UGe4OyCQx-zHYw&usqp=CAU',
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
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'wsJeong',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'wsJeong',
    },
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;

            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;