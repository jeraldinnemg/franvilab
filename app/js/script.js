
let directo = document.querySelectorAll('.directo');
let reactivo = document.querySelectorAll ('.reactivo');
let disperso = document.querySelectorAll ('.disperso');

//console.log(directo);
//console.log(reactivo);
//console.log(disperso);

document.getElementById('cdirecto').onclick = function (){
    directo.forEach( function (directo) {
        directo.classList.add('show');
        directo.classList.remove('hide');
    });
    
    reactivo.forEach(function(reactivo){
        reactivo.classList.remove('show');
        reactivo.classList.add('hide');
    });
    
    disperso.forEach(function(disperso){
        disperso.classList.remove('show');
        disperso.classList.add('hide');

    });
    
}


document.getElementById('creactivo').onclick = function (){
    reactivo.forEach ( function (reactivo) {
        reactivo.classList.remove('hide');
        reactivo.classList.add('show');

    });

    directo.forEach (function (directo) {
        directo.classList.remove('show');
        directo.classList.add('hide');

    });

    disperso.forEach(function(disperso){
        disperso.classList.remove('show');
        disperso.classList.add('hide');

    });
    
}



document.getElementById('cdisperso').onclick = function (){
    disperso.forEach ( function (disperso) {
        disperso.classList.remove('hide');
        disperso.classList.add('show');
    })

    directo.forEach (function (directo) {
        directo.classList.remove('show');
        directo.classList.add('hide');

    });

    reactivo.forEach(function(reactivo){
        reactivo.classList.remove('show');
        reactivo.classList.add('hide');
    });
    
};

