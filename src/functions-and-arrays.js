// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  let lengthy_word;
  maxlength = 0;
  if (words.length == 0) return null;
  for (var i = 0; i < words.length; i++) {
    var largest_Word = words[i].length;
    if (largest_Word > maxlength) {
      maxlength = largest_Word;
      lengthy_word = words[i];
    }
  }
  return lengthy_word;
}

// Progression #3: Net Price

const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];

var sum = 0;

function netPrice(prices) {
  for (i = 0; i < prices.length; i++) {
    sum = +prices[i]
  }
  return sum;
}



// Progression #4: Calculate the average



// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var sum = 0;
  if (numbersAvg.length == 0) {
    return null;
  } else {
    for (i = 0; i < numbersAvg.length; i++) {
      sum = +numbersAvg[i]
    }

  }
  return sum / numbersAvg.length
}


// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];



// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(wordsFind, element) {
  if (wordsFind.length == 0) {
    return null
  }

  for (i = 0; i < wordsFind.length; i++) {
    if (element == wordsFind[i]) {
      return true;
    }
  }

}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(wordsCount, element) {
  if (wordsCount.length == 0) return 0;
  var counter = 0;
  for (var i = 0; i < wordsCount.length; i++)
    if (wordsCount[i] == element) counter++;
  return counter;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];