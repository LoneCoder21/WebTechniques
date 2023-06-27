document.querySelector(".openmodal").addEventListener("click", () => {
	document.querySelector(".modal").style.display = "block";
});

document.querySelector(".modal-close").addEventListener("click", () => {
	document.querySelector(".modal").style.display = "none";
});