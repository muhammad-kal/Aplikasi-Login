/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variable untuk setiap elemen View
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//Variable untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

//Menambahkan apabila button di klik
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    //Menampung nilai email dan password berdasarkan input
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    if(email == expectedEmail && password == expectedPassword){
      goToHome(); //Jika email dan password benar, berpindah ke halaman home
    }else{
      showPopUp(); //Jika email dan password salah, eksekusi fungsi ini
    }
});
