const signupFormHandler = async (event) => {
  event.preventDefault();

  console.log('register auditioner button pushed');

  const first_name = document.querySelector('#firstName').value.trim();
  const last_name = document.querySelector('#lastName').value.trim();
  const username = document.querySelector('#username').value.trim();
  const instrument = document.querySelector('#virtuoso').value.trim();
  const years_played = document.querySelector('#yearsExperience').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password= document.querySelector('#password').value.trim();

  if (first_name && last_name && instrument && username && email && password) {
    const response = await fetch('/api/auditioners', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, username, instrument, years_played, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);