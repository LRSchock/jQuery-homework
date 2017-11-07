$(document).ready(
   function(){
     alert('The document is ready!');

$("h1").fadeOut(1000);

$(".purplebox").delay(2000).slideUp(2000).slideDown(2000);

$(".bluebox").slideUp(1000);

$(".orangebox").animate( {  opacity: 0.25,  width: "70%"} , 2000 );

$(".pinkbox").click(function() {
  alert("You clicked the pink box!");
});

$(".greenbox").show( function(){
  $(".greenbox").animate( {opacity: .25}
  )})

  $(".redbox").fadeIn(3000, function() {
    $(".redbox").fadeOut(1000);
  });

  }
)
