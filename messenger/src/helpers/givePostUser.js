const givePostUser = async (postId) => {

    let arrayIndex = postId - 1;

    const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
    const POSTS_REQUEST = await fetch(POSTS_URL);
    const POSTS_ARRAY = await POSTS_REQUEST.json();

    const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
    const USERS_REQUEST = await fetch(USERS_URL);
    const USERS_ARRAY = await USERS_REQUEST.json();

    let titlePost = POSTS_ARRAY[arrayIndex].title;
    let bodyPost = POSTS_ARRAY[arrayIndex].body;
    let userId  = POSTS_ARRAY[arrayIndex].userId;
    let userName = `@${USERS_ARRAY[userId - 1].username.toLowerCase()}`;

    return {username: userName, title: titlePost, body: bodyPost};

}

export default givePostUser;
