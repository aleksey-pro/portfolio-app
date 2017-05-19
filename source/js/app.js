import prepareSend from './prepareSend';

const formMail = document.querySelector('#mail');
const formLogin = document.querySelector('#login');

if (formMail) {
  formMail.addEventListener('submit', prepareSendMail);
}
if (formLogin) {
  formLogin.addEventListener('submit', prepareSendLogin);
}

function prepareSendMail(e) {
  e.preventDefault();
  let data = {
    name: formMail.name.value,
    email: formMail.email.value,
    text: formMail.text.value
  };
  prepareSend('/contact', formMail, data);
}

function prepareSendLogin(e) {
  e.preventDefault();
  let data = {
    login: formLogin.login.value,
    password: formLogin.password.value
  };
  
  prepareSend('/login', formLogin, data, function(data) {
    if (data === 'Авторизация успешна!') {
      location.href = '/admin';
    }
  });
}