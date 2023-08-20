function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(item => item.username === username && item.password === password);

            if (user) {
                alert("Đăng nhập thành công!");
                window.location.href = "http://127.0.0.1:5501/C%E1%BB%B1u%20SV/Trang%20ch%E1%BB%A7/trangchu.html";
                return false;
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
                return false;
            }
        })
        .catch(error => console.error('Error reading JSON file:', error));
}