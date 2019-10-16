/**
 * =================
 * Powerbank Optimal
 * =================
 * 
 * [Description]
 * Sebuah powerbank memiliki ukuran, daya simpan, dan harga
 * yang berbeda-beda dengan powerbank lainnya.
 * 
 * Daya simpan powerbank adalah berapa mAh listrik yang disimpan,
 * contohnya: 5000 mAh, 10000 mAh, 3000 mAh.
 * 
 * Ukuran powerbank adalah (lebar x panjang x tebal) dari powerbank tersebut.
 * Untuk kali ini, asumsikan ukurannya ada dalam cm, jadi volume nya akan jadi cm3.
 * 
 * [Instructions]
 * Buatlah function untuk mengecek:
 * 1 - rasio daya simpan dibanding ukuran (volume) sebuah powerbank.
 *     (berapa mAh/cm3)
 * 2 - rasio harga dibanding daya simpan sebuah powerbank.
 *     (berapa idr/mAh)
 * Bulatkan kedua rasio tersebut ke 1 desimal poin terdekat.
 * 
 * Buat objek baru dengan merk, dua rasio tersebut, dan Grade.
 * 
 * Jika rasio daya simpan / ukuran diatas 100 mAh/cm3,
 * berikan Grade "A" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 50 mAh/cm3,
 * berikan Grade "B" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 0 mAh/cm3
 * berikan Grade "C" ke powerbank tersebut.
 * Jika rasio tidak ada , jangan berikan grade ke powerbank tersebut.
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 */

function checkRatio(powerbank) {
  if (powerbank === undefined) {
    return 'Invalid Input';
  }

  var lebarNum = '';
  lebarSpace = powerbank.lebar.indexOf(' ');
  for (var i = 0; i < lebarSpace; i++) {
    lebarNum += powerbank.lebar[i];
  }

  var panjangNum = '';
  panjangSpace = powerbank.panjang.indexOf(' ');
  for (var i = 0; i < panjangSpace; i++) {
    panjangNum += powerbank.panjang[i];
  }
  
  var tebalNum = '';
  tebalSpace = powerbank.tebal.indexOf(' ');
  for (var i = 0; i < tebalSpace; i++) {
    tebalNum += powerbank.tebal[i];
  }

  var dayaSimpanNum = '';
  dayaSimpanSpace = powerbank.dayaSimpan.indexOf(' ');
  for (var i = 0; i < dayaSimpanSpace; i++) {
    dayaSimpanNum += powerbank.dayaSimpan[i];
  }

  var mahToSize = dayaSimpanNum/(panjangNum*lebarNum*tebalNum);
  if (mahToSize % 1 !== 0) {
    mahToSize = mahToSize.toFixed(1);
  }

  var priceToMah = powerbank.harga/dayaSimpanNum;
  if (priceToMah % 1 !== 0) {
    priceToMah = priceToMah.toFixed(1);
  } 

  var grade;
  
  if (mahToSize > 100) {
    grade = 'A';
  } else if (mahToSize > 50) {
    grade = 'B';
  } else if (mahToSize > 0) {
    grade = 'C';
  }
  
  var result = {
    merk: powerbank.merk,
    mAhTosize: mahToSize + ' mAh/cm3',
    priceTomAh: priceToMah + ' idr/mAh',
    'Grade': grade,
  }
  return result;
}

var pow1 = {
  lebar: '5 cm',
  panjang: '10 cm',
  tebal: '1 cm',
  dayaSimpan: '7000 mAh',
  merk: 'Hipp0',
  harga: 300000
}
console.log(checkRatio(pow1))
console.log()
// { merk: 'Hipp0',
//   mAhToSize: '140 mAh/cm3',
//   priceTomAh: '42.9 idr/mAh',
//   Grade: 'A' }

var pow2 = {
  lebar: '3 cm',
  panjang: '7 cm',
  tebal: '3 cm',
  dayaSimpan: '3350 mAh',
  merk: 'Anker',
  harga: 270000
}
console.log(checkRatio(pow2))
console.log()
// { merk: 'Anker',
//   mAhToSize: '53.2 mAh/cm3',
//   priceTomAh: '80.6 idr/mAh',
//   Grade: 'B' }

var pow3 = {
  lebar: '15 cm',
  panjang: '20 cm',
  tebal: '2 cm',
  dayaSimpan: '18000 mAh',
  merk: 'Energizer',
  harga: 1512000
}
console.log(checkRatio(pow3))
console.log()
// { merk: 'Energizer',
//   mAhToSize: '30 mAh/cm3',
//   priceTomAh: '84 idr/mAh',
//   Grade: 'C' }

console.log(checkRatio())
// Invalid Input