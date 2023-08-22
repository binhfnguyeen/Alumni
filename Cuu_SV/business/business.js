var index=0;
changeImg = function(){
    var imgs = ["../business/img/1.jpg", "../business/img/2.jpg","../business/img/3.jpg","../business/img/4.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index==imgs.length){
        index=0;
    }
}
setInterval(changeImg, 3000);
//Ads thay doi
var i = 0;
var imgs1 = ["../business/img/d2.jpg", "../business/img/d1.jpg"];
var imgs2 = ["../business/img/d3.jpg", "../business/img/d4.jpg"];
var imgs3 = ["../business/img/d5.jpg", "../business/img/d6.jpg"];
var img1 = document.getElementById("i1");
var img2 = document.getElementById("i2");
var img3 = document.getElementById("i3");
//Doc thong tin
function changeAds() {
    img1.src = imgs1[i];
    img2.src = imgs2[i];
    img3.src = imgs3[i];
    i++;
    if (i == imgs1.length) {
        i = 0;
    }
}
setInterval(changeAds, 3000);

function loadbusiness(){
    fetch("./business.json")
    .then(res => res.json())
    .then(data => {
        let h = "";
        for (let c of data){
            h +=  `
            <li><a href="${c.href}" ><i class="fa-solid fa-angles-right" style="color: #ff0000;"></i>${c.content}</a></li>
            `;
        }

        let e = document.getElementById("link");
        if(h != null){
            e.innerHTML += h;
        }
    });
};

window.onload = function(){
    loadbusiness();
};

window.onscroll = function(){
    scrollFunc();
};

function scrollFunc(){
    var toTopBtn = document.getElementById("onTop");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
}



function onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}