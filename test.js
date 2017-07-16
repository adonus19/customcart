window.changeText2 = function() {};

$(document).ready(function() {
	window.changeText2 = function() {
		var list = document.getElementById('addItem');
		var item = document.getElementById('item').value;
		var entry = document.createElement('option');
		entry.appendChild(document.createTextNode(item));
		list.appendChild(entry);
		var currentSize = $('#addItem').attr('size');
		$('#addItem').attr('size', ++currentSize);
	};

	$('#reset-button').click(function() {
		$('input', '#cblist').not('button, submit, reset, hidden').val('').removeAttr('checked').removeAttr('selected');
		$('#cblist').empty();
	});

	$('#push2list').click(function() {
		$('#addItem option:selected').each(function(index, element) {
			addCheckbox($(element).text());
			$('#cblist').append($('<br/>'));
		});
	});

	function addCheckbox(name) {
		var container = $('#cblist');
		var inputs = container.find('input');
		$('<input />', { type: 'checkbox', id: 'cb', value: name }).appendTo(container);
		$('<label />', { for: 'cb', text: name }).appendTo(container);
	}
});
