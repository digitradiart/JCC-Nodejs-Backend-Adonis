// asynchronous
setTimeout(function () {
  console.log('saya dijalankan belakangan');
}, 3000);

console.log('saya dijalankan pertama');

//  membuat function callback
function periksaDokter(nomorAntrian, callback) {
  if (nomorAntrian > 20) {
    callback(false);
  } else if (nomorAntrian < 10) {
    callback(true);
  }
}

// mengonsumsi function callback
let nomorAntrian = 25;
periksaDokter(nomorAntrian, function (sebentarlagi) {
  if (sebentarlagi) {
    console.log('saya akan tunggu dokter');
  } else {
    console.log('saya mau cari angin');
  }
});
