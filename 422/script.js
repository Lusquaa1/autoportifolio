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
var DiaH = data.getHours();
var DiaM = data.getMinutes();
DiaAM = DiaH * 60 + DiaM;
console.log(DiaAM);
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

var mat1 = document.querySelectorAll(".today td.m1");
var mat2 = document.querySelectorAll(".today td.m2");
var mat3 = document.querySelectorAll(".today td.m3");
var mat4 = document.querySelectorAll(".today td.m4");

var ves1 = document.querySelectorAll(".today td.v1");
var ves2 = document.querySelectorAll(".today td.v2");
var ves3 = document.querySelectorAll(".today td.v3");
var ves4 = document.querySelectorAll(".today td.v4");

//Query Selector Return a Array

if (DiaAM >= 450 && DiaAM <= 504) {
	mat1[0].classList.toggle("now");
	mat2[0].classList.toggle("next");
} else if (DiaAM >= 505 && DiaAM <= 559) {
	mat2[0].classList.toggle("now");
	mat3[0].classList.toggle("next");
} else if (DiaAM >= 560 && DiaAM <= 579) {
	mat3[0].classList.toggle("next");
} else if (DiaAM >= 580 && DiaAM <= 634) {
	mat3[0].classList.toggle("now");
	mat4[0].classList.toggle("next");
} else if (DiaAM >= 635 && DiaAM <= 690) {
	mat4[0].classList.toggle("now");
} else if (DiaAM >= 691 && DiaAM <= 809) {
	ves1[0].classList.toggle("next");
}

if (DiaAM >= 810 && DiaAM <= 864) {
	ves1[0].classList.toggle("now");
	ves2[0].classList.toggle("next");
} else if (DiaAM >= 865 && DiaAM <= 919) {
	ves2[0].classList.toggle("now");
	ves3[0].classList.toggle("next");
} else if (DiaAM >= 920 && DiaAM <= 939) {
	ves3[0].classList.toggle("next");
} else if (DiaAM >= 940 && DiaAM <= 994) {
	ves3[0].classList.toggle("now");
	ves4[0].classList.toggle("next");
} else if (DiaAM >= 995 && DiaAM <= 1050) {
	ves4[0].classList.toggle("now");
}
