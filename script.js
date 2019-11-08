function changeImgRight(){
	document.getElementById("car").src = "images/nissan_240SX.jpg";
}
function changeImgLeft(){
	document.getElementById("car").src = "images/dodge_charger.jpg";
}
document.getElementById("speed").innerHTML = "SPEED: " + speed;
document.getElementById("handling").innerHTML = "HANDLING: " + handling;
document.getElementById("acceleration").innerHTML = "ACCELERATION: " + acceleration;
document.getElementById("launch").innerHTML = "LAUNCH: " + launch;
document.getElementById("braking").innerHTML = "BRAKING: " + braking;
document.getElementById("hp").innerHTML = "HORSEPOWER: " + hp + " hp";
document.getElementById("g-force").innerHTML = "G-FORCE: " + gforce + " G";
document.getElementById("weight").innerHTML = "WEIGHT: " + weight + " lbs";