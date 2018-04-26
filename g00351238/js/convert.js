function fToM(){
var measure
var meters


  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure x 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
	console.log
  document.getElementbyId("resultsentence").innerHTML = message;

}

/*
function inchesToCent(){
var inches

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure x 2.54;
  var message2 = measure + ' inches converts to ' + centimetres + ' meters.';

  document.getElementbyId("resultsentence").innerHTML = message;

}

function yardsToMetres(){
var yards

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure x 0.9144;
  var message3 = measure + ' yards converts to ' + meters + ' meters.';

  document.getElementbyId("resultsentence").innerHTML = message;

}

function milesToKilometers(){
var kilometers
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure x 1.60934;
  var message4 = measure + ' miles converts to ' + kilometers + ' meters.';

  document.getElementbyId("resultsentence").innerHTML = message;

}

