export default function closeModal() {
    return async(dispatch, getState) => {

        dispatch({
            type: "CLOSE_MODAL",
            payload: false
        })
    }

}
