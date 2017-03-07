
function executeThisCodeAfterFileLoaded(){
	console.log("worked");

}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}


var dinoRequest = new XMLHttpRequest();
dinoRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
dinoRequest.addEventListener("error", executeThisCodeAfterFileFails);
dinoRequest.open("GET","dinosaurs.json");
dinoRequest.send();
console.log("dinoRequest", dinoRequest);