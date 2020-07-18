window.addEventListener("scroll", function () {
	var header = document.querySelector("Header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

function Contact() {
	window.open("mailto:lucasaguiar.floripa@gmail.com");
}
