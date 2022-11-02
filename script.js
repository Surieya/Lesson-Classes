
//this
class Car {
  constructor(name, color, Topspeed) {
    //properties
    this.name = name;
    this.color = color;
    this.Topspeed = Topspeed;
    this.currentSpeed = 0;
  }
  drive(speed = 10) {
    // console.log('just drove 2 km');
    this.currentSpeed += speed;
    console.log(`You are driving at ${this.currentSpeed} km/hr`)
  }

  brake() {
    console.log("Breaking");
    this.currentSpeed -= 10;
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log("that was fast!")
      this.currentSpeed = 100;
      console.log(this.currentSpeed)
    })
  }

  stop() {
    console.log('Halt');
    this.currentSpeed = 0;
  }

  getCurrentSpeed() {
    return this.currentSpeed;
  }
}

const ferrari = new Car('ferrari', 'red', 250);
// console.log(ferrari.name);
// console.log(ferrari.color);
// ferrari.drive(20)
// console.log(ferrari.getCurrentSpeed());
// ferrari.brake();
// ferrari.stop();
// console.log(ferrari.getCurrentSpeed());

// we can have methods only inside classes
const numbers = [1, 2, 3]
numbers.push(4);//method
console.log(numbers);

Array.prototype.myPush = function(item) {
  this[this.length] = item;
  return this
}
const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers2.myPush(99));
console.log(numbers2.myPush(98));