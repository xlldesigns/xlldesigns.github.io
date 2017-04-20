window.onload = function(){
	
	/*Turn On Javascript*/
	var turnonjs = document.getElementById("turnonjs");
	turnonjs.style.display = "none";

	/*Header-Menu*/
	var headermenu = document.getElementById("headermenu");
	headermenu.innerHTML="<div class=\"navdivs\" id=\"leftnav\"></div>" +
		"<div class=\"navdivs\" id=\"rightnav\"></div>" +
		"<nav>" +
		"<div id=\"navcenter\">" +
		"<a href=\"index.html\">About</a>" +
		"<a href=\"services.html\">Services</a>" +
		"<a href=\"process.html\">My Process</a>" +
		"<a href=\"port.html\">Portfolio</a>" +
		"<a href=\"contact.html\">Contact</a>" +
		"</div>" +
		"</nav>" +
		"<header></header>" +
		"<span class=\"headertxt\" id=\"logo\">xlldesigns</span>" +
		"<div id=\"openclosenav\" onclick=\"openclosenav();\">" +
		"<span class=\"headertxt\" id=\"menutxt\">menu</span>" +
		"<div id=\"menubutton\">" +
		"<div class=\"menulines\" id=\"menutopline\"></div>" +
		"<div class=\"menulines\" id=\"menumidline\"></div>" +
		"<div class=\"menulines\" id=\"menubotline\"></div>" +
		"</div>" +
		"</div>";

	/*Footer*/
	var foot = document.getElementById('foot');
	foot.innerHTML="<p>xlldesigns is a small business web site development<br/>and graphic design company by Lucas Cleric.<br/>I help business owners grow online as well as fulfill graphic needs.<br/><a href=\"contact.html\">Contact me</a> today for a free consultation!</p>" +
	"<p>Copyright&copy; xlldesigns 2017 | All rights reserved</p>";
};

/*Nav*/
function openclosenav(){
	if($("#leftnav").width() == 0){
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
			$("#logo").css("color","#8aa2ad");
		},500);
	};
}

/*Reset Contact Form*/
function formreset(){
	var input = document.getElementsByTagName("Input");
	for(var i=0;i<input.length;i++)
	input[i].checked = false;
	$(".formtoggles").hide();
}

