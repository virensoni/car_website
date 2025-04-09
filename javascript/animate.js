// jquery animation for moving car

$(document).ready(function(){

  //variables
  $surface=$('.surface');
  $car=$('.car');
  $img=$('.car img');
  
  

  const cars = ['./images/lambo_animation.png','./images/porsche_animation.png','./images/ferrari_animation.png','./images/mclaren_animation.png'];
  var size = cars.length;

  // this will make the car stop
  $(document).on('keypress',function(e) {
    if (e.which == 13){
      $($surface).toggleClass('moveRight');
      $($car).toggleClass('suspension');
    }
  })

  //this will change the car - math.random generates a number between 0 and 1 and math.floor rounds that number
  $(document).on('keypress',function(e){
    if (e.which == 119) {
      var x = Math.floor(size*Math.random());
      $img.attr('src',cars[x]);
    }
  })

  });