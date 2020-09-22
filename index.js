const GUESTSAVE= "guest";
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

// Save
guestnames.addEventListener("input",function(){
  var guest = [];
  Array.from(guestnames.querySelectorAll("li")).forEach(i => {
    guest.push(i.textContent);
  });
  sessionStorage.setItem(GUESTSAVE, guest.join("\n"))
});