

$(document).ready(function(){

	$("#btn").click(function(){
		alert("Yes, its open the window");
	}); //using anonymous function

	//show and hide button

	$("#btn_show").click(function(){
		$("#btn_hide").show(5000);
	});

	$("#btn_hide").click(function(){
		$("#btn_hide").hide(5000);
	});

	$("#fadeout").click(function(){
		$(".data").fadeOut(5000);
	});

	$("#fadein").click(function(){
		$(".data").fadeIn(5000);
		$(".data").fadeTo(5000,1);
	});

	$("#fadeto").click(function(){
		$(".data").fadeTo(5000,0.5);
	});

	$("#fade_toggle").click(function(){
		$("p").fadeToggle(5000);
	});
	$("ul li:odd").addClass("odd");
	$("ul li:even").addClass("even");
	$("ul li:first").addClass("first");
	$("ul li:last").addClass("last");
	$("ul li:eq(3)").addClass("equal");

	$("#header_selector").click(function(){
		$(":header").fadeOut(3000);
	});

	$("#not_selector").click(function(){
		$(":header:not(:header:eq(3))").fadeOut(3000);
	});
	$("#contains_selector").click(function(){
		$(":header:contains('three')").fadeOut(5000);
	});

	$("#attribute").click(function(){
		$("a[title='Click One']").fadeOut(3000);
	});

	$(":input:password").css('border','2px solid gray');


});

$(document).ready(function(){

	$(".test").css('color', 'green');

	$(".test").click(function(){
		alert("Yes. This is test Alert");
	});
});