const loginFormHandler = async (event) => {
  event.preventDefault();

  console.log('button pushed');

  // Collect values from the login form
  const band_user = document.querySelector('#band_user').value.trim();
  const band_password = document.querySelector('#band_password').value.trim();

  if (band_user && band_password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/bands/login', {
      method: 'POST',
      body: JSON.stringify({ band_user, band_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/band-profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);