/**

  Class?
  · Classes are blueprints that when created make objects known as instances
  · Classes are created with the new keyword
  · The constructor function is a special function that gets run when the class is instantiated
  · Instance methods can be added to classes similar to methods in objects
  · Class methods can be added using the static keyword

 */

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverate() {
    let sum = this.scores.reduce((a, b) => { return a + b });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "Enrolling Students"
  }
}

let firstStudent = new Student('Colt', 'Steele', 1);
let secondStudent = new Student('Blue', 'Steele', 2);

console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.addScore(100));
console.log(firstStudent.addScore(90));
console.log(firstStudent.addScore(95));
console.log(firstStudent.addScore(80));
console.log(firstStudent.calculateAverate());



class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);