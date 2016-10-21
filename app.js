$(document).ready(function(){
  $.getJSON('http://ipinfo.io', function(data){
  console.log(data);
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=c804a18bf3ddca13b347738ba07a1640&q='+data.city, function(info){
      console.log(info);
      console.log(info.main.temp);
    });
  });
})
