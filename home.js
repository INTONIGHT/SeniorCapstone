// The store json file contains the store info
// specifically the times required and employees required for equations.

function createSpreadsheet() {
  let request = new XMLHttpRequest();
  request.open("GET","store.json",true);

  request.onreadystatechange = function() {
    // readyState 4 is "Done"
    // status is 200 for "OK"
    if (request.readyState === 4 && request.status === 200) {
      let my_JSON_object = JSON.parse(request.responseText);
      console.log(my_JSON_object);
    }
  }
  // Send the request
  request.send();
  //attempting to create a chart here
  new JSC.Chart("chartDiv", {
    series: [
      {
        points: [{ x: "A", y: 10 }, { x: "B", y: 5 }]
      }
    ]
  });
 
  //hopefully it gets the data from the store.json
  JSC.fetch("store.json")
  .then(response => response.text())
  .then(text => {
    //Use csv text
  });
  //this uses dates but will modify
  let points = data.map(d => {
    return { x: d.date, y: d.actual };
  });
  //this renders the chart
  const chart = new JSC.Chart("chartDiv", {
    // Pass points to the series
    series: [{ points: points }],
    // Set the x axis scale to time.
    xAxis_scale_type: "time"
  });
}

function adjustSpreadsheet(){

}
