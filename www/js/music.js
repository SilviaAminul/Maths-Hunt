//onclicking anywhere in that page music will be playes in a loop please refer to my
// common php to look at the id og my song 

document.addEventListener("click", () => {
  let audio = document.getElementById("music");
  audio.play();
})