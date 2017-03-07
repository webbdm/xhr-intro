var dinocontainer = document.getElementById("dinocontainer");

function makeDom(xhrData){

	var dinosaurString = "";
	var currentDinosaur;
	for (var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];
	 
	 dinosaurString += `<div class="col-sm-6 col-md-4">`;
	 dinosaurString += `<div class="thumbnail">`;
	 dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`;
	 dinosaurString += `<div class="caption">`;
	 dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
	 dinosaurString += `<p>Is a ${currentDinosaur.type}</p>`;
	 dinosaurString += `<p>Likes to eat: ${currentDinosaur.food}</p>`;
	 dinosaurString += `</div></div></div>`;
	 
	 } 

	 dinoContainer.innerHTML = dinosaurString;
}

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	makeDom(data);
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