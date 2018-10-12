var kontakter = {}

function nyKontakt(firstname, lastname, phone) {
	kontakter[phone] = {
		fornavn: firstname,
		etternavn: lastname,
		telefon: phone
	}
}

function f(x) {
	return(3*x);
}

function finnAreal(w, h, isRect) {
	if (isRect) {
		return(w*h);
	}
}

function lagDiv(tekst, bredde, bagrunnsfarge, tekstfarge, id) {
	var para = document.createElement("p");
	para.setAttribute("id", id);
	var node = document.createTextNode(tekst);

	para.appendChild(node);
	document.body.appendChild(para);

	para.style.width = bredde.toString() + "px";
	para.style.backgroundColor = bagrunnsfarge;
	para.style.color = tekstfarge;
}

function oppdaterParagraf(id, bakgrunnsfarge, tekstfarge) {
	var element = document.getElementById(id);

	element.style.backgroundColor = bakgrunnsfarge;
	element.style.color = tekstfarge;
}