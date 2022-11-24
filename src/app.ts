interface Named {
  readonly name: string; //force to initialize once
}
interface Greetable extends Named {
  //intefaces can exptends from multiple interfaces   //interface Greetable extends Named, AnotherOne
  greet(phrase: string): void; //parameters and what the method should return
}

//every object that is instance of class Person should have Greetable properties, and Greetable inforces to have Named properties
class Person implements Greetable {
  //class Person implements Greetable, Named{} also possible if Greetable doesn't extends from Named
  public name: string;
  public age: number;
  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
  printName() {
    console.log(this.name);
  }
  printAge() {
    console.log(this.age);
  }
}

let person2: Greetable; //we later create an object based on interface

person2 = new Person('Max', 30);

person2.greet('Hi there, I am');