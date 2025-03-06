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


class BankAccount {
  constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
  }

  deposit(amount) {
      this.balance += amount;
      console.log(`Пополнено: ${amount}$. Баланс: ${this.balance}$`);
  }

  withdraw(amount) {
      if (amount <= 0) {
      console.log("Сумма для снятия должна быть положительной!");
      } else if (amount > this.balance) {
          console.log("Недостаточно средств!");
      } else {
          this.balance -= amount;
          console.log(`Снято: ${amount}$. Баланс: ${this.balance}$`);
      }
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
      super(owner, balance);
      this.interestRate = interestRate;
  }

  addInterest() {
      const interest = (this.balance * this.interestRate) / 100;
      this.deposit(interest);
  }
}

const myAccount = new SavingsAccount("Иван", 1000, 5);
myAccount.deposit(500);
myAccount.addInterest(); 
myAccount.withdraw(200); 
myAccount.withdraw(1500); 
myAccount.withdraw(-100); 
