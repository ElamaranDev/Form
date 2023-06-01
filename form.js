
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwVXEIkKXhc47uOYiRnIQSGILTs8GmRjxy4g99j3JG7p53gH6fT6KHkLrlgKuUr0LBv/exec'
  const form = document.forms['Student-Information']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      form.reset();
      window.location.href="success.html";
  })

