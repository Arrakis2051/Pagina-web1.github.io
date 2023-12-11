let numero = 1;
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







let numero1 = 1;
const limiteSuperior1 = 4;
function actualizarResultado1() {
  document.getElementById('result1').innerText = numero1;
}

function sumar1(valor) {
  numero1 += valor;
  if (numero1 > limiteSuperior1 ) {
    numero1 = limiteSuperior1;
  }
  actualizarResultado1();
}

function restar1(valor) {
  numero1 -= valor;
  if (numero1< 0) {
    numero1 = 0;
  }
  actualizarResultado1();
};





let numero2 = 1;
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



document.getElementById('arrow').onclick = function () {
    location.href = '/cod2/index.html'
  }
  
  
  document.getElementById('cruz').onclick = function () {
    location.href = '/cod2/index.html'
  }