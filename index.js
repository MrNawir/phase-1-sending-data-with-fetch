// Add your code here

function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const body = {
    name: name,
    email: email,
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Append the new id to the DOM
      document.body.innerHTML = String(data.id);
      return data;
    })
    .catch(function (error) {
      // Append the error message to the DOM
      document.body.innerHTML = error.message;
    });
}

