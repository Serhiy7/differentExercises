class Car {
  constructor (brand, year, speed) {
  this.brand = brand;
  this.year = year;
  this.speed = speed;
}

getCarInfo() {
  return `${this.brand}, ${this.year}, ${this.speed} km/ч`;
}

increaseSpeed(amount) {
  this.speed += amount;
  console.log(`Новая скорость: ${this.speed} км/ч`);


// Добавляем проверку, если скорость больше 400 км/ч
if (this.speed > 400) {
  console.warn("Предупреждение: Скорость выше 400 км/ч! Это слишком быстро!");
}
}

}

const myCar = new Car("BMW", 2020, 250);
console.log(myCar.getCarInfo());
