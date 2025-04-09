/* This function below called initmap() has a variable called uluru. The latitude and longitude 
are defined so that it pinpoints to the specific location, in this case Leicester. initmap() is in 
global scope so that the callback for the google map api works.    */

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// jquery for the menu (fade in and fade out)
$(document).ready(function(){

$('#fadeOut').click(function(){
    $('#navbar').fadeOut(700);
  });

$('#fadeIn').click(function(){
    $('#navbar').fadeIn(700);
  }); 
});


//jquery for the loading animation
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut(3000);
});

$(window).on("load",function(){
  $(".loader").fadeOut(1500);
});











