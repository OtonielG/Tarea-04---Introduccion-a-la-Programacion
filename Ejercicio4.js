function userRequest() {
  const user = prompt('Ingresa tu Usuario');

  if (user === 'Admin') {
    passwordRequest();
  } else if (user === '' || user === null) {
    alert('Cancelado');
  } else {
    alert('No te conozco');
  };
};

function passwordRequest() {
  const password = prompt('Ingresa tu contraseña');

  if (password === 'Jedi') {
    alert('¡Que la fuerza te acompañe!');
  } else if (user === '' || user === null) {
    alert('Cancelado');
  } else {
    alert('Contraseña Incorrecta');
  };
};

userRequest();

