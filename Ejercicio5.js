function totalPrice() {
  const platillo1 = prompt('Ingresa el precio del primer platillo');
  const platillo2 = prompt('Ingresa el precio del segundo platillo');
  const platillo3 = prompt('Ingresa el precio del tercer platillo');

  let total = (platillo1 + platillo2 + platillo3) / 1.12;

  alert(`El monto total es ${total}`);
};

totalPrice();