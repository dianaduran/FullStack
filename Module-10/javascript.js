
var element = document.getElementById("box");


function grow_function() {
	element.classList.add("grow");
	document.getElementById("button1").disabled=true;
}

function blue_function(){
	element.classList.add("blue");
	document.getElementById("button2").disabled=true;
}

function fade_function(){
	element.classList.add("fade");
	document.getElementById("button3").disabled=true;
}

function reset_function(){
	element.classList.remove("grow");
	element.classList.remove("blue");
	element.classList.remove("fade");

}

function mOver(obj) {
	obj.innerHTML = "Thank you";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}