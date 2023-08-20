var index=0;
changeImg = function(){
    var imgs = ["/Cựu SV/business/img/1.jpg", "/Cựu SV/business/img/2.jpg","/Cựu SV/business/img/3.jpg","/Cựu SV/business/img/4.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index==imgs.length){
        index=0;
    }
}
setInterval(changeImg, 3000);

var i = 0;
var imgs1 = ["/Cựu SV/business/img/d1.jpg", "/Cựu SV/business/img/d2.jpg"];
var imgs2 = ["/Cựu SV/business/img/d3.jpg", "/Cựu SV/business/img/d4.jpg"];
var imgs3 = ["/Cựu SV/business/img/d5.jpg", "/Cựu SV/business/img/d6.jpg"];
var img1 = document.getElementById("i1");
var img2 = document.getElementById("i2");
var img3 = document.getElementById("i3");

function changeAds() {
    img1.src = imgs1[i];
    img2.src = imgs2[i];
    img3.src = imgs3[i];
    img1.style.height = "200px";
    i++;
    if (i == imgs1.length) {
        i = 0;
    }
}
setInterval(changeAds, 3000);





