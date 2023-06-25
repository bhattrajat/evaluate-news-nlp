async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  try {
    const res = await fetch('http://localhost:8081/predict', {
      body: JSON.stringify({ text: formText }),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log('res', res);
    const data = await res.json();
    document.getElementById('results').innerHTML = data.message;
  } catch (error) {
    console.log('error while fetching', error);
  }
}

export { handleSubmit };
