function login() {
  var user = document.getElementById("login-username").value;
  var pass = document.getElementById("login-password").value;

  const jsonData = localStorage.getItem('userData');

  if (jsonData) {
    const userData = JSON.parse(jsonData);

    if (user === userData.user && pass === userData.pass) {
      alert('Đăng nhập thành công!');
      return true;
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng.');
      return false;
    }
  } else {
    alert('Không tìm thấy thông tin người dùng.');
    return false;
  }
}

function validateForm() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var repass = document.getElementById("password-repeat").value;

  if (user === '' || pass === '' || repass === '') {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return false;
  }
  if (pass !== repass) {
    alert("Mật khẩu nhập lại không đúng!");
    return false;
  }

  const userData = {
    user: user,
    pass: pass
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log('Đã lưu thông tin người dùng vào Local Storage.');
  alert("Đăng ký thành công!")
  return true;
}

