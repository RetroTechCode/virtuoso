const signupFormHandler = async (event) => {
  event.preventDefault();

  const band_name = document.querySelector('#band_name').value.trim();
  const username = document.querySelector('#username').value.trim();
  const manager_name = document.querySelector('#manager_name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (band_name && username && email && password) {
    const response = await fetch('/api/bands', {
      method: 'POST',
      body: JSON.stringify({ band_name, username, manager_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/band-profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);