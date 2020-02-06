import initialState from './initialState';

export default function rootReducers (state=initialState, action ) {
    switch(action.type) {
        case "GET_USERS_LISTS":
        return {
            ...state,
            users: action.payload
        }
        break;

        case "GET_POSTS_LIST":
        return {
            ...state,
            posts: action.payload
        }
        break;

        case "GET_COMMENT_LIST":
        return {
            ...state,
            modal: action.payload,
            modalStatus: !state.modalStatus
        }
        break;

        case "ADD_USER_POST":
        return {
            ...state,
            userPost: action.payload
        }
        break;

        case "CLOSE_MODAL":
        return {
            ...state,
            modalStatus: !state.modalStatus
        }

        default: return state;
    }
}
