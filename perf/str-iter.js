
"uses strict";

// 100 chars
var text100 = "A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a w";

// 2048 (2K) chars
var text2K = "A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is neither prime nor composite. A prime number is a whole number greater than 1 whose only factors are 1 and itself. A factor is a whole number that can be divided evenly into another number. The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. Numbers that have more than two factors are called composite numbers. The number 1 is a";

var ITERATIONS = 10_000

function test(input, name, fn) {
  console.time(name)
  for (var c = 0; c < ITERATIONS; c++) {
    var output = [];
    fn(input, output);
  }
  console.timeEnd(name)
}

// --- SMALL
test(text100, "--- SUBSTRING TEST\t(100)\t", (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.substring(i, i + 1));
  }
});
test(text100, "--- CHAR-AT TEST\t(100)\t", (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.charAt(i));
  }
});
test(text100, '--- CHARCODE-AT TEST\t(100)\t', (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.charCodeAt(i));
  }
});
test(text100, '--- STR-SPLIT TEST\t(100)\t', (input, output) => {
  var spl = input.split('');
  for (var i = 0; i < spl.length; i++) {
    output.push(spl[i]);
  }
});

console.log('----------------------------')

// --- BIG
test(text2K, "--- SUBSTRING TEST\t(2K)\t", (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.substring(i, i + 1));
  }
});
test(text2K, "--- CHAR-AT TEST\t(2K)\t", (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.charAt(i));
  }
});
test(text2K, '--- CHARCODE-AT TEST\t(2K)\t', (input, output) => {
  for (var i = 0; i < input.length; i++) {
    output.push(input.charCodeAt(i));
  }
});
test(text2K, '--- STR-SPLIT TEST\t(2K)\t', (input, output) => {
  var spl = input.split('');
  for (var i = 0; i < spl.length; i++) {
    output.push(spl[i]);
  }
});
