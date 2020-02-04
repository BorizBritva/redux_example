import givePostUser from '../helpers/givePostUser';

export default function createPostsList() {
    return async(dispatch, getState) => {
        const URL = `https://jsonplaceholder.typicode.com/comments?postId=${1}`;
        const REQUEST = await fetch(URL);

        const RESULT = await REQUEST.json();
        let user = await givePostUser(1);
        console.log(user, RESULT);

        /*dispatch({
            type: "GET_POSTS_LIST",
            payload: RESULT
        })*/
    }

}
