$(document).ready(function(){
	$("#btnPaint").click(function(){

		var numbersToPaint = $("#numbersToPaint").val();

		numbersToPaint = numbersToPaint.split(",");

		console.log(numbersToPaint);

		for(var i = 0; i<numbersToPaint.length; i++){
			$("td:eq("+(numbersToPaint[i]-1)+")").css("background-color","black");
		}

	});

	$("#btnReset").click(function(){
		$("td").css("background-color","white");
	});
});