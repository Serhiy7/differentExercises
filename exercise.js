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

async function fetchPostsAndComments() {
    try{
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!postResponse.ok){
        throw new Error("Ошибка при загрузке поста");
    }
    const post = await postResponse.json();

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    if(!commentsResponse.ok){
        throw new Error("Ошибка при загрузке комментария");
    }
    const comments = await comments.json();

    console.log(post, comments);
} catch (error) {
    // Обработка ошибок
    console.error("Произошла ошибка:", error);
}
}

fetchPostsAndComments();
