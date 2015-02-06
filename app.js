$(document).ready(function() {
	
	var color = 'white';
	var colors = 'red green blue yellow white';

	$('.box').on('click', function() {
		$(this).addClass(color);
	});

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

	$('.box').on('mousedown', function() {
		$('.box').hover(function() {
			$(this).addClass(color);
		});
		$('.box').on('mouseup', function() {
			$('.box').hover(function() {});
		});
	});


});