let spotifyData = [];

const statFinder = async (event) => {
  event.preventDefault();
  const response = await fetch(`/api/bands/`, {
    method: 'GET',
    body: JSON.stringify({
      band_name,
      id
      }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // return response
    spotifyData.push(response);
    // return spotifyData
    console.log(spotifyData);
    console.log(response);
  } else {
    alert(response.statusText);
    // alert('Failed to create post');
  }
}

console.log('here');
console.log(spotifyData);
console.log(response);

document
  .addEventListener("load", statFinder);