//The store json file contains the store info
//specificlaly the times required and employees required for equations.
function readFile(file,callback){
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//readFile("C:\Users\tyler\OneDrive\Desktop\SeniorCapstone\employees.json",function(text){
   // let data= JSON.parse(text);
   // console.log(data);
//})
function createSpreadsheet(){
    readFile("C:\Users\tyler\OneDrive\Desktop\SeniorCapstone\employees.json",function(text){
        let data= JSON.parse(text);
        console.log(data);
    })

}

function adjustSpreadsheet(){

}
