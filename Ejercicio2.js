function mayorMenor() {
  const number = prompt('Ingresa un numero');

  if (number === 0) {
    alert('0');
  } else if (number > 0) {
    alert('1');
  } else {
    alert('-1');
  };
};

mayorMenor();