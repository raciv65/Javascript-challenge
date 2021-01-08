console.log('ok')

//Instructions
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Retrive data form data.js 

var DataForApp=data;

// Retive user date for search as objects
var $tbody = document.querySelector("tbody");
var $UserDateInput = document.querySelector("#datetime");
var $SearchBtn = document.querySelector("#filter-btn");

// When clik filter button
$SearchBtn.addEventListener("click", SerchDate);

// Table with data in the body of html
function Table() {
  $tbody.innerHTML = "";
  for (var i = 0; i < DataForApp.length; i++) {
    //Data without filter
    var data = DataForApp[i];
    var fields = Object.keys(data); //Keys of data: datatime, city, state, country, shape, etc
    // set row of the data
    var $row = $tbody.insertRow(i);
    // For ech row fill cell without filter
        for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
        }
  }
}

//Filter information with the date of user
function SerchDate(event) {

  var filterDate = $UserDateInput.value.trim();
  if (filterDate != "") {
    DataForApp = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
};
Table();
  }

// Show table complete
Table();