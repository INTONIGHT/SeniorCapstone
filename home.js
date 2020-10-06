//The store json file contains the store info
//specificlaly the times required and employees required for equations.


function createSpreadsheet(){
  let request = new XMLHttpRequest();
  request.open("GET","store.json",false);
  request.send(null);
  request.onreadystatechange = function(){
      if(request.readyState === 4 && request.status ===20){
        let my_JSON_object = JSON.parse(request.responseText);
        console.log(my_JSON_object);
      }
  }
  
}

function adjustSpreadsheet(){

}
