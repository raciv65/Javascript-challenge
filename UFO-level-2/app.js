//Instructions
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Retrive data form data.js 

var DataForApp=data;


// Create array with unique labels 
var Cities=[];
var States=[];
var Countries=[];
var Saphes=[];

for (var k=0; k<DataForApp.length; k++){
  let city_k=DataForApp[k]['city'];
  let state_k=DataForApp[k]['state'];
  let country_k=DataForApp[k]['country'];
  let shape_k=DataForApp[k]['shape'];
  
  Cities.push(city_k);
  States.push(state_k);
  Countries.push(country_k);
  Saphes.push(shape_k);
};

// Unique values in array

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


// List aviable For Countries
var array_countries=Countries.filter(onlyUnique)  
// Get dropdown element
var dropdown_country = document.getElementById("Country_select");

// Loop through the array for countries
for (var i = 0; i < array_countries.length; ++i) {
    // Append the element to the end of Array list
    dropdown_country[dropdown_country.length] = new Option(array_countries[i], array_countries[i]);
}

function CountryFuntion(){
  var country_list = document.getElementById("Country_select")
  document.getElementById("country").value=country_list.options[country_list.selectedIndex].value;
  
}

document.getElementById("Country_select").addEventListener("click", CountryFuntion)






// Retive user date for search as objects
var $tbody = document.querySelector("tbody");
var $UserDateInput = document.querySelector("#datetime");
var $SearchBtn = document.querySelector("#filter-btn");

var $UserCountryInput=document.querySelector("#country");



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
  var filterCountry=$UserCountryInput.value.trim();

  if (filterCountry != "") {
    DataForApp = data.filter(function (data) {
      var dataCountry = data.country;
      return dataCountry === filterCountry;
    });
  
};




Table();
  }

// Show table complete
Table();






