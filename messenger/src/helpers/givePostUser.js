const givePostUser = async (postId) => {

    let userId = '';
    let titlePost = '';
    let bodyPost = '';
    const URL_TO_POST = `https://jsonplaceholder.typicode.com/posts`;
    const URL_TARGET_POST = `https://jsonplaceholder.typicode.com/posts?userId=${postId}`;
    const URL_TO_USER = `https://jsonplaceholder.typicode.com/users`;

    const REQUEST_TARGET_POST = await fetch(URL_TARGET_POST);
    const REQUEST_POST = await fetch(URL_TO_POST);
    const REQUEST_USER = await fetch(URL_TO_USER);

    const INFO_TARGET_POST = await REQUEST_TARGET_POST.json();
    const POST_INFO = await REQUEST_POST.json();
    const POST_USER = await REQUEST_USER.json();

    POST_INFO.forEach(item => {
        if (item.id == postId) userId = item.userId;
    })

    INFO_TARGET_POST.forEach(item => {
        if (item.id == postId) {
            titlePost = item.title;
            bodyPost = item.body;
        }
    })

    let linkUser = POST_USER[userId - 1].username.toLowerCase();

    return [linkUser, titlePost, bodyPost];

}

export default givePostUser;
