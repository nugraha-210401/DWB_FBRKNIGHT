const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  const type = password.getAttribute('type');

  if (type === 'password') {
    document.getElementById('password').type = 'text';
    document.getElementById('mybutton').innerHTML = '<i class="bi bi-eye-slash"><i>';
  } else {
    document.getElementById('password').type = 'password';
    document.getElementById('mybutton').innerHTML = '<i class="bi bi-eye><i>';
  }
  // this.classList.toggle('bi bi-eye');
  // this.classList.toggle('bi bi-eye-slash');
});

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#password1');

togglePassword1.addEventListener('click', function () {
  const type1 = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type1);

  this.classList.toggle('bi bi-eye');
  this.classList.toggle('bi bi-eye-slash');
});

function validateNamaDpn() {
  var namaDepan = document.getElementById('namadepan').value;
  if (namaDepan == '') {
    document.getElementById('myForm').style.border = '1px solid red';
    document.getElementById('psnNamaDpn').innerHTML = 'Isi nama depanmu terlebih dahulu';
  } else {
    document.getElementById('myForm').style.border = 'none';
    document.getElementById('psnNamaDpn').innerHTML = '';
  }
}
function validateNamaBlkg() {
  var namaBelakang = document.getElementById('namabelakang').value;
  if (namaBelakang == '') {
    document.getElementById('myForm1').style.border = '1px solid red';
    document.getElementById('psnNamaBlkg').innerHTML = 'Isi nama belakangmu terlebih dahulu';
  } else {
    document.getElementById('myForm1').style.border = 'none';
    document.getElementById('psnNamaBlkg').innerHTML = '';
  }
}
function validateEmail() {
  var email = document.getElementById('email').value;
  if (email == '') {
    document.getElementById('myForm2').style.border = '1px solid red';
    document.getElementById('psnEmail').innerHTML = 'Isi emailmu terlebih dahulu';
  } else {
    document.getElementById('myForm2').style.border = 'none';
    document.getElementById('psnEmail').innerHTML = '';
  }
}
function validateEmail1() {
  var atpos = email.indexOf('@');
  var dotpos = email.lastIndexOf('.');
  if (atpos < 2 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    document.getElementById('myForm2').style.border = '1px solid red';
    document.getElementById('psnEmail').innerHTML = 'Email Tidak Valid';
  } else {
    document.getElementById('myForm2').style.border = 'none';
    document.getElementById('psnEmail').innerHTML = '';
  }
}
function finalValidateEmail() {
  if (validateEmail() == true) {
    return true;
  } else {
    return false;
  }
}
function validatePass() {
  var password = document.getElementById('password').value;
  if (password == '') {
    document.getElementById('myForm3').style.border = '1px solid red';
    document.getElementById('psnPass').innerHTML = 'Isi Passwordmu terlebih dahulu';
  } else {
    document.getElementById('myForm3').style.border = 'none';
    document.getElementById('psnPass').innerHTML = '';
  }
}
function validateKonfirmPass() {
  var konfirmPass = document.getElementById('password1').value;
  if (konfirmPass == '') {
    document.getElementById('myForm4').style.border = '1px solid red';
    document.getElementById('psnKonfirmPass').innerHTML = 'Konfirmasi Password terlebih dahulu';
  } else {
    document.getElementById('myForm4').style.border = 'none';
    document.getElementById('psnKonfirmPass').innerHTML = '';
  }
}
