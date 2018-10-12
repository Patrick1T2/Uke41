navn = "Patrick Tourniaire";
nb_names = 3;

function printMyName() {
	for (var i = 1; i <= nb_names; i++) {
		// Lager nytt p element for hver gang
		var para = document.createElement("p");
		para.setAttribute("id", i.toString())
		var node = document.createTextNode(navn);
		
		para.appendChild(node)
		document.body.appendChild(para);
	}
}

function styleMyNames() {
	for (var i = 1; i <= nb_names; i++) {
		var text_element = document.getElementById(i.toString());
		console.log(text_element);
		text_element.style.backgroundColor = "#000";
		text_element.style.color = "#fff";
	}
}