/*Validate and Compile Email Me Form*/
function emailme(){
	
	/*Next Line in Email Body*/
	var nextline = "%0D%0A";
	
	/*Subject(s)*/
	var subweb = document.getElementById('subweb');
	var subgraphic = document.getElementById('subgraphic');
	var subquestion = document.getElementById('subquestion');
	var subcomment = document.getElementById('subcomment');
	var emailsubject = [];
	
	function createsub(sub){
		if(sub.checked){
			emailsubject.push(sub.value);
		}
	}
	createsub(subweb);
	createsub(subgraphic);
	createsub(subquestion);
	createsub(subcomment);
	
	/*Customer Info*/
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	
	/*Preferred Contact*/
	var preferredcontactmethod = "";
	if (document.getElementById('contbyphone').checked){
		preferredcontactmethod = "Preffered Contact Method: Phone"+ nextline;
	}
	if (document.getElementById('contbyemail').checked){
		preferredcontactmethod = "Preffered Contact Method: Email"+ nextline;
	}
	
	
	/*Existing Website?*/
	var webexist = "";
	var yesexistweb = document.getElementById('yesexistweb');
	var noexistweb = document.getElementById('noexistweb');
	if (yesexistweb.checked){
		webexist = "Existing Website?: Yes"+ nextline;
	}
	if (noexistweb.checked){
		webexist = "Existing Website?: No"+ nextline;
	}
	
	/*Current Website*/
	var currentweb = "";
	var currentwebinput = document.getElementById('currentweb');
	if(currentwebinput.value != ""){
		currentweb = "Current Website: " + currentwebinput.value + nextline;
	}
	
	/*Web Service Needed*/
	var webserv = "";
	var updateweb = document.getElementById('updateweb');
	var replaceweb = document.getElementById('replaceweb');
	var webdesignonly = document.getElementById('webdesignonly');
	var fullwebdesign = document.getElementById('fullwebdesign');
	if (updateweb.checked){
		webserv = "Service Needed: Update Existing Website"+ nextline;
	}
	if (replaceweb.checked){
		webserv = "Service Needed: Remove and Replace Existing Website"+ nextline;
	}
	if (webdesignonly.checked){
		webserv = "Service Needed: Web Design Only"+ nextline;
	}
	if (fullwebdesign.checked){
		webserv = "Service Needed: Full Web Design and Development"+ nextline;
	}
	
	/*Number of Website Pages*/
	var webpages = "";
	var onepage = document.getElementById('1page');
	var fourpage = document.getElementById('4page');
	var tenpage = document.getElementById('10page');
	if (onepage.checked){
		webserv = "Approximate Number of Website Pages Needed: 1-3"+ nextline;
	}
	if (fourpage.checked){
		webserv = "Approximate Number of Website Pages Needed: 4-10"+ nextline;
	}
	if (tenpage.checked){
		webserv = "Approximate Number of Website Pages Needed: More than 10"+ nextline;
	}
	
	/*Website Details*/
	var websitedetails = "";
	var websitedetailsinput = document.getElementById('websitedetails');
	if(websitedetailsinput.value != ""){
		websitedetails = "Website Details: " + websitedetailsinput.value + nextline + nextline;
	}
	
	/*Graphic Design Needs*/
	var gdserv = "";
	var gdarray = [];
	var gd = document.getElementById('gd');
	var logodes = document.getElementById('logodes');
	var photoman = document.getElementById('photoman');
	var bannerdes = document.getElementById('bannerdes');
	var shirtdes = document.getElementById('shirtdes');
	var otherdes = document.getElementById('otherdes');
	if(gd.checked){
		var gd = "Graphic Design";
		gdarray.push(gd);
	}
	if(logodes.checked){
		var gd = "Logo Design";
		gdarray.push(gd);
	}
	if(photoman.checked){
		var gd = "Photo Manipulation";
		gdarray.push(gd);
	}
	if(bannerdes.checked){
		var gd = "Banner Design";
		gdarray.push(gd);
	}
	if(shirtdes.checked){
		var gd = "Shirt Design";
		gdarray.push(gd);
	}
	if(otherdes.checked){
		var gd = "Other";
		gdarray.push(gd);
	}
	if(gdarray[0] != undefined){
		gdserv = "Graphic Service Need(s):" + gdarray.toString() + nextline;
	}
	
	/*Design Details*/
	var designdetails = "";
	var designdetailsinput = document.getElementById('designdetails');
	if(designdetailsinput.value != ""){
		designdetails = "Design Details: " + designdetailsinput.value + nextline + nextline;
	}
	
	/*Question*/
	var question = "";
	var questioninput = document.getElementById('question');
	if(questioninput.value != ""){
		question = "Question: " + questioninput.value + nextline + nextline;
	}
	
	/*Comment*/
	var comment = "";
	var commentinput = document.getElementById('comment');
	if(commentinput.value != ""){
		comment = "Comment: " + commentinput.value + nextline;
	}
	
	/*Email Body*/
	var emailbody = "First Name: " + firstname + nextline +
					"Last Name: " + lastname + nextline +
					"Phone Number: " + phone + nextline +
					"Email: " + email + nextline +
					preferredcontactmethod + nextline +
					webexist +
					currentweb +
					webserv +
					webpages +
					websitedetails +
					gdserv +
					designdetails +
					question +
					comment
					;
	
	
	/*Verify Data*/
	/*Verify Customer Info*/
	if(firstname==""){
		alert("Please provide your first name");
		return false;
	}else if(email==""){
		alert("Please provide your email");
		return false;
	}else if(subweb.checked==false && subgraphic.checked==false && subquestion.checked==false && subcomment.checked==false){
		alert("Please select a subject");
		return false;
	
	/*Verify Website Input*/
	}else if(subweb.checked && yesexistweb.checked == false && noexistweb.checked == false){
		alert("Please let me know if you have an existing website");
		return false;
	}else if(subweb.checked && yesexistweb.checked && currentwebinput.value==""){
		alert("Please provide your current website url");
		return false;
	}else if(subweb.checked && yesexistweb.checked && updateweb.checked==false && replaceweb.checked==false){
		alert("Please let me know what kind of website service you would like");
		return false;
	}else if(subweb.checked && yesexistweb.checked && websitedetailsinput.value==""){
		alert("Please provide a few details for the service you would like");
		return false;
	}else if(subweb.checked && noexistweb.checked && webdesignonly.checked==false && fullwebdesign.checked==false){
		alert("Please let me know what kind of service you need");
		return false;
	}else if(subweb.checked && noexistweb.checked && onepage.checked==false && fourpage.checked==false && tenpage.checked==false){
		alert("Please let me know what kind of service you need");
		return false;
	}else if(subweb.checked && noexistweb.checked && websitedetailsinput.value==""){
		alert("Please provide a few details for the website service you would like");
		return false;
	
	/*Verify Graphic Design Input*/
	}else if(subgraphic.checked && gd.checked==false && logodes.checked==false && photoman.checked==false && bannerdes.checked==false && shirtdes.checked==false && otherdes.checked==false){
		alert("Please select a graphic service you would like");
		return false;
	}else if(subgraphic.checked && designdetailsinput.value==""){
		alert("Please provide a few details for the graphic service you would like");
		return false;
	
	/*Verify Question*/
	}else if(subquestion.checked && questioninput.value==""){
		alert("Please provide your question");
		return false;
	
	/*Verify Comment*/
	}else if(subcomment.checked && commentinput.value==""){
		alert("Please provide your comment");
		return false;
	
	/*Generate Email*/
	}else{
		window.location.href = "mailto:xlldesigns2017@gmail.com?subject="+emailsubject+"&body="+emailbody;
		return false;
	}
}

