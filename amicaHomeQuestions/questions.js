var questionText = document.querySelectorAll('.question > p');

var questions = [];
questionText.forEach(function(question) {
	// add question text to questions array
	questions.push(question.textContent);
});

 // get nodeList of textAreas and then save nodeList as an array of objects
var textAreas = Array.prototype.slice.call(document.querySelectorAll('textArea'));

// form submit event handler
$('form').submit(function(event){
	event.preventDefault();
	var html = '';
	var formData = ($(this).serializeArray()); // get form data array
	formData.forEach(function(entry, index){
		// add question, radio value and textarea value to html string
		html += "<div class='display'><p> " + questions[index] + "  " + entry.value.toUpperCase() + '</p>'
		html += "<p>" + textAreas[index].value + "</p></div>"; 
	})
	// display html string in display div
	$('#display').html(html); 
})
