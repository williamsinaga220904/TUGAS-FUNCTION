function reverseNum(number) {
  const reversedNumber = parseInt(
    number.toString().split("").reverse().join("")
  );
  return reversedNumber;
}

console.log(reverseNum(123)); // Output: 321
console.log(reverseNum(5872)); // Output: 2785
