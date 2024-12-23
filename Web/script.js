
const chatBody = document.getElementById('chat-body');
const pesanInput = document.getElementById('pesan');
const kirimButton = document.getElementById('kirim');

// Fungsi untuk menampilkan pesan
function tampilkanPesan(pesan, jenis) {
  const elemenPesan = document.createElement('div');
  elemenPesan.classList.add(jenis);
  elemenPesan.innerText = pesan;
  chatBody.appendChild(elemenPesan);
}

// Fungsi untuk mengirim pesan
function kirimPesan() {
  const pesan = pesanInput.value.trim();
  if (pesan !== '') {
    tampilkanPesan(pesan, 'pesan-pengguna');
    // Fungsi untuk merespons pesan pengguna
    const respons = meresponsPesan(pesan);
    tampilkanPesan(respons, 'pesan-chatbot');
    pesanInput.value = '';
  }
}

// Fungsi untuk merespons pesan pengguna
function meresponsPesan(pesan) {
  // Contoh respons
  if (pesan.toLowerCase() === 'hai') {
    return 'Hai juga!';
  } else if (pesan.toLowerCase() === 'siapa kamu?') {
    return 'Saya adalah chatbot!';
  } else {
    return 'Saya tidak mengerti!';
  }
}

kirimButton.addEventListener('click', kirimPesan);
