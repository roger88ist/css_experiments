$(function() {
  $("p").hide();
  $("#item").mouseenter(function(){
  	$("p").show();
  });
  $("#item").mouseleave(function(){
  	$("p").hide();
  });
});