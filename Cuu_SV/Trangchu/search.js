function focusInput() {
    var input = document.querySelector(".search-text");
    input.focus(); // Tập trung vào ô nhập liệu khi nút được nhấp
    
}



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
//tạo hịu ứng cho thanh add ảnh chạy bên phải
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

    let list1 = document.querySelector('.colum-right-2 .slider-2 .list');
    let items1 = document.querySelectorAll('.colum-right-2 .slider-2 .list .item');

    let active1 = 0;
    let lengthitem1 = items1.length - 1;

    let slideWidth1 = items1[0].offsetWidth; // Độ dài của mỗi ảnh

    function reloadSlider1() {
        if (active1 > lengthitem1) {
            active1 = 0; // Quay trở lại ảnh đầu tiên khi đến ảnh cuối cùng
        }
        let newPosition1 = -active1 * slideWidth1;
        list1.style.transform = `translateX(${newPosition1}px)`;
        active1++; // Tăng chỉ số hiển thị ảnh kế tiếp
    }

    setInterval(reloadSlider1, 1800);
});


// Hàm load dữ liệu từ file JSON
function loadDataFromJSON(url) {
    return fetch(url)
        .then(res => res.json());
}

// Hàm load adds
function loadadds(data) {
    // Implement loadadds here
            let h = "";
        for (let c of data){
            h +=  `
            <div class ="adds">
                <a href="${c.diachi}" >
                    <span>${c.tieude}</span>
                    <img class ="img-add" src="/Cuu_SV/image/adds/${c.anh}"> 
                </a>
            </div>
            `;
        }

        let e = document.getElementById("quangcao");
        if(h != null){
            e.innerHTML += h;
        }
}

// Hàm load business
function loadbusiness(data) {
    // Implement loadbusiness here
    let h = "";
    for (let c of data){
        h +=  `
        <div class ="adds">
            <a href="${c.diachi}" >
                <img class ="img-add" src="/Cuu_SV/business_img/${c.anh}.jpg"> 
            </a>
        </div>`
        ;
    }

    let e = document.getElementById("business");
    if(h != null){
        e.innerHTML += h;
    }
}

function commenting(button){
    let place = button.closest(".cmt-active");
    let place2 = place.querySelector(".cmt-info");
    let data = place2.value;
    console.log(data);
    if (data != ""){
        let formattedValue = data.replace(/\n/g, "<br>");
        let cmtcontainer = place.previousElementSibling;
        let text = formattedValue;
        let a = "";
        //nọi dung cmt
        a += 
       `<div class="comment">
        <div class = "user-avt"><img src="/Cuu_SV/Trangchu/lover.jpg" alt="adds"></div>
        <div class = "cmt-info">
                <div class = "cmt-name"><span>Trí Minh</span></div>   
                <div class="cmt-value">
                    ${text}
                </div>
                <button class="btn-cmt-like"><i class="fa-regular fa-heart"></i></button>
        </div>
        </div>`;
        cmtcontainer.insertAdjacentHTML("beforeend",a);
    }
}

