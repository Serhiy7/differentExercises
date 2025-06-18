// class Car {
//   constructor (brand, year, speed) {
//   this.brand = brand;
//   this.year = year;
//   this.speed = speed;
// }

// getCarInfo() {
//   return `${this.brand}, ${this.year}, ${this.speed} km/ч`;
// }

// increaseSpeed(amount) {
//   this.speed += amount;
//   console.log(`Новая скорость: ${this.speed} км/ч`);

// // Добавляем проверку, если скорость больше 400 км/ч
// if (this.speed > 400) {
//   console.warn("Предупреждение: Скорость выше 400 км/ч! Это слишком быстро!");
// }
// }

// }

// const myCar = new Car("BMW", 2020, 250);
// console.log(myCar.getCarInfo());
// myCar.increaseSpeed(20);

// class BankAccount {
//   constructor(owner, balance) {
//       this.owner = owner;
//       this.balance = balance;
//   }

//   deposit(amount) {
//       this.balance += amount;
//       console.log(`Пополнено: ${amount}$. Баланс: ${this.balance}$`);
//   }

//   withdraw(amount) {
//       if (amount <= 0) {
//       console.log("Сумма для снятия должна быть положительной!");
//       } else if (amount > this.balance) {
//           console.log("Недостаточно средств!");
//       } else {
//           this.balance -= amount;
//           console.log(`Снято: ${amount}$. Баланс: ${this.balance}$`);
//       }
//   }
// }

// class SavingsAccount extends BankAccount {
//   constructor(owner, balance, interestRate) {
//       super(owner, balance);
//       this.interestRate = interestRate;
//   }

//   addInterest() {
//       const interest = (this.balance * this.interestRate) / 100;
//       this.deposit(interest);
//   }
// }

// const myAccount = new SavingsAccount("Иван", 1000, 5);
// myAccount.deposit(500);
// myAccount.addInterest();
// myAccount.withdraw(200);
// myAccount.withdraw(1500);
// myAccount.withdraw(-100);
////////////////////////////////////////////////////////////////////////////////////////////
// const Settings = (function () {
//     let instance;

//     function createInstance() {
//         return {
//             theme: "dark",  // Тема по умолчанию
//             language: "ru",  // Язык по умолчанию
//             changeTheme(newTheme) {
//                 if (newTheme === "light" || newTheme === "dark") {
//                     this.theme = newTheme;
//                     console.log(`Тема изменена на ${this.theme}`);
//                 } else {
//                     console.log("Недопустимая тема. Доступны только 'light' или 'dark'.");
//                 }
//             }
//         };
//     }

//     return {
//         getInstance() {
//             if (!instance) instance = createInstance();
//             return instance;
//         }
//     };
// })();

// const settings1 = Settings.getInstance();
// const settings2 = Settings.getInstance();

// // Проверяем, одинаковые ли экземпляры
// console.log(settings1 === settings2); // true (всегда один объект)

// // Проверка: изменение темы
// settings1.changeTheme("light");  // Тема изменена на light
// console.log(settings1.theme);  // light

// // Проверка: изменение темы на недопустимое значение
// settings1.changeTheme("blue");  // Недопустимая тема. Доступны только 'light' или 'dark'.

// settings1.changeTheme("dark");  //
// console.log(settings1.theme);
/////////////////////////////////////////////////////////////////////

// function wait(seconds) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`Прошло ${seconds} секунд`), seconds * 1000);
//     });
// }

// wait(3).then(console.log);
/////////////////////////////////////////////////////////////////////

// async function fetchPostsAndComments() {
//     try{
//     const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     if(!postResponse.ok){
//         throw new Error("Ошибка при загрузке поста");
//     }
//     const post = await postResponse.json();

//     const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
//     if(!commentsResponse.ok){
//         throw new Error("Ошибка при загрузке комментария");
//     }
//     const comments = await commentsResponse.json();

//     console.log(post, comments);
// } catch (error) {
//     // Обработка ошибок
//     console.error("Произошла ошибка:", error);
// }
// }

// fetchPostsAndComments();
///////////////////////////////////////////////////////////////////////////////////

// const findLongestWord = (sentence) =>
//     sentence.split(" ").reduce((longest, word) =>
//         word.length > longest.length ? word : longest, ""
//     );

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
//////////////////////////////////////////////////////////////////////////////////////

// async function getUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await res.json();
//     users.forEach(user => console.log(user.name, user.email));
//   }

//   getUsers();

// async function addNewPost(title, body) {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, body }),
//     });

//     if (!res.ok) {
//       throw new Error("Ошибка при создании поста");
//     }

//     const post = await res.json();
//     console.log(post);
//   } catch (error) {
//     console.error("Произошла ошибка:", error);
//   }
// }

// addNewPost("Мой пост", "Привет мир!");

// function countVowels(str) {
//   const vowels = "aeiou";
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("hello World"));

// function countVowels(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// console.log(countVowels("hello World")); // Output: 3

// function findLargestNumber(numbers) {
//   return numbers.reduce(
//     (max, current) => (current > max ? current : max),
//     numbers[0]
//   );
// }

// const myArray = [10, 20, 30, 40];

// function calculateAverage(numbers) {
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((total, num) => total + num, 0);
//   return sum / numbers.length;
// }

// console.log(calculateAverage(myArray));

// const removeDuplicates = function (array) {
//   return (newArray = array.filter((el, index) => array.indexOf(el) === index));
// };

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// function isPalindrome(str) {
//   // Convert the string to lowercase to ignore case differences
//   const normalized = str.toLowerCase();

//   // Initialize two pointers
//   let left = 0;
//   let right = normalized.length - 1;

