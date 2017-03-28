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
		"<a href=\"port.html\">Portfolio</a>" +
		"<a href=\"contact.html\">Contact</a>" +
		"</div>" +
		"</nav>" +
		"<header></header>" +
		"<span class=\"headertxt\" id=\"logo\">xlldesigns</span>" +
		"<div id=\"openclosenav\">" +
		"<span class=\"headertxt\" id=\"menutxt\">menu</span>" +
		"<div id=\"menubutton\">" +
		"<div class=\"menulines\" id=\"menutopline\"></div>" +
		"<div class=\"menulines\" id=\"menumidline\"></div>" +
		"<div class=\"menulines\" id=\"menubotline\"></div>" +
		"</div>" +
		"</div>";

	/*Footer*/
	var foot = document.getElementById('foot');
	foot.innerHTML="<p>xlldesigns is a professional small business web design and development company. We help small business owners grow their business online. Get in touch with us today for a free consultation.</p>" +
	"<p>&copy; xlldesigns 2017 | All rights reserved</p>";
};

function click2contact(){
	var contact = document.getElementById('click2contact');
	
	contact.innerHTML = "<p><b>xlldesigns</b></p>" +
		"<p>phone: (818) 274-2532</p>" +
		"<p>email: <a href=\"mailto:lucascleric@hotmail.com\">lucascleric@hotmail.com</a>";
}