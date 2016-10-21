$(document).ready(function(){
  $.getJSON('http://ipinfo.io', function(data){
    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?APPID=c804a18bf3ddca13b347738ba07a1640";
    var city = '&q=' + data.city;
    var metric = '&units=metric';
    var imperial = '&units=imperial';

    $.getJSON(weatherAPI+city+imperial, function(info){
      $("#temp").html(info.main.temp);
      $("#loc").html(info.name);
      $("#weather").html('<img src="http://openweathermap.org/img/w/' + info.weather[0].icon + '.png" />');
    });

    $('#degree').on('click', function(){
      if ($('#degree').html() == 'F') {
        $.getJSON(weatherAPI+city+metric, function(info){
          $("#temp").html(info.main.temp);
          $("#loc").html(info.name);
          $("#weather").html('<img src="http://openweathermap.org/img/w/' + info.weather[0].icon + '.png " />');
        });
        $('#degree').html("C");
      } else {
        $.getJSON(weatherAPI+city+imperial, function(info){
          $("#temp").html(info.main.temp);
          $("#loc").html(info.name);
          $("#weather").html('<img src="http://openweathermap.org/img/w/' + info.weather[0].icon + '.png " />');
        });
        $('#degree').html("F");
      }
    });
  });
})
