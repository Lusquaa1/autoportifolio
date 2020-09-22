var time = new Date();
console.log(time.getHours());
var now = document.getElementById("Time");

if (time.getHours() < 12 && time.getHours() > 6) {
	now.innerHTML = "Bom dia";
} else if (time.getHours() > 12 && time.getHours() < 18) {
	now.innerHTML = "Boa tarde";
} else {
	now.innerHTML = "Boa noite";
}
