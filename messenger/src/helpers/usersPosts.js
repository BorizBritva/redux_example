import avatarFone from './avatarFone';
import generateName from './generateName';

const usersPost = async(id) => {

    const NUMBER_ID = parseInt(id.match(/[0-9]/g));

    const URL_TO_POST = `https://jsonplaceholder.typicode.com/posts?userId=${NUMBER_ID}`;
    const URL_USER = 'https://jsonplaceholder.typicode.com/users';
    const REQUEST_POST = await fetch(URL_TO_POST);
    const REQUEST_USER = await fetch(URL_USER);

    const POST_INFO = await REQUEST_POST.json();
    const USER_INFO = await REQUEST_USER.json();

    const RESULT = USER_INFO.filter((item) => {
        return item.id == NUMBER_ID;
    })
    RESULT[0].backColor = avatarFone();
    RESULT[0].shorname = generateName(RESULT[0].name);
    RESULT[0].link = `@${RESULT[0].username.toLowerCase()}`;
    RESULT.push(POST_INFO);

    return RESULT;
}

export default usersPost;
