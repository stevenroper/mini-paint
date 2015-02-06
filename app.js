$(document).ready(function() {
	
	var color = 'white';
	var colors = 'red green blue yellow white';
	var drawing = false;

	// $('.box').on('click', function() {
	// 	$(this).addClass(color);
	// });

	$('.box').dblclick(function() {
		$(this).removeClass(colors);
	});

	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	});

	$('#red').on('click', function() {
		color = 'red';
	});

	$('#green').on('click', function() {
		color = 'green';
	});

	$('#blue').on('click', function() {
		color = 'blue';
	});

	$('#yellow').on('click', function() {
		color = 'yellow';
	});

	$('#white').on('click', function() {
		color = 'white';
	});

	//Allows for clicking and "dragging" to draw
	$('.box').on('mouseenter', function() {
		if(drawing) {
			$(this).addClass(color);
			$('.box').on('click', function() {
				drawing = false;
			});
		} else {
			$('.box').on('click', function() {
				drawing = true;
				$(this).addClass(color);
			});
		}
	});

});