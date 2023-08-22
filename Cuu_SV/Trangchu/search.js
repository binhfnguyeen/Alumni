
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

function changcolor (){
    var header = document.getElementById("header");
    var header_search = header.querySelector("search-form");
    var header_
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

function darkmode(){
    var a = document.getElementById("body");
    var colorword = "rgb(255, 236, 255)";
    var itemcolor = "rgb(255, 255, 255, 0.1)";
    var header = document.getElementById("header");
    var btnheader = document.querySelector(".button-menu");
    var posts = document.querySelectorAll(".post");
    var textarea = document.querySelectorAll("textarea");
    var posttime = document.querySelectorAll(".post-time");
    var divs = document.querySelectorAll("div");
    var spans = document.querySelectorAll("span");
    var as = document.querySelectorAll("a");
    var buttons = document.querySelectorAll("button");
    var bntlikecmt = document.querySelectorAll(".btn-cmt-like");
    var menuheader = document.querySelector(".menu-header");
    if(a.classList.contains("dark"))
        {
            //remove
            a.classList.remove("dark");
            document.body.style.backgroundColor = "white";

            header.classList.remove("-darkmode")
            btnheader.classList.remove("-darkmode");
            posts.forEach(function(post) {
                post.classList.remove("-darkmode");
            });
            textarea.forEach(function(postcontent){
                postcontent.classList.remove("-darkmode");
            });
            posttime.forEach(function(post) {
                post.classList.remove("-darkmode");
            });
            divs.forEach(function(div) {
                div.classList.remove("-darkmode");
            });
            spans.forEach(function(span){
                span.classList.remove("-darkmode");
            });
            as.forEach(function(a){
                a.classList.remove("-darkmode");
            });
            buttons.forEach(function(button) {
                button.style.color = "black";
                if(button.classList.contains("btn-like") || button.classList.contains("btn-comment")){
                    button.style.background = "";
                }
            });
            menuheader.classList.remove("-darkmode");

        }
    else
       {
            a.classList.add("dark");
            document.body.style.backgroundColor = "black";
            // header.style.backgroundColor = postcolor;
            header.classList.add("-darkmode");
            // header.style.boxShadow = boxShadow;
            // btnheader.style.backgroundColor = bgcolor; 
            btnheader.classList.add("-darkmode");
            posts.forEach(function(post) {
                post.classList.add("-darkmode");
            });
            textarea.forEach(function(postcontent){
                postcontent.classList.add("-darkmode");
            });
            posttime.forEach(function(post) {
                post.classList.add("-darkmode");
            });
            divs.forEach(function(div) {
                div.classList.add("-darkmode");
            });
            spans.forEach(function(span){
                span.classList.add("-darkmode");
            });
            as.forEach(function(a){
                a.classList.add("-darkmode");
            });
            buttons.forEach(function(button) {
                button.style.color = colorword;
                if(button.classList.contains("btn-like") || button.classList.contains("btn-comment")){
                    button.style.background = itemcolor;
                }
            });
            bntlikecmt.forEach(function(btnlike){
                btnlike.classList.add("-darkmode");
            });
            menuheader.classList.add("-darkmode");

       }
    }; 

document.addEventListener("DOMContentLoaded", function (){
    var checklight = document.getElementById("btn-change-light-id");
    checklight.addEventListener("click", function(){
        darkmode();
    });
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
                <a href="${c.diachi}" target="_blank">
                    <span>${c.tieude}</span>
                    <img class ="img-add" src="../image/adds/${c.anh}"> 
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
            <a href="${c.diachi}" target="_blank">
                <img class ="img-add" src="../business_img/${c.anh}.jpg"> 
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
        var c = document.getElementById("body");
        if(c.classList.contains("dark")){
            a +=    `<div class="comment -darkmode">
            <div class="user-avt gotome -darkmode"><img src="./lover.jpg" alt="adds"></div>
            <div class="cmt-info -darkmode">
                    <div class="cmt-name -darkmode"><span class="-darkmode">Trí Minh</span></div>   
                    <div class="cmt-value -darkmode">
                        ${text}
                    </div>
                    <button class="btn-cmt-like -darkmode" style="color: rgb(255, 236, 255);"><i class="fa-regular fa-heart"></i></button>
            </div>
            </div>`
        cmtcontainer.insertAdjacentHTML("beforeend",a);

        }
        else {
        a += 
       `<div class="comment">
        <div class = "user-avt gotome"><img src="./lover.jpg" alt="adds"></div>
        <div class = "cmt-info">
                <div class = "cmt-name gotome"><span>Trí Minh</span></div>   
                <div class="cmt-value">
                    ${text}
                </div>
                <button class="btn-cmt-like"><i class="fa-regular fa-heart"></i></button>
        </div>
        </div>`;
        cmtcontainer.insertAdjacentHTML("beforeend",a);
    }
}
}

// hàm goto


function gotowork(){
    window.open("../business/business.html", "_blank")
}

function openoualumni(){
    window.open("https://www.bing.com/ck/a?!&&p=c4ff0f276b36a3eaJmltdHM9MTY5MjU3NjAwMCZpZ3VpZD0yMWEyMmRkNC1lMTU1LTZlOTItMDY5MS0zZmE1ZTAyYTZmY2EmaW5zaWQ9NTE4MQ&ptn=3&hsh=3&fclid=21a22dd4-e155-6e92-0691-3fa5e02a6fca&psq=alumi+ou&u=a1aHR0cDovL2FsdW1uaS5vdS5lZHUudm4v&ntb=1", "_blank")
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
                <div class = "user-avt"><img src="${c.avt}" alt="avt"></div>
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
                    <div class = "user-avt"><img src="./lover.jpg" alt="adds"></div>
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
    const addsData = await loadDataFromJSON("./adds.json");
    const businessData = await loadDataFromJSON("../Trangchu/business.json");
    const postData = await loadDataFromJSON("./post.json");

    // Call your functions after data is loaded
    loadadds(addsData);
    loadbusiness(businessData);
    loadpost(postData);

    // ... Các xử lý khác của bạn ở đây
    // phần 
    var cmtwrite = document.querySelectorAll(".cmt-active");
        cmtwrite.forEach(function(button) {
        button.style.display = "none";
    });

////
    var header_btn = document.querySelector(".menu-header");
    header_btn.style.display = "none";

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
    var menu_header = document.querySelector(".menu-header");
    menu_header.style.display = "none";

    var cmt = document.querySelectorAll(".cmt-container");
    cmt.forEach(function(button) {
      button.style.display = "none";
    });

    //link to trang ca nhan
    var allgotome = document.querySelectorAll(".gotome");
    allgotome.forEach( function (button){
        button.addEventListener("click", function(){
        window.open( "../profile/thongtin.html");
        });
    });

    ///comment
    var upcmt = document.querySelectorAll(".up-cmt");
    upcmt.forEach(function (button){
        button.addEventListener("click", function(){
            commenting(this);
            var cmtLike = document.querySelectorAll(".btn-cmt-like");
            cmtLike.forEach(function(button) {
                button.addEventListener("click", function() {
                    likePost(this);
                });
            });
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
        var c = document.getElementById("body");
        if(c.classList.contains("dark")){
            a +=    `<div class="post -darkmode">
            <div class="user -darkmode">
                <div class="user-avt gotome -darkmode"><img src="./lover.jpg" alt="adds"></div>
                <div class="name-time -darkmode">
                    <div class="user-name gotome -darkmode"><span class="-darkmode">Minh Trí</span></div>
                    <div class="post-time -darkmode"><span class="-darkmode">1p trước</span></div>
                </div>
            </div>
            
            <div class="post-value -darkmode">
                <p class="paragrap-post"> 
                    ${text}
                </p>
            </div>
            
            <div class="interact-val -darkmode">
                <div class="-darkmode"> 0 thích</div> 
                <div class="-darkmode"> 0 bình luận</div>
            </div>
            
            <div class="btn-interact -darkmode">
                <button type="button" class="btn-like" style="color: rgb(255, 236, 255); background: rgba(255, 255, 255, 0.1);"><i class="fa-regular fa-heart"></i><span class="-darkmode">Yêu thích</span></button>
                <button type="button" class="btn-comment" style="color: rgb(255, 236, 255); background: rgba(255, 255, 255, 0.1);"><i class="fa-regular fa-comment"></i><span class="-darkmode">Bình luận</span></button>
            </div>
            
            <div class="cmt-container -darkmode" id="cmt-container" style="display: none;">
            </div>
            <div class="cmt-active -darkmode" style="display: none;">
                <div class="cmt-enter -darkmode">
                    <div class="user-avt gotome -darkmode"><img src="./lover.jpg" alt="adds"></div>
                    <div class="write-cmt -darkmode">
                        <textarea id="cmt-info" class="cmt-info -darkmode" type="text" placeholder="Nhập bình luận của bạn..."></textarea>
                        <div class="cmt-options -darkmode">
                            <ul>
                                <li><i class="fa-regular fa-image"></i></li>
                                <li><i class="fa-regular fa-face-smile"></i></li>
                                <li class="up-cmt"><i class="fa-solid fa-paper-plane"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>`
        result.insertAdjacentHTML("afterend", a);
        onload();
        }
        else {
        a+= 
        `<div class ="post">
        <div class = "user">
            <div class = "user-avt gotome"><img src="./lover.jpg" alt="adds"></div>
            <div class = "name-time">
                <div class = "user-name gotome" ><span>Minh Trí</span></div>
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
                <div class = "user-avt gotome"><img src="./lover.jpg" alt="adds"></div>
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
    }
    });
});

