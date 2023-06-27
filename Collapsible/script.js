document.querySelector(".text").addEventListener("click",()=>{
	let cstyle = document.querySelector(".content").style;
	
	if(cstyle.display === "none") {
		cstyle.display = "block";
	}else{
		cstyle.display = "none";
	}
});