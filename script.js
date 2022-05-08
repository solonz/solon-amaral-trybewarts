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

// Requisito 18

// Fontes:
// https://stackoverflow.com/questions/11719961/javascript-remove-disabled-attribute-from-html-input
// https://www.codegrepper.com/code-examples/javascript/add+attribute+to+button+element+in+javascript

// Eu não entendi porque precisamos usar uma aspas vazia pra fazer o setAttribute disabled funcionar

function validarTermos() {
  const btnEnviar = document.getElementById('submit-btn')
  const agreement = document.getElementById('agreement')

  agreement.addEventListener('click', () => {
    if (document.getElementById('agreement').checked === true) {
      btnEnviar.removeAttribute('disabled');
    } else {
      btnEnviar.setAttribute('disabled', '');
    }
  });
}
validarTermos();

