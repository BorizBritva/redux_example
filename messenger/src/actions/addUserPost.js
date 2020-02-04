import usersPost from '../helpers/usersPosts';

export default function addUserPost(userId) {
    return async(dispatch, getState) => {

        const RESULT = await usersPost(userId);

        dispatch({
            type: "ADD_USER_POST",
            payload: RESULT
        })
    }

}
