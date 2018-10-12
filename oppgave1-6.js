
var x = 60;
var y = 60;

tegnSirkler();

function tegnSirkler() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	for (var i = 0; i < 3; i++) {
		ctx.beginPath();
		ctx.arc(x + 100 * i, y + 100 * i, 30, 0, 2 * Math.PI);
		ctx.stroke();
	}
}
