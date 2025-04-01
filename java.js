
'use strict';

window.addEventListener('load', function () {
  var button = document.getElementById('personnage');

  button.addEventListener('click', addAlert);
});

function addAlert() {
    var example = document.getElementById('Lper');
    var template = document.getElementById('alert-template').innerHTML;
  
    example.innerHTML = template;
}