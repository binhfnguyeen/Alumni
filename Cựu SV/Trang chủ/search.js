function focusInput() {
    var input = document.querySelector(".search-text");
    input.focus(); // Tập trung vào ô nhập liệu khi nút được nhấp
}

document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu-header");
  menu.style.maxHeight = "0";
  menu.style.opacity = "0";
});

function openmenuheader() {
    var menu = document.querySelector(".menu-header");
    if (menu.style.maxHeight === "0px") {
        menu.style.maxHeight = "100px"; // Hiển thị menu nếu đang ẩn
        menu.style.opacity = "1";
        menu.style.transition = "max-height 0.5s ease, opacity 0.6s ease";
      } else {
        menu.style.maxHeight = "0px"; // Hiển thị menu nếu đang ẩn
        menu.style.opacity = "0"; // Ẩn menu nếu đang hiển thị
        menu.style.transition = "max-height 0.6s ease, opacity 0.4s ease";
      }
}

document.body.addEventListener("click", function (event) {
  var menu = document.querySelector(".menu-header");
  var button = document.querySelector(".button-menu");

  // Kiểm tra nếu sự kiện click không phát sinh trong menu hoặc nút menu
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    // Ẩn menu
    menu.style.maxHeight = "0px";
    menu.style.opacity = "0";
    menu.style.transition = "max-height 0.7s ease, opacity 0.4s ease";
  }
});
