function nameCreator() {
  const name = prompt('¿Cuál es el nombre del creador de JavaScript?');

  if (name === 'Brendan Eich') {
    console.log('¡Correcto!');
  } else {
    console.log('“¿No lo sabes? ¡Brendan Eich!');
  };
};

nameCreator();
