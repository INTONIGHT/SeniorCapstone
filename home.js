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
}

function adjustSpreadsheet(){

}
