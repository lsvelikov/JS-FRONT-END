function attachEvents() {
    
    const baseUrl = 'http://localhost:3030/jsonstore/blog';

    const loadPostsBtnElement = document.querySelector('#btnLoadPosts');
    const viewBtnElement = document.querySelector('#btnViewPost');
    const postSelectElement = document.querySelector('#posts');
    const postTitleElement = document.querySelector('#post-title');
    const postBodyElement = document.querySelector('#post-body');
    const postCommentsElement = document.querySelector('#post-comments');
    let allPosts = {};

    loadPostsBtnElement.addEventListener('click', async() => {

        postSelectElement.innerHTML = '';
        const response = await fetch(baseUrl + '/posts');
        allPosts = await response.json();

       for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');

            option.value = postId;
            option.textContent = postObj.title;
            postSelectElement.appendChild(option);
       }
    });

    viewBtnElement.addEventListener('click', async() => {
        postBodyElement.innerHTML = '';
        postCommentsElement.innerHTML = '';

        const postId = postSelectElement.value;
        postBodyElement.textContent = allPosts[postId].body;
        postTitleElement.textContent = allPosts[postId].title;

        const response = await fetch(baseUrl + '/comments');
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);

        filteredComments.forEach(c => {
            const liElement = document.createElement('li');
            liElement.id = c.id;
            liElement.textContent = c.text;
            postCommentsElement.appendChild(liElement);
            
        });
    });
}

attachEvents();