//   // Loop until the pointers meet in the middle
//   while (left < right) {
//     if (normalized[left] !== normalized[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// // Testing the function:
// console.log(isPalindrome("level")); // Output: true
// console.log(isPalindrome("frontend")); // Output: false

// function findLongestWord(str) {
//   // Split the sentence into an array of words by space
//   const words = str.split(" ");
//   // Use reduce to find the longest word:
//   // The reducer function compares the current longest word with the current word.
//   // If the current word is longer, it becomes the new longest word.
//   const longest = words.reduce((longestSoFar, currentWord) => {
//     return currentWord.length > longestSoFar.length
//       ? currentWord
//       : longestSoFar;
//   }, "");

//   return longest;
// }
// // Testing the function:
// console.log(findLongestWord("I love JavaScript and frontend")); // Output: "JavaScript"

// const sumPositiveNumbers = function (array) {
//   const positiveNum = array.filter((el) => el > 0);
//   const sum = positiveNum.reduce((sum, el) => el + sum, 0);
//   return sum;
// };

// console.log(sumPositiveNumbers([1, -2, 3, 4, -5]));

// console.log("holidays");

// function capitalizeWords(str) {
//   let myArray = str.split(" ");
//   myArray = myArray.map((word) => {
//     if (word.length > 0) {
//       return word[0].toUpperCase() + word.slice(1);
//     }
//     return word;
//   });
//   return myArray.join(" ");
// }

// console.log(capitalizeWords("frontend development is fun"));

// function countWords(str) {
//   let quantity = str.split(" ");
//   return quantity.length;
// }

// console.log(countWords("Frontend development is exciting"));

// function repeatString(string, num) {
//   let resoult = "";
//   while (num > 0) {
//     resoult += string;
//     num--;
//   }
//   return resoult;
// }

// console.log(repeatString("Frontend", 5));

// function calculateFactorial(num) {
//   let result = 1;
//   while (num > 0) {
//     result *= num;
//     num--;
//   }
//   return result;
// }

// console.log(calculateFactorial(5));
// function flattenArray(array) {
//   let result = [];
//   for (let element of array) {
//     if (Array.isArray(element)) {
//       result = result.concat(flattenArray(element));
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6]));

// flattenArray([1, [2, [3, 4], 5], 6]);

// function removeFalsyValues(arr) {
//   // return arr.filter(Boolean);
//   return arr.filter((el) => el);
// }

// console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN]));

// function mergeArraysUnique(arr1, arr2) {
//   let uniqueArray = arr1.concat(arr2);
//   return uniqueArray.filter((el, index) => uniqueArray.indexOf(el) === index);
// }

// console.log(mergeArraysUnique([1, 2, 3], [3, 4, 5]));
// Expected output: [1, 2, 3, 4, 5]

// function mergeArraysUnique(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(mergeArraysUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

// function toggleClass(element, className) {
//   if (element.classList.contains(className)) {
//     element.classList.remove(className);
//   } else {
//     element.classList.add(className);
//   }
//   return element;
// }

// function toggleClass(element, className) {
//   element.classList.toggle(className);
//   return element;
// }

// const person = { firstName: "John", lastName: "Doe" };

// function getFullName({ firstName, lastName }) {
//   helloString = `Hello, ${firstName} ${lastName}!`;
//   console.log(helloString);
// }

// getFullName(person);

// async function fetchData() {
//   try {
//     // Wait for 1 second by creating a new Promise that resolves after 1000ms
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     // After the delay, return the message
//     return "Data fetched successfully!";
//   } catch (error) {
//     // If any error occurs during the process, return an error message
//     return "An error occurred.";
//   }
// }

// Example usage:
// fetchData().then((message) => console.log(message));

// function first() {
//   let a = 0;

//   return function second() {
//     a++;
//     console.log(a);
//   };
// }

// first();

// async function getUserEmails() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response) {
//       throw new Error(
//         `Network response was not ok (status ${response.status})`
//       );
//     }
//     const users = await response.json();
//     const emails = users.map((user) => user.email);
//     return emails;
//   } catch (error) {
//     console.error("Failed to fetch user emails:", error);
//     return [];
//   }
// }

// function savePreferences(preferences) {
//   const jsonString = JSON.stringify(preferences);
//   localStorage.setItem("prefs", jsonString);
// }

// function loadPreferences() {
//   const jsonString = localStorage.getItem("prefs");

//   if (jsonString !== null) {
//     try {
//       return JSON.parse(jsonString);
//     } catch (e) {
//       console.warn("Could not parse prefs:", e);
//       return {};
//     }
//   } else {
//     return {};
//   }
// }

// const prefs = { theme: "dark", fontSize: "16px" };
// savePreferences(prefs);

// const loaded = loadPreferences();
// console.log(loaded);

// function toggleClass(element, className) {
//   if (element.classList.contains(className)) {
//     element.classList.remove(className);
//   } else {
//     element.classList.add(className);
//   }
//   return element;
// }

// function toggleClass(element, className) {
//   element.classList.toggle(className);
//   return element;
// }

const person = { firstName: "John", lastName: "Doe" };

function getFullName({ firstName, lastName }) {
  helloString = `Hello, ${firstName} ${lastName}!`;
  console.log(helloString);
}

getFullName(person);

async function fetchPostsAndComments() {
  try {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!postResponse.ok) {
      throw new Error("Ошибка при загрузке поста");
    }
    const post = await postResponse.json();

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    );
    if (!commentsResponse.ok) {
      throw new Error("Ошибка при загрузке комментария");
    }
    const comments = await commentsResponse.json();

    console.log(post, comments);
  } catch (error) {
    // Обработка ошибок
    console.error("Произошла ошибка:", error);
  }
}

fetchPostsAndComments();
