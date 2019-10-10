//Logic Challenge - Hapus Simbol (Regex)

function hapusSimbol(str) {
  var myRegex = /[a-z|0-9]| /ig;
  var tempResult = str.match(myRegex);
  if (tempResult !== null) {
    var result = tempResult.join('');
  }
  return result;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100