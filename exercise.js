function isUnique(str) {
  // Convert the string to lowercase to ignore letter case
  str = str.toLowerCase();

  // Create a Set to store unique characters
  const charSet = new Set();

  // Loop through each character in the string
  for (let char of str) {
    // If the character is already in the Set, return false
    if (charSet.has(char)) {
      return false;
    }
    // Add character to the Set
    charSet.add(char);
  }

  // If no duplicate characters are found, return true
  return true;
}

console.log(isUnique("World")); // true
console.log(isUnique("JavaScript")); // false
