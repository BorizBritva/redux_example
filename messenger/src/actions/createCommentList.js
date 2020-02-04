export default function createPostsList() {
    return async(dispatch, getState) => {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const REQUEST = await fetch(URL);

        const RESULT = await REQUEST.json();

        dispatch({
            type: "GET_POSTS_LIST",
            payload: RESULT
        })
    }

}
