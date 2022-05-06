function login() {
  const btnLogin = document.getElementById('btn-login');
  const emailInput = document.querySelector('.trybewarts-login')[0];
  const senhaInput = document.querySelector('.trybewarts-login')[1];

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

login();
