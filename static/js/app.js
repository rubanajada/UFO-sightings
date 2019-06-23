// Assign the data from `data.js` to a descriptive variable

var tableData = data;

var tbody = d3.select("tbody");

// using Object.entries to get key, value data inside of the table and loop through them to add to the table in html
function UFOsighting(data) {
    tbody.text("")
    data.forEach((sighting)=>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    
    });
})};

UFOsighting(tableData)

// Select the submit button
var submit= d3.select("#filter-btn");

// Select the input element and get the raw HTML node
var inputelement=d3.select("#datetime");

// filter data with date that the user inputs
function buttonClick() {
// Prevent the page from refreshing
  d3.event.preventDefault();
  console.log(inputelement.property("value"));
  var filteredData = tableData.filter(sighting=>sighting.datetime===inputelement.property("value"))
  UFOsighting(filteredData);

};
d3.selectAll("#filter-btn").on("click",buttonClick);

