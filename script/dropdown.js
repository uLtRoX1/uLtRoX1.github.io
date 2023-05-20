/* Когато потребителя натисне бутона, 
     превключвай между криенето и показването на съдържанието на падащото меню. */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Затваря падащото меню когато се натисне извън него
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  // Променя снимките в галерята
};

const change = (src) => {
  document.getElementById("main").src = src;
};
