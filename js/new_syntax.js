// class User {
//     constructor(firstName, lastName, age, isMale = true) {
//         // if (typeof firstName !== "string") {
//         //     throw new TypeError("first name must be string!");
//         // }
//         // if (typeof lastName !== "string") {
//         //     throw new TypeError("last name must be string!");
//         // }
//         // if (typeof age !== "number") {
//         //     throw new TypeError("age must be number!");
//         // }
//         // if (age < 0 || age > 110) {
//         //     throw new RangeError("not correct age, error");
//         // }
//         // if (typeof isMale !== "boolean") {
//         //     throw new TypeError("isMale must be boolean!");
//         // }

//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//         this._isMale = isMale;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName} `;
//     }
//     toString() {
//         return this.firstName;
//     }
// }

// try {
//     const user3 = new User("Tim", "Qwerrty", 23);
//     user3.lastName = null;
//     console.log(user3.getFullName());
//     console.log(user3);
// } catch (error) {
//     console.log(error);
// }

// console.log("important info!");

// /*написати клас Worker у якого будуть дані: приізвище, ставка за день, кількість відпрацьованих днів за замовчуванням = 0 метод, який повертає зарплатню*/

// class Worker {
//     constructor(fullName, ratePerday, numberOfDaysWorked = 0) {
//         if (typeof fullName !== "string") {
//             throw new TypeError("first name must be string!");
//         }

//         if (typeof ratePerday !== "number") {
//             throw new TypeError("age must be number!");
//         }

//         if (typeof numberOfDaysWorked !== "number") {
//             throw new TypeError("age must be number!");
//         }

//         this._fullName = fullName;
//         this._ratePerday = ratePerday;
//         this._numberOfDaysWorked = numberOfDaysWorked;
//     }

//     get fullName (){
//     return this._fullName=value;
//     }

//     set fullName(value) {
//       if(typeof value !=="string") {
//         throw new TypeError("first name must be string!");
//       }
//       this._fullName = value;
//     }

//     get ratePerday (){
//       return this._ratePerday=value;
//       }
  
//       set ratePerday(value) {
//         if(typeof value !=="number") {
//           throw new TypeError("rate per day must be number!");
//         }
//         this._fullName = value;
//       }

//       get numberOfDaysWorked (){
//         return this._fullName=value;
//         }
    
//         set numberOfDaysWorked(value) {
//           if(typeof value !=="string") {
//             throw new TypeError("first name must be string!");
//           }
//           this._numberOfDaysWorked = value;
//         }
   
//     getSalary() {
//         return this._ratePerday * this._numberOfDaysWorked;
//     }
// }

// try {
//     const worker = new Worker("Worker Test", 500, 3);
//     console.log(worker);
//     console.log(worker.getSalary());
// } catch (error) {
//     console.log(error);
// }
