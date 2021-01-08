//Instructions
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// Retrive data form data.js 

var DataForApp=data;

var $tbody = document.querySelector("tbody");

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

Table()

// Create array with unique labels 
var Cities=[];
var States=[];
var Countries=[];
var Saphes=[];
var Dates=[];

for (var k=0; k<DataForApp.length; k++){
  let city_k=DataForApp[k]['city'];
  let state_k=DataForApp[k]['state'];
  let country_k=DataForApp[k]['country'];
  let shape_k=DataForApp[k]['shape'];
  let dates_k=DataForApp[k]['datetime'];
  
  Cities.push(city_k);
  States.push(state_k);
  Countries.push(country_k);
  Saphes.push(shape_k);
  Dates.push(dates_k)
};

// Unique values in array

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

//****************Select by country******************************************** */
// Add listener when select country
document.getElementById("Country_select").addEventListener("click", CountryFuntion)

//Build the selector
// List aviable For Countries
var array_countries=Countries.filter(onlyUnique).sort()  
// Get dropdown element
var dropdown_country = document.getElementById("Country_select");

// Loop through the array for countries
for (var i = 0; i < array_countries.length; ++i) {
    // Append the element to the end of Array list
    dropdown_country[dropdown_country.length] = new Option(array_countries[i], array_countries[i]);
}

//User selection for country
var $UserCountryInput=document.querySelector("#country");

//Filter information with the selection of user
function SerchCountry(event) {
  var filterCountry=$UserCountryInput.value.trim();

  if (filterCountry != "") {
    DataForApp = data.filter(function (data) {
      var dataCountry = data.country;
      return dataCountry === filterCountry;
    });
  
};
Table();
  }

  //Selection and filter
  function CountryFuntion(){
    var country_list = document.getElementById("Country_select")
    document.getElementById("country").value=country_list.options[country_list.selectedIndex].value;
    SerchCountry()
  }
//*************************************************************************************************************** */  

//****************Select by Date******************************************** */
// Add listener when select date
document.getElementById("Date_select").addEventListener("click", DateFuntion)

//Build the selector
// List aviable For dates
var array_dates=Dates.filter(onlyUnique).sort()    
// Get dropdown element
var dropdown_date = document.getElementById("Date_select");

// Loop through the array for dates
for (var i = 0; i < array_dates.length; ++i) {
    // Append the element to the end of Array list
    dropdown_date[dropdown_date.length] = new Option(array_dates[i], array_dates[i]);
}

//User selection for dates
var $UserDateInput=document.querySelector("#datetime");

//Filter information with the selection of user
function SerchDate(event) {
  var filterDate=$UserDateInput.value.trim();

  if (filterDate != "") {
    DataForApp = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
  
};
Table();
  }

  //Selection and filter
  function DateFuntion(){
    var date_list = document.getElementById("Date_select")
    document.getElementById("datetime").value=date_list.options[date_list.selectedIndex].value;
    SerchDate()
  }
//*************************************************************************************************************** */ 

//****************Select by City******************************************** */
// Add listener when select City
document.getElementById("City_select").addEventListener("click", CityFuntion)

//Build the selector
// List aviable For dates
var array_cities=Cities.filter(onlyUnique).sort()    
// Get dropdown element
var dropdown_city = document.getElementById("City_select");

// Loop through the array for cities
for (var i = 0; i < array_cities.length; ++i) {
    // Append the element to the end of Array list
    dropdown_city[dropdown_city.length] = new Option(array_cities[i], array_cities[i]);
}

//User selection for dates
var $UserCityInput=document.querySelector("#city");

//Filter information with the selection of user
function SerchCity(event) {
  var filterCity=$UserCityInput.value.trim();

  if (filterCity != "") {
    DataForApp = data.filter(function (data) {
      var dataCity = data.city;
      return dataCity === filterCity;
    });
  
};
Table();
  }

  //Selection and filter
  function CityFuntion(){
    var city_list = document.getElementById("City_select")
    document.getElementById("city").value=city_list.options[city_list.selectedIndex].value;
    SerchCity()
  }
//*

//****************Select by State******************************************** */
// Add listener when select City
document.getElementById("State_select").addEventListener("click", StateFuntion)

//Build the selector
// List aviable For state
var array_states=States.filter(onlyUnique).sort()    
// Get dropdown element
var dropdown_state = document.getElementById("State_select");

// Loop through the array for states
for (var i = 0; i < array_states.length; ++i) {
    // Append the element to the end of Array list
    dropdown_state[dropdown_state.length] = new Option(array_states[i], array_states[i]);
}

//User selection for dates
var $UserStateInput=document.querySelector("#state");

//Filter information with the selection of user
function SerchState(event) {
  var filterState=$UserStateInput.value.trim();

  if (filterState != "") {
    DataForApp = data.filter(function (data) {
      var dataState = data.state;
      return dataState === filterState;
    });
  
};
Table();
  }

  //Selection and filter
  function StateFuntion(){
    var state_list = document.getElementById("State_select")
    document.getElementById("state").value=state_list.options[state_list.selectedIndex].value;
    SerchState()
  }
//*

//****************Select by Shape******************************************** */
// Add listener when select Shape
document.getElementById("Shape_select").addEventListener("click", ShapeFuntion)

//Build the selector
// List aviable For state
var array_shapes=Saphes.filter(onlyUnique).sort()    
// Get dropdown element
var dropdown_shape = document.getElementById("Shape_select");

// Loop through the array for states
for (var i = 0; i < array_shapes.length; ++i) {
    // Append the element to the end of Array list
    dropdown_shape[dropdown_shape.length] = new Option(array_shapes[i], array_shapes[i]);
}

//User selection for dates
var $UserShapeInput=document.querySelector("#shape");

//Filter information with the selection of user
function SerchShape(event) {
  var filterShape=$UserShapeInput.value.trim();

  if (filterShape != "") {
    DataForApp = data.filter(function (data) {
      var dataShape = data.shape;
      return dataShape === filterShape;
    });
  
};
Table();
  }

  //Selection and filter
  function ShapeFuntion(){
    var shape_list = document.getElementById("Shape_select")
    document.getElementById("shape").value=shape_list.options[shape_list.selectedIndex].value;
    SerchShape()
  }
//*

