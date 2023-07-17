const hideButtons = async (event) => {
  event.preventDefault();

  const form = document.querySelector('#form');
  const buttons = document.querySelector('#actionBtns');

  form.style.display = 'flex';
  buttons.style.display = 'none';
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#action')
  .addEventListener('click', hideButtons);

document
  .querySelector('#submit-post')
  .addEventListener('submit', newFormHandler);