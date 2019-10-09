//Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
  return arrNumber.sort(function(a, b){return b-a});
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) {
    return "''";
  } else {
    var total = 1; 
    for (var i = 1; i < arrNumber.length; i++) {
      if (arrNumber[i] == arrNumber[0]) {
        total += 1;
      }
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + total + ' kali';
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''