const loginFormHandler = async (event) => {
  event.preventDefault();

  console.log('button pushed');

  // Collect values from the login form
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/bands/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const github = document.querySelector('#github-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, github, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
