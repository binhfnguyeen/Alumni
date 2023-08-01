function focusInput() {
    var input = document.querySelector(".search-text");
    input.focus(); // Tập trung vào ô nhập liệu khi nút được nhấp
    
}

document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu-header");
  menu.style.display = "none";
});

function openmenuheader() {
    var menu = document.querySelector(".menu-header");
    
    if (menu.style.display === "none"){
      menu.style.display = "block";

    }
    else {
      menu.style.display = "none";
    }
}

