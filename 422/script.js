const nv = document.getElementById("nv");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");

function navopen() {
	l1.classList.toggle("l1open");
	l2.classList.toggle("l2open");
	l3.classList.toggle("l3open");
	nv.classList.toggle("nvopen");
}
