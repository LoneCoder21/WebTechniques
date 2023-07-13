let quote = 0;

function activateQuoteSection() {
	let quotes = document.querySelectorAll(".quotesection");
	for (q of quotes) {
		q.classList.remove("active");
	}
	quotes[quote].classList.add("active");
}

document.querySelector(".Left").addEventListener("click", () => {
	quote -= 1;
	quote += 3;
	quote %= 3;
	activateQuoteSection();
});

document.querySelector(".Right").addEventListener("click", () => {
	quote += 1;
	quote %= 3;
	activateQuoteSection();
});