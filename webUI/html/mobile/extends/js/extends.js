$(function() {
	var _htm = "";
	$(".lis").bind("click", function() {
		$(this).addClass("ext").siblings().removeClass("ext");
		$("#ifr_m").attr("src", $(this).attr("name"));
		var intervalIframe = setInterval(function() {
			var _htm = $("#ifr_m").contents().find("body").html();
			if (_htm != "") {
				$("#div_code").text(_htm).addClass("prettyprint linenums");
				$("#div_code").ready(prettyPrint());
				clearInterval(intervalIframe);
			}
		}, 200);

		//prettyPrint();
		//var t=$("#ifr_m").contents().find("body").html();
		//$("#ifr_m").load(function() {
		//alert(t);
		//});
		//$("#div_code").text(t);
	});
$(".lis:first-child").click();
	
//	$("#ifr_m").mouseover(function(){
//		$(this).attr("scrolling","yes");
//	
//	});
//	$("#ifr_m").mouseout(function(){
//		$(this).attr("scrolling","no");
//		
//	});
	
});