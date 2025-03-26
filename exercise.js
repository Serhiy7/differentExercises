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

import { useState, useEffect } from "react";

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "ТВОЙ_API_KEY";
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!res.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // Выполняется повторно при изменении city

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>🌡️ Температура: {weather.main.temp} °C</p>
      <p>📖 Погода: {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}

export default Weather;
