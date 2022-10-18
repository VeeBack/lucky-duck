function showDropDown(a) {
  document.getElementById(a).classList.toggle("showBlock");

  document.getElementById('dropdown-arrow-up').classList.toggle("hide");
  document.getElementById('dropdown-arrow-down').classList.toggle("hide");
}

function toggleShowHide(a) {
  document.getElementById(a).classList.toggle("hide");
}