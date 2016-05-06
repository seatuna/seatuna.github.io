'use strict';

let wakeupBbt = function(){
  $.ajax({
    url: 'https://tranquil-basin-77065.herokuapp.com/drinks',
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    console.log('Hit bubble tea server');
  });
};

let wakeupVmatch = function(){
  $.ajax({
    url: 'https://vmatch.herokuapp.com/players',
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    console.log('Hit vmatch server');
  });
};

$(document).ready(function() {
  wakeupBbt();
  wakeupVmatch();
});
