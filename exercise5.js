//Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {

  function checkAngka(angka) {
    if (String(angka).length === 1) {
      return angka;
    } else if (String(angka).indexOf(0) != -1) {
      return 0;
    }
    return Number(String(angka)[0]) * checkAngka(Number(String(angka).slice(1)));;
  }

  var result = checkAngka(angka);
  if (String(result).length === 1) {
    return result;
  }
    return kaliTerusRekursif(result);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6