function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(item => item.username === username && item.password === password);

            if (user) {
                alert("Đăng nhập thành công!");
                window.location.href = "../Cuu_SV/Trangchu/trangchu.html";
                return false;
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
                return false;
            }
        })
        .catch(error => console.error('Error reading JSON file:', error));
}