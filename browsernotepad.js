
var squaresPerRow = 20;

$(document).ready(function(){	
	createGrid(squaresPerRow,"black");
});


$(".clear").click(function(){
	$(".square").css({
		"background-color":"#E8E8E8", 
		"opacity":"1"});

});


$(".black").click(function(){
	updateGrid("black");	
});
$(".trail").click(function(){
	updateGrid("trail");
});


function createGrid(numSquares,option) {
	
	
	$grid = $('.grid');
	for(var i  = 0; i < numSquares * numSquares; i++)
	{		
		$grid.append("<div class='square'></div>");			
	}

	

	var width = ($(".container").width())/ squaresPerRow;  
	$(".square").css({"width":width ,"height":width});	


	if (option === "trail")
	{
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo('fast', 1);
		});


	}
	else {
		
		$(".square").mouseenter(function(){
		$(this).css("background-color", "black");
		});
	}
	
};


function updateGrid(option){

	$(".square").remove();


	squaresPerRow = parseInt(prompt("Introduce un numero de cuadros (1-64): ",50),10);
	if (squaresPerRow > 0 && squaresPerRow <= 64)
	{

		createGrid(squaresPerRow, option);	
	}
	else
	{
		alert("No, 'tas loco. Intenta de nuevo");
	}	

}