$(document).ready(function(){
	
	/*Email Me Form*/
	
	/*Clear Inputs*/
	
	var input = document.getElementsByTagName("Input");
	for(var i=0;i<input.length;i++)
	input[i].checked = false;
	$(".formtoggles").hide();
	
	/*Web*/
	function existingweb(){
		if(document.getElementById('yesexistweb').checked){
			$("#web_current").show();
			$("#web_details").show();
			$("#web_new").hide();
		}else{
			$("#web_new").show();
			$("#web_details").show();
			$("#web_current").hide();
		}
	}
	
	$("#subweb").click(function(){
		$("#web_existweb").toggle();
		$("#web_new").hide();
		$("#web_details").hide();
		$("#web_current").hide();
		var webinputs = document.getElementsByClassName('webinputs');
		for(var i=0;i<webinputs.length;i++)
		webinputs[i].checked = false;
	});
	
	$("#yesexistweb").click(function(){
		existingweb();
	});
	$("#noexistweb").click(function(){
		existingweb();
	});
	
	
	
	/*Graphic*/
	$("#subgraphic").click(function(){
		$("#graphicdata").toggle();
	});
	
	/*Question*/
	$("#subquestion").click(function(){
		$("#questiondata").toggle();
	});
	
	/*Comment*/
	$("#subcomment").click(function(){
		$("#commentdata").toggle();
	});
	
	
	/*Portfolio Modal*/
	$("#gportwrapper img").click(function(){
		$("#modalbg").css({"width":"100%","height":"100%"});
		$("#modal").show(0);
		$("#modcontent").html($(this).attr("value"));
		$("#modimg").attr("src",this.src)
	});
	$("#close").click(function(){
		$("#modalbg").css({"width":"0%","height":"0%"});
		$("#modal").hide(0);
	});
	
});
