// JavaScript Document
$.noConflict();
jQuery(document).ready(function($){
	$("ButtonForward").click(function(){
		$.post("demo.php",
		{
		  name:"Donald Duck",
		  city:"Duckburg"
		}, function(data,status){
		  alert("Data: " + data + "\nStatus: " + status);
		});
	});

	
	/*
	$("#camerasnaps").get(function(){
    	$(this).hide();
		//$(this).replaceWith();
		// In case of error in updating the Camera snapshot
	//$("figcaption").append("<p>Error in receiving image. Updating Again.</p>");
  	});
	
	//$("p.update").context(function(){});
	
	$("button.ButtonForward").click(function(){
		//$(this).post();
			
	});
	$("button.ButtonLeft").click(function(){
		//$(this).post();
			
	});
	$("button.ButtonRight").click(function(){
		//$(this).post();
			
	});
	$("button.ButtonBackward").click(function(){
		//$(this).post();
			
	});
	
	$.get("update.xml",function(data,status){
		var message = "";
		
		$("p.update").text(message);
		$("#result").html("<p>Message sent, Status: "+status+"</p>");
	});
	
	
/*	
	//LOad element externally $("#div1").load("demo_test.txt");

Get update from server 
$.get(URL,callback);
The required URL parameter specifies the URL you wish to request.
The optional callback parameter is the name of a function to be executed if the request succeeds.
*/
});