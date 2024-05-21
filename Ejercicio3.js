const login = 'Trabajador';

let message = login == 'Trabajador' ? 'Hola' :
              login == 'Dueño' ? 'Felicidades' :
              login == '' ? 'Sin sesion' :
              '';
