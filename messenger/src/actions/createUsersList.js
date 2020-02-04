import avaterFone from '../helpers/avatarFone';
import generateName from '../helpers/generateName';

export default function createUsersList() {
    return async(dispatch, getState) => {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const REQUEST = await fetch(URL);

        const RESULT = await REQUEST.json();

        RESULT.forEach( (item) => {

            let color = avaterFone();
            let name = generateName(item.name);

            item.backColor = color;
            item.shortName = name;
        });

        dispatch({
            type: "GET_USERS_LISTS",
            payload: RESULT
        })
    }

}
