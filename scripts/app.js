window.addEventListener("load", createPost);

function createPost() {
    const titleInputElement = document.getElementById('post-title');
    const postInputElement = document.getElementById('new-post');
    const dateInputElement = document.getElementById('post-date');
    const submitBtnElement = document.getElementById('submit-btn');
    const postListElement = document.getElementById('post-list');

    submitBtnElement.addEventListener('click', (event) => {
        event.preventDefault();

        const title = titleInputElement.value;
        const post = postInputElement.value;
        const date = dateInputElement.value;

        if(!post || !date || !title){
            return;
        }

        // add to post list
        const postList = createPostList(title, post, date);
        postListElement.appendChild(postList);

        // clear input fields
        titleInputElement.value = '';
        postInputElement.value = '';
        dateInputElement.value = '';
    });

    function createPostList(title, post, date){
        const pTitleElement = document.createElement('p');
        const pPostElement = document.createElement('p');
        const pDateElement = document.createElement('p');
        pTitleElement.textContent = title;
        pPostElement.textContent = post;
        pDateElement.textContent = date;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTitleElement);
        articleElement.appendChild(pPostElement);
        articleElement.appendChild(pDateElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');
        editBtnElement.textContent = 'Edit';

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-btn');
        deleteBtnElement.textContent = 'Delete';

        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        divElement.appendChild(editBtnElement);
        divElement.appendChild(deleteBtnElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);

        return liElement;
    }
}

