$(document).ready(function(){
  $.getJSON('http://ipinfo.io', function(data){
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=c804a18bf3ddca13b347738ba07a1640&q='+data.city, function(info){
      $("#temp").html(info.main.temp);
      $("#loc").html(info.name);
      $("#weather").html(info.weather[0].main);
    });
  });
})
