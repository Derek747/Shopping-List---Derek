var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var dmemo = document.getElementsByClassName("delete")


//Remove the list
function removeList(event) {
	event.target.parentNode.remove();
}


// the first 6 list
for (i=0; i < dmemo.length; i++) {
	dmemo[i].onclick = removeList;
}


// cross the items, two methods to pickup: ul and li
function crossLine(event){
	event.target.classList.toggle("done");
}

ul.addEventListener("click", crossLine);


// create the new items
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var cbtn = document.createElement("button");
	var cclass = document.createAttribute("class");
	cbtn.appendChild(document.createTextNode("Delete"));
	cclass.value ="delete btn btn-outline-dark"
	cbtn.setAttributeNode(cclass);
	cbtn.onclick= removeList;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(cbtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



