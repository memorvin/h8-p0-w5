/**
 * ****************
 * Advanced Seating
 * ****************
 * 
 * [Description]
 * trainSeating adalah sebuah function yang menerima parameter berupa 
 * array of object. Array of Object ini merepresentasikan penumpang yang naik ke dalam kereta.
 * Tiap-tiap penumpang/object memiliki stasiun awal dan stasiun tujuan mereka.
 * 
 * Ada lima stasiun: A B C D dan E
 * 
 * [Instuction]
 * Function ini harus mengeluarkan hasil sebuah object yang memiliki isi key
 * berdasarkan jumlah stasiun yang dilewati.
 * Dan tiap-tiap key memiliki value array yang berisi object penumpang
 * yang masuk dalam kelompok tersebut berdasarkan jumlah stasiun yang dia lewati.
 * 
 * [Example]
 * Misalkan ada 2 penumpang:
 * 
 * Penumpang 1:
 * nama: Budi
 * awal: B
 * akhir: D
 * seat: C9
 * 
 * Penumpang 2:
 * nama: Bani
 * awal: A
 * akhir: E
 * seat: CR7
 * 
 * Budi naik dari Stasiun B dan turun di Stasiun D => jaraknya 2 stasiun
 * Bani naik dari Stasiun A dan turun di Stasiun E => jaraknya 4 stasiun
 * 
 * Maka, Budi dengan seat C9 akan ditempatkan di dalam kelompok '2'.
 * Bani dengan seat CR7 akan ditempatkan di dalam kelompok '4'.
 * 
 * CONTOH OUTPUT:
 * {
 * 	'2': [{nama: 'Budi', seat: 'C9'}],
 * 	'4' : [{nama: 'Bani', seat: 'CR7'}
 * }
 * Note: Lihat juga contoh test-case untuk case-case yang lain.
 * 
 * [RULES]
 * 1. Dilarang menggunakan built-in function lain selain .push dan .unshift
 */

function trainSeating(penumpang) {
  var result = {};
  
  if (penumpang.length === 0) {
    return result;
  }
  
  var destinations = ['A', 'B', 'C', 'D', 'E'];
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];

  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i].awal === destinations[0]) {
      penumpang[i].awal = 0;
    } else if (penumpang[i].awal === destinations[1]) {
      penumpang[i].awal = 1;
    } else if (penumpang[i].awal === destinations[2]) {
      penumpang[i].awal = 2;
    } else if (penumpang[i].awal === destinations[3]) {
      penumpang[i].awal = 3;
    } else if (penumpang[i].awal === destinations[4]) {
      penumpang[i].awal = 4;
    }
  }
  
  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i].akhir === destinations[0]) {
      penumpang[i].akhir = 0;
    } else if (penumpang[i].akhir === destinations[1]) {
      penumpang[i].akhir = 1;
    } else if (penumpang[i].akhir === destinations[2]) {
      penumpang[i].akhir = 2;
    } else if (penumpang[i].akhir === destinations[3]) {
      penumpang[i].akhir = 3;
    } else if (penumpang[i].akhir === destinations[4]) {
      penumpang[i].akhir = 4;
    }
  }

  for (var i = 0; i < penumpang.length; i++) {
    penumpang[i].jarak = Math.abs(penumpang[i].awal - penumpang[i].akhir)
  }

  for (var i = 0; i < penumpang.length; i++) {
    var person = {nama: penumpang[i]['nama'],
    seat: penumpang[i]['seat']}
    if (penumpang[i]['jarak'] === 1) {
      arr1.push(person);
    } else if (penumpang[i]['jarak'] === 2) {
      arr2.push(person);
    } else if (penumpang[i]['jarak'] === 3) {
      arr3.push(person);
    } else if (penumpang[i]['jarak'] === 4) {
      arr4.push(person);
    }
  }

  result['1'] = arr1;
  result['2'] = arr2;
  result['3'] = arr3;
  result['4'] = arr4;

  return result;
}

//Test Cases
console.log(
  trainSeating([
    {
      nama: 'Awtian',
      awal: 'A',
      akhir: 'B',
      seat: 'B3'
    },
    {
      nama: 'Klonoa',
      awal: 'A',
      akhir: 'D',
      seat: 'V1'
    },
    {
      nama: 'Azizy',
      awal: 'D',
      akhir: 'E',
      seat: 'A2'
    },
    {
      nama: 'Crash',
      awal: 'C',
      akhir: 'E',
      seat: 'R1'
    },
    {
      nama: 'Sena',
      awal: 'B',
      akhir: 'D',
      seat: 'R3'
    },
    {
      nama: 'Heri',
      awal: 'B',
      akhir: 'E',
      seat: 'R10'
    },
    {
      nama: 'Retsu',
      awal: 'D',
      akhir: 'E',
      seat: 'V2'
    },
    {
      nama: 'Hiruma',
      awal: 'B',
      akhir: 'E',
      seat: 'A666'
    },
    {
      nama: 'Tsubasa',
      awal: 'B',
      akhir: 'D',
      seat: 'V6'
    },
    {
      nama: 'Kenshin',
      awal: 'A',
      akhir: 'E',
      seat: 'V8'
    }
  ])
);
/*
Output :
{
  '1':
    [ { nama: 'Awtian', seat: 'B3' },
      { nama: 'Azizy', seat: 'A2' },
      { nama: 'Retsu', seat: 'V2' } ],
  '2':
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' },
      { nama: 'Tsubasa', seat: 'V6' } ],
  '3':
    [ { nama: 'Klonoa', seat: 'V1' },
      { nama: 'Heri', seat: 'R10' },
      { nama: 'Hiruma', seat: 'A666' } ],
  '4': [ { nama: 'Kenshin', seat: 'V8' } ]
}
*/

console.log(trainSeating([])); //{}