$(function() {
  $("p").hide();
  $("#item").mouseenter(function(){
  	$("p").show();
  	$("#canvas").css("background", "rgba(118, 118, 118, 0.3)")
  });
  $("#item").mouseleave(function(){
  	$("p").hide();
  	$("#canvas").css("background", "none");
  });
});