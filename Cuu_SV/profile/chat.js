//Ads changes
var index=0;
changeImg = function(){
    var imgs = ["/Cuu_SV/profile/img/sv1.1.jpg", "/Cuu_SV/profile/img/sv1.2.jpg","/Cuu_SV/profile/img/sv1.3.jpg","/Cuu_SV/profile/img/sv1.4.jpg","/Cuu_SV/profile/img/sv1.5.jpg", "/Cuu_SV/profile/img/sv1.6.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index==imgs.length){
        index=0;
    }
}
setInterval(changeImg, 2000);

//Upload avatar
function uploadAvt(){
    const avtInput = document.getElementById('avt-upload');
    avtInput.click(); //Bấm button edit-avt
    //Khi chọn ảnh
    avtInput.addEventListener('change', function(event){
        const selectedFile = event.target.files[0]; //Lay file anh da chon
        if(selectedFile){
            const avtImage = document.querySelector('.avatar');
            const reader = new FileReader();
            //Xử lý khi đọc thành công
            reader.onload = function(e){
                avtImage.src = e.target.result;
            };
            //Đọc ảnh dưới dạng url
            reader.readAsDataURL(selectedFile);
        }
    })
}

function changeAlbumImage(imageId) {
    const albumInput = document.getElementById(`album-upload${imageId}`);
    if (albumInput) {
        albumInput.click();
        // Xử lý sự kiện khi người dùng chọn hình ảnh
        albumInput.addEventListener('change', function(event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const targetImage = document.getElementById(imageId);
                const reader = new FileReader();
                reader.onload = function(e) {
                    targetImage.src = e.target.result;
                };
                reader.readAsDataURL(selectedFile);
            }
        });
    }
}

//Edit info
function switchToEditMode(){
    const editBtn = document.querySelector('.btn-edit');
    const editContent = document.querySelectorAll('.editable-content');

    if(editBtn.textContent === 'Edit info'){
        editBtn.textContent = 'Save changes';

        editContent.forEach(span=>{
            // Tạo thẻ input
            const inpEle = document.createElement('input');
            inpEle.type = 'text';
            inpEle.value = span.textContent;
            span.innerHTML = ''; //Xóa nội dung hiện có trong span
            span.appendChild(inpEle); //Thêm thẻ input
        })
    } else {
        editBtn.textContent = 'Edit info';
        editContent.forEach(span=>{
            // Tìm thẻ input bên trong span
            const inpEle = span.querySelector('input');
            // in nội dung bên trong input ra span
            span.innerHTML = inpEle.value;
        })
    }
}

//Copy tên từ span.friend-name đặt vào li.name
document.addEventListener("DOMContentLoaded", function() {
    const friendItems = document.querySelectorAll(".friends > li");
    friendItems.forEach(function(item) {
        const span = item.querySelector(".friend-name");
        const name = span.textContent;
        const menuName = item.querySelector(".sub-menu li.name");
        menuName.innerHTML = "<strong>Name: </strong>" + name;
    });
});


//Tìm bạn bè
function searchFriends() {
    const searchInput = document.getElementById("searchInput");
    const friendList = document.querySelectorAll(".friends > li");
    const searchText = searchInput.value.toLowerCase();
    friendList.forEach((friend) => {
        const friendName = friend.querySelector(".friend-name").textContent.toLowerCase();
        if (friendName.includes(searchText)) { 
            friend.classList.add("highlighted");
            setTimeout(() => {
                friend.classList.remove("highlighted");
            }, 300); //Xóa highlighted mỗi 300ms tạo hiệu ứng nhấp nháy
        } else {
            friend.classList.remove("highlighted"); //Nếu không đúng tên thì xóa highlighted
        }
    });
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