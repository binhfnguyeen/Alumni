function focusInput() {
    var input = document.querySelector(".search-text");
    input.focus(); // Tập trung vào ô nhập liệu khi nút được nhấp
    
}

document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu-header");
  //ẩn cmt
  var cmt = document.querySelectorAll(".cmt-container");
  menu.style.display = "none";
  cmt.forEach(function(button) {
    button.style.display = "none";
  })
 // ẩn phần lòi ra dư
  var cmtwrite = document.querySelectorAll(".cmt-active");
  cmtwrite.forEach(function(button) {
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

// nhận sự kiện ấn vào nút ,,,
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
            interractshow(this);
            cmtentershow(this);
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
    //cmtentershow(cmtContainer);
    if(cmtContainer.style.display ==="none") {
        cmtContainer.style.display = "block";
    }
    else 
        cmtContainer.style.display = "none";
}

function interractshow(button) {
    var interactContainer = button.closest(".btn-interact");
    if (interactContainer.classList.contains("btn-interact-active")) {
        interactContainer.classList.remove("btn-interact-active");
    } else {
        interactContainer.classList.add("btn-interact-active");
    }
}

function cmtentershow(button) {
    var parent = button.closest(".post"); // Thay ".btn-interact" bằng ".post"
    var cmtwrite = parent.querySelector(".cmt-active"); // Thay ".nextElementSibling.nextElementSibling" bằng ".cmt-enter"
    if (cmtwrite.style.display === "none"){
        cmtwrite.style.display = "block";
    }
    else{
        cmtwrite.style.display = "none";

    }
}

document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector('.colum-right-2 .slider-1 .list');
    let items = document.querySelectorAll('.colum-right-2 .slider-1 .list .item');

    let active = 0;
    let lengthitem = items.length - 1;

    let slideWidth = items[0].offsetWidth; // Độ dài của mỗi ảnh

    function reloadSlider() {
        if (active > lengthitem) {
            active = 0; // Quay trở lại ảnh đầu tiên khi đến ảnh cuối cùng
        }
        let newPosition = -active * slideWidth;
        list.style.transform = `translateX(${newPosition}px)`;
        active++; // Tăng chỉ số hiển thị ảnh kế tiếp
    }

    setInterval(reloadSlider, 1900);
});
document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector('.colum-right-2 .slider-2 .list');
    let items = document.querySelectorAll('.colum-right-2 .slider-2 .list .item');

    let active = 0;
    let lengthitem = items.length - 1;

    let slideWidth = items[0].offsetWidth; // Độ dài của mỗi ảnh

    function reloadSlider() {
        if (active > lengthitem) {
            active = 0; // Quay trở lại ảnh đầu tiên khi đến ảnh cuối cùng
        }
        let newPosition = -active * slideWidth;
        list.style.transform = `translateX(${newPosition}px)`;
        active++; // Tăng chỉ số hiển thị ảnh kế tiếp
    }

    setInterval(reloadSlider, 1800);
});

function loadadds(){
    fetch("Cuu_SV/Trangchu/adds.json")
    .then(res => res.json())
    .then(data => {
        let h = "";
        for (let c of data){
            h +=  `
            <div class ="adds">
                <a href="${c.diachi}" >
                    <span>${c.tieude}</span>
                    <img class ="img-add" src="Cuu_SV/image/adds/${c.anh}"> 
                </a>
            </div>
            `;
        }

        let e = document.getElementById("quangcao");
        if(h != null){
            e.innerHTML += h;
        }
    });
    window.onload = function(){
        loadadds();
    }
};