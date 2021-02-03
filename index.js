const GUESTSAVE= "guest";
const FONTSIZE= "size";
let guestnames = document.getElementById("guestnames")
// Load
if(sessionStorage[GUESTSAVE]){
  guestnames.querySelector("li").remove();
  sessionStorage.getItem(GUESTSAVE).split("\n").forEach(n => {
    let li = document.createElement("li");
    li.textContent = n;
    guestnames.appendChild(li);
  });
}
if(sessionStorage[FONTSIZE]){
  guestnames.style.fontSize = sessionStorage.getItem(FONTSIZE);
}

// Save
guestnames.addEventListener("input",function(){
  var guest = [];
  Array.from(guestnames.querySelectorAll("li")).forEach(i => {
    guest.push(i.textContent);
  });
  sessionStorage.setItem(GUESTSAVE, guest.join("\n"))
});

// keyboard

document.body.addEventListener("keydown", e => {
  if(e.ctrlKey && e.key.startsWith("Arrow")){
    let f = guestnames.style.fontSize;
    if(!f){ f = 250} else { f = parseInt(f)}
    switch (e.key) {
      case "ArrowUp":
        f -= 10;
        break;
      case "ArrowDown":
        f += 10;
        break;
    }
    guestnames.style.fontSize = `${f}%`;
    sessionStorage.setItem(FONTSIZE, `${f}%`);
  }
});