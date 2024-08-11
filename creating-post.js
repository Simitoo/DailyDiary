window.addEventListener("load", createPost);

function createPost() {
    const postInputElement = document.getElementById('new-post');
    const dateInputElement = document.getElementById('post-date');
    const submitBtnElement = document.getElementById('submit-btn');
    const postListElement = document.getElementById('post-list');

    submitBtnElement.addEventListener('click', () => {
        const newPost = dateInputElement.value;
    });
}