document.querySelector(".add").addEventListener("click", ()=>{
	let text = document.querySelector("#fname").value;
	if (text.length===0) return;
	
	let button = document.createElement("button");
	button.classList.add("listitem");
	button.innerText=text;
	addEventListenerToButton(button);
	document.querySelector(".todolist").appendChild(button);
	
});

function addEventListenerToButton(button) {
	button.addEventListener("click",()=>{
		button.classList.toggle("marked");
	});
}

let buttons = document.querySelectorAll(".listitem");
for (button of buttons) {
	addEventListenerToButton(button);
}