var list = document.getElementById('addItem');

function changeText2() {
	var item = document.getElementById("item").value;
	var entry = document.createElement("option");
	entry.appendChild(document.createTextNode(item));
	list.appendChild(entry);
	var currentSize = $("#addItem").attr("size");
    currentSize++;
    $("#addItem").attr("size", currentSize);
}

$('#reset-button').click(function() {
	$(':input', '#cblist')
	.not(':button, :submit, :reset, :hidden')
	.val('')
	.removeAttr('checked')
	.removeAttr('selected');

	$("#cblist").empty();
});

$(document).ready(function() {
 
	$('#push2list').click(function(){
		$('#addItem option:selected').each( function() {
			$('#checklist').append("<input value='"+$(this).val()+"'>"+$(this).text()+"</input>");
			addCheckbox($('#addItem').val());
			$('#cblist').append($('<span />'));			
			$('#cblist').append($('<br/>'));
		});
	});

	function addCheckbox(name) {
		var container = $('#cblist');
		var inputs = container.find('input');

		$('<input />', {type: 'checkbox', id: 'cb', value: name }).appendTo(container);
		$('<label />', {'for': 'cb', text: name }).appendTo(container);
	}
});

/* use below to give function to reset button...somehow

	$('#btn-remove').click(function(){
		$('#select-to option:selected').each( function() {
			$('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
			$(this).remove();
		});
	});

*/


/* Doesn't work
function add2list() {
	var itm = document.getElementById("addItem").lastChild;
	var cln = itm.cloneNode(true);
	document.getElementById("checklist").appendChild(cln);
}
*/