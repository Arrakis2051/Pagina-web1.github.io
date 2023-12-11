let numero = 0;
const limiteSuperior = 4;
function actualizarResultado() {
  document.getElementById('result').innerText = numero;
}

function sumar(valor) {
  numero += valor;
  if (numero > limiteSuperior ) {
    numero = limiteSuperior;
  }
  actualizarResultado();
}

function restar(valor) {
  numero -= valor;
  if (numero < 0) {
    numero = 0;
  }
  actualizarResultado();
};







let numero2 = 0;
const limiteSuperior2 = 4;
function actualizarResultado2() {
  document.getElementById('result2').innerText = numero2;
}

function sumar2(valor) {
  numero2 += valor;
  if (numero2 > limiteSuperior2 ) {
    numero2 = limiteSuperior2;
  }
  actualizarResultado2();
}

function restar2(valor) {
  numero2 -= valor;
  if (numero2 < 0) {
    numero2 = 0;
  }
  actualizarResultado2();
};






let numero3 = 0;
const limiteSuperior3 = 4;
function actualizarResultado3() {
  document.getElementById('result3').innerText = numero3;
}

function sumar3(valor) {
  numero3 += valor;
  if (numero3 > limiteSuperior3 ) {
    numero3 = limiteSuperior3;
  }
  actualizarResultado3();
}

function restar3(valor) {
  numero3 -= valor;
  if (numero3 < 0) {
    numero3 = 0;
  }
  actualizarResultado3();
};




document.getElementById('d-crt6').onclick = function () {
  location.href = '/cod3/index.html'
}


document.getElementById('c-crt1').onclick = function () {
  location.href = '/cod3/index.html'
}



document.getElementById('c-crt2').onclick = function () {
  location.href = '/cod3/index.html'
}



document.getElementById('fl-crt').onclick = function () {
  location.href = '/cod/index.html'
}


