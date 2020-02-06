import givePostUser from '../helpers/givePostUser';

export default function createCommentsList(id) {
    return async(dispatch, getState) => {
        const URL = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        const REQUEST = await fetch(URL);

        const COMMENTS = await REQUEST.json();
        let user = await givePostUser(id);
        user.comments = COMMENTS;

        //console.log(user);
        dispatch({
            type: "GET_COMMENT_LIST",
            payload: user
        })
    }

}
