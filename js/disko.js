$(document).ready(function () {

    $("body").fadeIn(1000);

   $("img").mouseenter(function () {
       $("h1").fadeIn(1000);
   }).mouseleave(function () {
       $("h1").fadeOut();
   })
});