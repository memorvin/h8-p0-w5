//Logic Challenge - Password Generator

function changeVocals (str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'A'  || str[i] === 'E' || str[i] === 'I' || str[i] === 'O'  || str[i] === 'U' || str[i] === 'a' || str[i] === 'e'  || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      var code = str.charCodeAt(i);
      newStr += String.fromCharCode(code+1);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function reverseWord (str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function setLowerUpperCase (str) {
  var changedStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      changedStr += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      changedStr += str[i].toUpperCase();
    }
  }
  return changedStr;
}

function removeSpaces (str) {
  return str.split(" ").join("");
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var changeVowels = changeVocals(name);
    var reverse = reverseWord(changeVowels);
    var changeCase = setLowerUpperCase(reverse);
    var removeSpace = removeSpaces(changeCase);
    return removeSpace;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'