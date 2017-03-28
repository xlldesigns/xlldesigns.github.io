$(document).ready(function(){
	
	/*Nav Menu*/
	var navmenu = "open";
	$('#openclosenav').click(function(){
		if(navmenu == "open"){
			$("#logo").css("color","white");
			$(".menulines").css({"margin":"0px","position":"relative"});
			$("#menutopline").css({"transform":"rotate(45deg)","top":"17px"});
			$("#menumidline").css("display","none");
			$("#menubotline").css({"transform":"rotate(-45deg)","top":"11px"});
			$(".navdivs").css("width","50%");
			$("nav").delay(500).fadeIn(500);
			navmenu = "close";
		}else{
			$(".menulines").css({"margin":"5px 0px","position":"static"});
			$("#menutopline").css({"transform":"rotate(0deg)","top":"0px"});
			$("#menumidline").css("display","block");
			$("#menubotline").css({"transform":"rotate(0deg)","top":"0px"});
			$("nav").fadeOut(500);
			navmenu = "open";
			setTimeout( function(){
				$(".navdivs").css("width","0%");
				$("#logo").css("color","#1ab2bb");
			},500);
		};
	});

});