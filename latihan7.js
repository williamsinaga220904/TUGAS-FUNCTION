function letterCount(str, letter) {
  const letterToSearch = letter.toLowerCase(); // Convert the letter to lowercase to make the search case-insensitive
  const strToSearch = str.toLowerCase(); // Convert the string to lowercase for a case-insensitive search
  let count = 0;

  for (let i = 0; i < strToSearch.length; i++) {
    if (strToSearch[i] === letterToSearch) {
      count++;
    }
  }

  return count;
}

console.log(letterCount("Connect", "c")); // Output: 2
console.log(letterCount("first person", "s")); // Output: 2
