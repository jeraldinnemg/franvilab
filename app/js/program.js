// 1. Select according to the process duration
 //Bring elements to the DOM (duration values + input duration). 
 // Each dye machine has different process with unique duration ("id")

const selectUgo = document.getElementById('proceso_ugo');
const selectRapi = document.getElementById('proceso_rapi');
const selectEco = document.getElementById('proceso_eco');

const durationUgo = document.querySelector('.dur_ugo')
const durationRapi = document.querySelector('.dur_rapi')
const durationEco = document.querySelector('.dur_eco')


// 2. Function to show the duration according to the process selected
selectUgo.onchange = function() {
  const durValue1 = this.value;
  durationUgo.value = durValue1;
};

 
selectRapi.onchange = function() {
  const durValue2 = this.value;
  durationRapi.value = durValue2;
};

 
selectEco.onchange = function() {
  const durValue3 = this.value;
  durationEco.value = durValue3;
};


// 3. Function to show the Final Hour of the process (Sum H.Incio + Duration + Delay)

//UGOLINI 
const horaFinUgo =  document.querySelector('.fin_ugo');

function addTimes () {
const initUgo = document.getElementById("init_ugo").value; //H.Inicio = initUgo
const durUgo = document.getElementById("dur_ugo").value; //Duración = durUgo
const delayUgo  = document.getElementById("delay_ugo").value; // Retrado = delUgo

// Declare the array
  let times = [ 0, 0, 0 ]
  let max = times.length

  // Split to operate minutes an hours
  let a = (initUgo || '').split(':')
  let b = (durUgo || '').split(':')
  let c = (delayUgo || '').split(':')

  // Normalize time values to an integer
  for (let i = 0; i < max; i++) {
    a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
    b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    c[i] = isNaN(parseInt(c[i])) ? 0 : parseInt(c[i])
  }

 // Store time values
  for (let i = 0; i < max; i++) {
    times[i] = a[i] + b[i] + c[i] 
  }

  let hours = times[0]
  let minutes = times[1]

  if (minutes >= 60) {
    let h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h

  }

  horaFinUgo.value = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) 
} 


//RAPID
const horaFinRapi =  document.querySelector('.fin_rapi');

function addTimes2 () {

const initRapi = document.getElementById("init_rapi").value; //H.Inicio = initUgo
const durRapi = document.getElementById("dur_rapi").value; //Duración = durUgo
const delayRapi  = document.getElementById("delay_rapi").value; // Retrado = delUgo

// Declare the array
  let times = [ 0, 0, 0 ]
  let max = times.length


  // Split to operate minutes an hours
  let x = (initRapi || '').split(':')
  let y = (durRapi || '').split(':')
  let z = (delayRapi || '').split(':')

  // Normalize time values to an integer
  for (let i = 0; i < max; i++) {
    x[i] = isNaN(parseInt(x[i])) ? 0 : parseInt(x[i])
    y[i] = isNaN(parseInt(y[i])) ? 0 : parseInt(y[i])
    z[i] = isNaN(parseInt(z[i])) ? 0 : parseInt(z[i])
  }

 // Store time values
  for (let i = 0; i < max; i++) {
    times[i] = x[i] + y[i] + z[i] 
  }

  let hours = times[0]
  let minutes = times[1]

  if (minutes >= 60) {
    let h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h

  }

  horaFinRapi.value = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) 
} 

// ECODYER 
const horaFinEco =  document.querySelector('.fin_eco');

function addTimes3 () {

const initEco = document.getElementById("init_eco").value; //H.Inicio = initUgo
const durEco = document.getElementById("dur_eco").value; //Duración = durUgo
const delayEco  = document.getElementById("delay_eco").value; // Retrado = delUgo

// Declare the array
  let times = [ 0, 0, 0 ]
  let max = times.length


  // Split to operate minutes an hours
  let j = (initEco || '').split(':')
  let q = (durEco || '').split(':')
  let k = (delayEco || '').split(':')

  // Normalize time values to an integer
  for (let i = 0; i < max; i++) {
    j[i] = isNaN(parseInt(j[i])) ? 0 : parseInt(j[i])
    q[i] = isNaN(parseInt(q[i])) ? 0 : parseInt(q[i])
    k[i] = isNaN(parseInt(k[i])) ? 0 : parseInt(k[i])
  }

 // Store time values
  for (let i = 0; i < max; i++) {
    times[i] = j[i] + q[i] + k[i] 
  }

  let hours = times[0]
  let minutes = times[1]

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h

  }

  horaFinEco.value = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) 
} 