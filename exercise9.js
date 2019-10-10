//Logic Challenge - Cari Pelaku (Regex)

function cariPelaku(str) {
  var criminals = str.match(/abc/g);
  if (criminals === null) {
    return 0;
  } else {
    return criminals.length;
  }
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2