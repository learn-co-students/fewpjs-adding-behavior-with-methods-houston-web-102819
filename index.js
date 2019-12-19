// Your code here
class Cat {
  constructor(name, breed) {
    this.name = name
    this.sex = breed
  }
  speak() {
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name
    this.sex = breed
  }
  speak() {
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, breed) {
    this.name = name
    this.sex = breed
  }
  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }
}