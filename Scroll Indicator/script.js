document.addEventListener("scroll", () => {
  let scrollheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (window.scrollY / scrollheight) * 100;
  document.querySelector(".progress").style.width = scrolled + "%";
  document.querySelector(".progress-text").innerText = Math.floor(scrolled) + " %";
});