const sig = document.getElementById("signature")
const egg = document.getElementById("easter-egg")

function hideSig() {
  sig.classList.add("display-none");
  egg.classList.remove("display-none");
}

function hideEgg() {
  egg.classList.add("display-none");
  sig.classList.remove("display-none");
}

sig.onclick = hideSig;
egg.onclick = hideEgg;
