// Elements HTML

// Parte donde se mostrarán los números, la pantalla de la calculadora
const display = document.querySelector('.calculadora_display');

// Botones que tiene la calculadora
const botones = document.querySelector('.calculadora_tecla');

// Verificar la selección de elementos
console.log(display);
console.log(botones);

// Estado de la calculadora
let num1 = '';
let num2 = '';
let operacion = '';
let resultadoMostrado = false;

// Añadir Event Listeners
botones.addEventListener('click', (event) => {
  if (!event.target.matches('button')) return; // Ignora clics que no sean en botones

  // Obtener botón
  const tecla = event.target;
  console.log(tecla);

  // Obtener acción del botón
  const accion = tecla.dataset.accio;

  // Si no es una acción, es un número
  if (!accion) {
    agregarNumero(tecla.textContent);
    return;
  }
  
  // Manejar tipos de acciones
  if (accion === 'decimal') {
    agregarDecimal();
  } else if (accion === 'buidar') {
    limpiar(tecla);
  } else if (accion === 'calcular') {
    calcular();
  } else {
    seleccionarOperacion(accion);
  }
});

// Función para realizar cálculos
function calculos(num1, operacion, num2) {
  switch (operacion) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      return num1 / num2;
    default:
      return num2;
  }
}

// Función para seleccionar operación
function seleccionarOperacion(accion) {
  operacion = accion;
  num2 = num1;
  num1 = '';
  console.log('Operación seleccionada:', operacion);
}

// Función para obtener el tipo de tecla
function obtenerTipoTecla(tecla) {
  return tecla.dataset.accio ? 'accion' : 'numero';
}

// Función para actualizar el display
function actualizarDisplay(texto) {
  display.textContent = texto;
}

// Función para agregar un número
function agregarNumero(numero) {
  if (num1 === '0' && numero === '0') return;
  if (num1.includes('.') && numero === '.') return;
  if (resultadoMostrado) {
    num1 = numero;
    resultadoMostrado = false;
  } else {
    num1 += numero;
  }
  actualizarDisplay(num1);
}

// Función para agregar un decimal
function agregarDecimal() {
  if (!num1.includes('.')) {
    num1 += '.';
    actualizarDisplay(num1);
  }
}

// Función para limpiar la calculadora
function limpiar(tecla) {
  if (tecla.textContent === 'AC') {
    num1 = '';
    num2 = '';
    operacion = '';
    resultadoMostrado = false;
  } else {
    num1 = '';
    tecla.textContent = 'AC';
  }
  actualizarDisplay('0');
}

// Función para actualizar el estado de la calculadora
function actualizarEstado(tecla, tipo) {
  if (tipo === 'numero') {
    if (resultadoMostrado) {
      num1 = tecla;
      resultadoMostrado = false;
    } else {
      num1 += tecla;
    }
    actualizarDisplay(num1);
  } else if (tipo === 'accion') {
    if (tecla !== 'calcular') {
      operacion = tecla;
      num2 = num1;
      num1 = '';
    }
  }
}

// Función para calcular el resultado
function calcular() {
  if (operacion && num1) {
    const resultado = calculos(parseFloat(num2), operacion, parseFloat(num1));
    actualizarDisplay(resultado);
    num1 = resultado.toString();
    num2 = '';
    operacion = '';
    resultadoMostrado = true;
  }
}