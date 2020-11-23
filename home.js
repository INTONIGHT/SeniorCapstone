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

//cant figure out how to use require here according to the documentations
let later = require('later');
let schedule = require('schedulejs');
let tasks = [
  {id: 1, duration: 60, available: later.parse.text('every weekday')},
  {id: 2, duration: 30, dependsOn: [1], resources: ['A']},
  {id: 3, duration: 30, dependsOn: [1], resources: [['A','B']]}
];

// Define a set of resources
let resources = [
  {id: A},
  {id: B, available: later.parse.text('after 10:00am and before 6:00pm')}
];

// Create the schedule for all of the tasks
schedule.create(tasks, resources);
}

function adjustSpreadsheet(){

}
