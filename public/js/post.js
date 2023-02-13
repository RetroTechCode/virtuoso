// create an asynchronouse function that listend for the click of new post button to input a new post
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title-input').value.trim();
  const post_content = document.querySelector('#post-content').value.trim();
  const date_created = `${new Date().getMonth(2) + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
  
  if (title && post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ 
        title, 
        post_content,
        date_created
       }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/band-profile');
    } else {
      alert(response.statusText);
      // alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);