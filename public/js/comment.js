const commentBox = async (event) => {
    event.preventDefault();

    const button = document.querySelector('#add-comment');
    const commentForm = document.querySelector('#comment-form');

    button.style.display = 'none';
    commentForm.style.display = 'flex';
};

const submitFormHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment-content').value.trim();
    const id = document.querySelector('[data-id]').dataset.id;
    if (content) {
        try {
            const response = await fetch(`/api/post/${id}`, {
                method: 'POST',
                body: JSON.stringify({ content }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log(response.data);
                document.location.replace(`/post/${id}`);
            } else {
                console.error('Failed to submit comment');
            }
        } catch (error) {
            console.error(error);
        }
    }
};

document.querySelector('#add-comment').addEventListener('click', commentBox);

document
    .querySelector('#comment-form')
    .addEventListener('submit', submitFormHandler);