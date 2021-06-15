
/**
|--------------------------------------------------------------------------
| Reference: http://youmightnotneedjquery.com/
*/
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

function addEventListener(el, eventName, handler) {
  var $elements = [el];

  if (el.length !== undefined && el.length > 0) {
    $elements = el;
  }

  for (var a = 0, lena = $elements.length; a < lena; a++) {
    const $el = $elements[a];

    if ($el.addEventListener) {
      $el.addEventListener(eventName, handler);
    } else {
      $el.attachEvent('on' + eventName, function(){
        handler.call($el);
      });
    }
  }
}
/**
|--------------------------------------------------------------------------
*/

ready(function () {
  var selector = document.querySelectorAll('input[name="method-type"]');

  addEventListener(selector, 'change', function (event) {
    /**
     * Elemento actual que se ha seleccionado
     */
    const current = event.target;

    switch (event.target.getAttribute('id')) {
      case 'cdirecto':
        /**
         * Hacer en este bloque lo que corresponda a: Directo
         */
        console.log('Selección -> Directo', current);
        break;
      case 'creactivo':
        /**
         * Hacer en este bloque lo que corresponda a: Reactivo
         */
        console.log('Selección -> Reactivo', current);
        break;
      case 'cdisperso':
        /**
         * Hacer en este bloque lo que corresponda a: Disperso
         */
        console.log('Selección -> Disperso', current);
        break;
      default:
    }
  });
});

// Dejo comentado este código por si reutilizarás

// let directo = document.querySelectorAll('.directo');
// let reactivo = document.querySelectorAll ('.reactivo');
// let disperso = document.querySelectorAll ('.disperso');

// document.getElementById('cdirecto').onclick = function (){
//     directo.forEach( function (directo) {
//         directo.classList.add('show');
//         directo.classList.remove('hide');
//     });
//
//     reactivo.forEach(function(reactivo){
//         reactivo.classList.remove('show');
//         reactivo.classList.add('hide');
//     });
//
//     disperso.forEach(function(disperso){
//         disperso.classList.remove('show');
//         disperso.classList.add('hide');
//
//     });
//
// }

// document.getElementById('creactivo').onclick = function (){
//     reactivo.forEach ( function (reactivo) {
//         reactivo.classList.remove('hide');
//         reactivo.classList.add('show');
//
//     });
//
//     directo.forEach (function (directo) {
//         directo.classList.remove('show');
//         directo.classList.add('hide');
//
//     });
//
//     disperso.forEach(function(disperso){
//         disperso.classList.remove('show');
//         disperso.classList.add('hide');
//
//     });
//
// }

// document.getElementById('cdisperso').onclick = function (){
//     disperso.forEach ( function (disperso) {
//         disperso.classList.remove('hide');
//         disperso.classList.add('show');
//     })
//
//     directo.forEach (function (directo) {
//         directo.classList.remove('show');
//         directo.classList.add('hide');
//
//     });
//
//     reactivo.forEach(function(reactivo){
//         reactivo.classList.remove('show');
//         reactivo.classList.add('hide');
//     });
//
// };
