 
function ambilIsi() {
  let isiInput = document.getElementById("myInput");
  let inputValue = isiInput.value;
  let closeButton = document.querySelector(".btn-close");
  if (closeButton) {
    closeButton.click();
  }
  Swal.fire({
    title: inputValue,
    text: "Ini benar nama kamu?",
    icon: "question",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      let tampilButton = document.querySelector("#tampilModal");
      if (tampilButton) {
        tampilButton.click();
      }
      // Mengubah judul modal
      let inputGrup = document.querySelector("#isiInput");
      let button = document.querySelector(".lanjut");
      let modalTitle = document.querySelector(".modal-title");
      let pesan = document.querySelector(".pesan");

      modalTitle.textContent = "Hai, " + inputValue;
      pesan.textContent =
        "hari ini hari yang ditunggu-tunggu maybe ahaha, aku mau bilang makasiii bangett, not just for friends, but for someone special in my life hehe so inggris. kamuu ituu sosok yang telah mengisi hari-hariku dengan tawa, kehangatan, dan kadang bikin bete, badmood,salting eaaa. akuu bersyukur buangettt karena punyaa " +
        inputValue +
        " dalam hidupku. Kamu adalah berkah yang tak ternilai bagiku, dan aku berjanji untuk selalu ada untukmu, seperti yang kamu selalu ada untukku(aku bete malaa ditinggal). makasiiii," +
        inputValue +
        " , karena telah membuat hidupku menjadi lebih indah dan sedikit berwarna ahaha, karna kamu itu salah satu kebahagiaanku.Hari ini, dalam ulang tahunmu yang istimewa ini, aku berdoa agar kamu mendapatkan semua yang kamu impikan. Semoga kebahagiaan, dan kesuksesan selalu mengiringi langkah-langkahmu. Terima kasih sudah menjadi seseorang, dan aku minta maaf klo cuma bisa ngucapin lewat beginian. Selamat ulang tahun yang luar biasa! 🎂🎉❤️";
      button.textContent = "klik lagi";
      button.onclick = function () {
        if (closeButton) {
            closeButton.click();}
        Swal.fire(
            'I LOVE YOU',
            'always love you',
            'success'
          )
      };
      // Menghilangkan elemen input
      inputGrup.style.display = "none";
    }
  });
}