// Hàm load post
function loadpost(data) {
    // Implement loadpost here
    let h = "";
        for (let c of data){
            let postlike = parseInt(c.like_num);
            let postcmt = parseInt(c.cmt_num);
            h += 
            `
            <div class ="post">
            <div class = "user">
                <div class = "user-avt"><img src="${c.avt}" alt="adds"></div>
                <div class = "name-time">
                    <div class = "user-name"><span>${c.name}</span></div>
                    <div class= " post-time"><span>${c.time}</span></div>
                </div>
            </div>
            
            <div class ="post-value">
                <p class = "paragrap-post"> 
                    ${c.value}
                </p>
            </div>
            <div class="img-post">
                <img class="img-post" src="${c.img}" alt="post">
            </div>

            <div class ="interact-val">
                <div>${postlike} thích</div> 
                <div>${postcmt} bình luận</div>
            </div>

            <div class= "btn-interact">
                <button type="button" class="btn-like"><i class="fa-regular fa-heart"></i><span>Yêu thích</span></button>
                <button type="button" class ="btn-comment"><i class="fa-regular fa-comment"></i><span>Bình luận</span></button>
            </div>

            <div class ="cmt-container" id = "cmt-container">`
            
            for(let i of c.cmt ){
                h+=                 
                `<div class="comment">
                    <div class = "user-avt"><img src="${i.avt}" alt="adds"></div>
                    <div class = "cmt-info">
                            <div class = "cmt-name"><span>${i.name}</span></div>   
                            <div class="cmt-value">
                                ${i.value}
                            </div>
                            <button class="btn-cmt-like"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>`
            };

            h+=
            `</div>
            <div class ="cmt-active">
                <div class="cmt-enter">
                    <div class = "user-avt"><img src="/Cuu_SV/Trangchu/lover.jpg" alt="adds"></div>
                    <div class = "write-cmt ">
                        <textarea id="cmt-info" class ="cmt-info" type="text" placeholder="Nhập bình luận của bạn..."></textarea>
                        <div class="cmt-options">
                            <ul>
                                <li><i class="fa-regular fa-image"></i></li>
                                <li><i class="fa-regular fa-face-smile"></i></li>
                                <li class = "up-cmt"><i class="fa-solid fa-paper-plane"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
 
        };

        let e = document.getElementById("post-container");
        if(h != null){
            e.innerHTML += h;
        }
}


// Đợi DOMContentLoaded trước khi thực thi
document.addEventListener("DOMContentLoaded", async function onload() {
    // Load data from JSON files
    const addsData = await loadDataFromJSON("/Cuu_SV/Trangchu/adds.json");
    const businessData = await loadDataFromJSON("/Cuu_SV/Trangchu/business.json");
    const postData = await loadDataFromJSON("/Cuu_SV/Trangchu/post.json");

    // Call your functions after data is loaded
    loadadds(addsData);
    loadbusiness(businessData);
    loadpost(postData);

    // ... Các xử lý khác của bạn ở đây
    var cmtwrite = document.querySelectorAll(".cmt-active");
        cmtwrite.forEach(function(button) {
        button.style.display = "none";
    })

    var likeButtons = document.querySelectorAll(".btn-like");
    var cmtLike = document.querySelectorAll(".btn-cmt-like");
    var cmt = document.querySelectorAll(".btn-comment");
    var interact = document.querySelectorAll(".btn-interact");
    interact.forEach(function(button){
        button.classList.remove("btn-interact-active");
    });

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
        //ẩn cmt
    var menu = document.querySelector(".menu-header");
    menu.style.display = "none";

    var cmt = document.querySelectorAll(".cmt-container");
    cmt.forEach(function(button) {
      button.style.display = "none";
    });

    ///comment
    var upcmt = document.querySelectorAll(".up-cmt");
    upcmt.forEach(function (button){
        button.addEventListener("click", function(){
            commenting(this);
        });
    }); 
    
    ///post bài viết

    var postbtn = document.getElementById("post-btn");
    let result = document.getElementById("posting");
    postbtn.addEventListener("click", function(){
        let data = document.getElementById("post-content").value;
        let formattedValue = data.replace(/\n/g, "<br>");
        let text = formattedValue;
        if(text != ""){
        let a ="";
        //cộng thêm bài póst vào
        a+= `
        <div class ="post">
        <div class = "user">
            <div class = "user-avt"><img src="/Cuu_SV/Trangchu/lover.jpg" alt="adds"></div>
            <div class = "name-time">
                <div class = "user-name"><span>Minh Trí</span></div>
                <div class= " post-time"><span>1p trước</span></div>
            </div>
        </div>
        
        <div class ="post-value">
            <p class = "paragrap-post"> 
                ${text}
            </p>
        </div>

        <div class ="interact-val">
            <div> 0 thích</div> 
            <div> 0 bình luận</div>
        </div>

        <div class= "btn-interact">
            <button type="button" class="btn-like"><i class="fa-regular fa-heart"></i><span>Yêu thích</span></button>
            <button type="button" class ="btn-comment"><i class="fa-regular fa-comment"></i><span>Bình luận</span></button>
        </div>

        <div class ="cmt-container" id = "cmt-container">
        </div>
        <div class ="cmt-active">
            <div class="cmt-enter">
                <div class = "user-avt"><img src="/Cuu_SV/Trangchu/lover.jpg" alt="adds"></div>
                <div class = "write-cmt ">
                    <textarea id="cmt-info" class ="cmt-info" type="text" placeholder="Nhập bình luận của bạn..."></textarea>
                    <div class="cmt-options">
                        <ul>
                            <li><i class="fa-regular fa-image"></i></li>
                            <li><i class="fa-regular fa-face-smile"></i></li>
                            <li class = "up-cmt"><i class="fa-solid fa-paper-plane"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>`;
        result.insertAdjacentHTML("afterend", a);
        onload();
    }
    });

});

