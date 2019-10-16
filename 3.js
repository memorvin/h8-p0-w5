/**
 * ===============
 * Remedial Recap
 * ===============
 * 
 * Deskripsi: 
 * Sebuah fungsi 'remedialRecap' yang akan mengembalikan Array of Object
 * berisi data student berserta nilai ujian-ujiannya. Student mendapatkan kesempatan
 * remedial sebanyak maksimal 2x. Kriteria student yang dapat mengikuti remedial adalah student
 * yang memiliki nilai dibawah 80.
 * 
 * Asumsi:
 * - Student hanya bisa melakukan remed maksimal 2x untuk setiap mata pelajaran
 * - 1 kali remed student mendapatkan nilai tambahan 10 poin
 * 
 * Contoh:
 *  [{
 *      name: 'Murid 1',
 *      history: 40, 
 *      math: 90,
 *      art: 70
 *    },
 *    {
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *    }]
 *  Hasil yang diharapkan:
 *  [{ 
 *      name: 'Murid 1',
 *      history: [40, 50, 60] // nilai awal 40, kemudian remed pertama 50 dan remed kedua 60
 *      math: 90,
 *      art: [70, 80] // nilai awal 70, kemudian remed pertama 80, karena nilai 
 *                       telah mencapai 80 maka remed hanya dilakukan 1 kali.
 *    },
 *    { 
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *  }]
 *
 * Rules:
 * 1. DILARANG menggunakan built in function apapun kecuali .push() dan .unshift()
 * 2. Output HARUS sesuai dengan contoh yang telah diberikan
*/

function remedialRecap(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].history < 80) {
      var historyScore = [];
      for (var j = data[i].history; j <= 80; j += 10) {
        historyScore.push(j);
      }
      if (historyScore.length >= 4) {
        var historyScoreFinal = [];
        historyScoreFinal.push(historyScore[0],historyScore[1],historyScore[2]);
        data[i]['history'] = historyScoreFinal;
      } else {
        data[i]['history'] = historyScore;
      }
      
    }
    if (data[i].math < 80) {
      var mathScore = [];
      for (var j = data[i].math; j <= 80; j += 10) {
        mathScore.push(j);
      }
      if (mathScore.length >= 4) {
        var mathScoreFinal = [];
        mathScoreFinal.push(mathScore[0],mathScore[1],mathScore[2]);
        data[i]['math'] = mathScoreFinal;
      } else {
        data[i]['math'] = mathScore;
      }
    }
    if (data[i].art < 80) {
      var artScore = [];
      for (var j = data[i].art; j <= 80; j += 10) {
        artScore.push(j);
      }
      if (artScore.length >= 4) {
        var artScoreFinal = [];
        artScoreFinal.push(artScore[0],artScore[1],artScore[2]);
        data[i]['art'] = artScoreFinal;
      } else {
        data[i]['art'] = artScore;
      }
      
    }
    result.push(data[i]);
  }
  return result;
}

var student1 = [
  {
    name: 'Romeo',
    history: 80,
    math: 60,
    art: 100
  },
  {
    name: 'Sierra',
    history: 50,
    math: 100,
    art: 70
  },
  {
    name: 'Alpha',
    history: 100,
    math: 100,
    art: 100
  }
]
console.log(remedialRecap(student1))
  // [
  //   { 
  //     name: 'Romeo',
  //     history: 80,
  //     math: [ 60, 70, 80 ],
  //     art: 100 },
  //   { 
  //     name: 'Sierra',
  //     history: [ 50, 60, 70 ],
  //     math: 100,
  //     art: [ 70, 80 ] },
  //   { 
  //     name: 'Alpha', 
  //     history: 100, 
  //     math: 100, 
  //     art: 100 
  //   } 
  // ]