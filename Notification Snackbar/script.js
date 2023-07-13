document.querySelector(".notify").addEventListener("click", () => {
	let notification = document.querySelector(".notification").style;
	notification.display = "block";
	setTimeout(() => {
		notification.display = "none";
	}, 3000);
});