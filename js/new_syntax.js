class User {
    constructor(firstName, lastName, age, isMale = true) {
        if (typeof firstName !== "string") {
            throw new TypeError("first name must be string!");
        }
        if (typeof lastName !== "string") {
            throw new TypeError("last name must be string!");
        }
        if (typeof age !== "number") {
            throw new TypeError("age must be number!");
        }
        if (age < 0 || age > 110) {
            throw new RangeError("not correct age, error");
        }
        if (typeof isMale !== "boolean") {
            throw new TypeError("isMale must be boolean!");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMale = isMale;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} `;
    }
    toString() {
        return this.firstName;
    }
}

try {
    const user3 = new User("Tim", "Qwerrty", 23);
    user3.lastName = null;
    console.log(user3.getFullName());
    console.log(user3);
} catch (error) {
    console.log(error);
}

console.log("important info!");

/*написати клас Worker у якого будуть дані: приізвище, ставка за день, кількість відпрацьованих днів за замовчуванням = 0 метод, який повертає зарплатню*/

class Worker {
    constructor(firstName, lastName, ratePerday, numberOfDaysWorked = 0) {
        if (typeof firstName !== "string") {
            throw new TypeError("first name must be string!");
        }
        if (typeof lastName !== "string") {
            throw new TypeError("last name must be string!");
        }

        if (typeof ratePerday !== "number") {
            throw new TypeError("age must be number!");
        }

        if (typeof numberOfDaysWorked !== "number") {
            throw new TypeError("age must be number!");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.ratePerday = ratePerday;
        this.numberOfDaysWorked = numberOfDaysWorked;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} `;
    }
    getSalary() {
        return this.ratePerday * this.numberOfDaysWorked;
    }
}

try {
    const worker = new Worker("WorkerTest", "test", 500, 3);
    console.log(worker.getFullName());
    console.log(worker.getSalary());
} catch (error) {
    console.log(error);
}
