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

var data = new Date();
var DiaS = data.getDay();
var sem;

const Seg = document.getElementById("Segunda");
const Ter = document.getElementById("Terça");
const Qua = document.getElementById("Quarta");
const Qui = document.getElementById("Quinta");
const Sex = document.getElementById("Sexta");

var DiaSemana = document.getElementById("DiaSemana");

switch (DiaS) {
	case 1:
		sem = "Segunda";
		Seg.classList.toggle("today");
		break;
	case 2:
		sem = "Terça";
		Ter.classList.toggle("today");
		break;
	case 3:
		sem = "Quarta";
		Qua.classList.toggle("today");
		break;
	case 4:
		sem = "Quinta";
		Qui.classList.toggle("today");
		break;
	case 5:
		sem = "Sexta";
		Sex.classList.toggle("today");
		break;
	case 6:
		sem = "Sábado";
		break;
	case 7:
		sem = "Domingo";
		break;
}
