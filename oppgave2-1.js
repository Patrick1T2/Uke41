var maxPrintLen = 10;

for (var i = 0; i < maxPrintLen; i++) {
	writeText(20 + Math.round((Math.random() + 10)*5));
}

function writeText(page) {
	var txt = "Lekse spå side: " + page.toString();
	var para = document.createElement("p");
	var node = document.createTextNode(txt);
	
	para.appendChild(node)
	document.body.appendChild(para);
}