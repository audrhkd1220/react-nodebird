import shortId from 'shortid';
import producd, { produce } from 'immer';
import faker from 'faker';
//import { faker } from '@faker-js/faker';

export const initialState = {
    mainPosts: [],
    imagePaths: [],
    hasMorePosts: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
}

export const generateDummyPost = (number) => Array(number).fill().map(() => ({ //지금은 20개지만 성능최적화를 위해서면 수천개를 만들자
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}));

export const LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
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

//이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                draft.hasMorePosts = draft.mainPosts.length < 50;
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
                /*
                return {
                    ...state,
                    addPostLoading: true,
                    addPostDone: false,
                    addPostError: null,
                };
                */
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
                /*
                return {
                    ...state,
                    mainPosts: [dummyPost(action.data), ...state.mainPosts],
                    addPostLoading: false,
                    addPostDone: true,
                };
                */
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
                /*
                return {
                    ...state,
                    addPostLoading: false,
                    addPostError: action.error,
                };
                */
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
                /*
                return {
                    ...state,
                    removePostLoading: true,
                    removePostDone: false,
                    removePostError: null,
                };
                */
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
                /*
                return {
                    ...state,
                    mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                    removePostLoading: false,
                    removePostDone: true,
                };
                */
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
                /*
                return {
                    ...state,
                    removePostLoading: false,
                    removePostError: action.error,
                };
                */
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
                /*
                return {
                    ...state,
                    addCommentLoading: true,
                    addCommentDone: false,
                    addCommentError: null,
                };
                */
            case ADD_COMMENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                /*
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
                */
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
                /*
                return {
                    ...state,
                    addCommentLoading: false,
                    addCommentError: action.error,
                };
                */
            default:
                break;
                //return state;
        }
    });

    
};

export default reducer;