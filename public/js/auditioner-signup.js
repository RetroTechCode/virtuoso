const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector('#auditioner_first_name').value.trim();
    const last_name = document.querySelector('#auditioner_last_name').value.trim();
    const username = document.querySelector('#auditioner_user').value.trim();
    const instrument = document.querySelector('#datalistOptions').value;
    const years_played = document.querySelector('#years_played').value.trim();
    const email = document.querySelector('#auditioner_email').value.trim();
    const password= document.querySelector('#auditioner_password').value.trim();
    

    if (first_name && last_name && username && instrument && years_played && email && password) {
        console.log("Anyone there?");
      const response = await fetch('/api/auditioners', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, username, instrument, years_played, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("Anyone there?");
        document.location.replace('/band-profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);