$(function() {
  $("p").hide();
  $(".first").mouseenter(function(){
  	$(".first p").show();
  	$(".first #canvas").css("background", "rgba(118, 118, 118, 0.3)")
  });
  $(".first").mouseleave(function(){
  	$(".first p").hide();
  	$(".first #canvas").css("background", "none");
  });
  $(".second").mouseenter(function(){
  	$(".second p").show();
  	$(".second #canvas").css("background", "rgba(118, 118, 118, 0.3)")
  });
  $(".second").mouseleave(function(){
  	$(".second p").hide();
  	$(".second #canvas").css("background", "none");
  });
});