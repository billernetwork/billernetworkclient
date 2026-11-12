const form = document.querySelector('#login');
const error = document.querySelector('#error');
const domain = document.querySelector('#domain');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (domain.value.trim().toLowerCase() === 'billernetwork.site'
      && username.value === 'billme'
      && password.value === 'billme') {
    form.reset();
    window.location.assign('https://stripe.com/');
    return;
  }

  error.hidden = false;
  error.textContent = 'Incorrect Log-on Information or Domain not found. Please contact your domain administrator.' ; 
  password.value = '';
  password.focus();
});

form.querySelector('button').disabled = false;
