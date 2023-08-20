function focusInput() {
    var input = document.querySelector(".search-text");
    input.focus(); // Tập trung vào ô nhập liệu khi nút được nhấp
    
}

document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu-header");
  var cmt = document.querySelectorAll(".cmt-container");
  menu.style.display = "none";
  cmt.forEach(function(button) {
    button.style.display = "none";
  })
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

var arrowIsFlipped = false;
function toggleArrow() {
    var arrowIcon = document.getElementById("chevron");
    
    if (arrowIsFlipped) {
        arrowIcon.classList.remove("flipped");
    } else {
        arrowIcon.classList.add("flipped");
    }
    arrowIsFlipped = !arrowIsFlipped;
}

//nhận sự kiện ấn vào nút ,,,
document.addEventListener("DOMContentLoaded", function() {
    var likeButtons = document.querySelectorAll(".btn-like");
    var cmtLike = document.querySelectorAll(".btn-cmt-like");
    var cmt = document.querySelectorAll(".btn-comment");
    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            likePost(this);
        });
    });

    cmtLike.forEach(function(button) {
        button.addEventListener("click", function() {
            likePost(this);
        });
    });

    cmt.forEach(function(button) {
        button.addEventListener("click", function() {
            showcmt(this);
        });
    });
    
});

function likePost(button) {
    var likeIcon = button.querySelector(".fa-heart");

    if (likeIcon.classList.contains("fa-regular")) {
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid");
    } else {
        likeIcon.classList.remove("fa-solid");
        likeIcon.classList.add("fa-regular");
    }
}

// Hàm xử lý khi click vào nút bình luận
function showcmt(button) {
    var cmtContainer = button.closest(".btn-interact").nextElementSibling; // Lấy phần tử .cmt-container
    if(cmtContainer.style.display ==="none") {
        cmtContainer.style.display = "block";
    }
    else 
        cmtContainer.style.display = "none";
}



