var appSelector = 'mycph';
var app = document.getElementById(appSelector);

// CREATE A HEADING
var heading = document.createElement("div");

// CREATE THE SEARCH FIELD
var search = document.createElement('input');
search.type = 'text';
search.className = 'search'

// CREATE THE SUBMIT BUTTON
var submit = document.createElement('input');
submit.type = 'button';
submit.value = 'submit'

// ADD ABOVE ELEMENTS INTO THE HEADING
heading.appendChild(search);
heading.appendChild(submit);

// ADD THE HEADING INTO THE APP ELEMENT
app.appendChild(heading);
