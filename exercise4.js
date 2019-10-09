//Logic Challenge - Total Digit (Rekursif)

function totalDigitRekursif(angka) {
  var strAngka = String(angka);
  if (strAngka.length === 1) {
    return angka;
  }
  return Number(strAngka[0]) + totalDigitRekursif(Number(strAngka.slice(1)));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5