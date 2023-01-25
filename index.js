"use strict";

// class Test {} // - declaration

// const Test = class{} // - expresion

// function test(...rest){
//   console.log(rest)
//   return class{
//     constructor(){}
//     toString(){}
//   }
// }

// const Test = test(1,2,3)

/* 
  інкапсуляція 
  успадкування
  поліморфізм
 */

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(value) {
        if (typeof value !== "string") {
            throw TypeError("name must be string");
        }
        if (value.length === 0) {
            throw RangeError("not empty");
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (typeof value !== "number") {
            throw TypeError("age must be number");
        }
        if (value < 14 || value > 100) {
            throw RangeError("14...100");
        }
        this._age = value;
    }

    get age() {
        return this._age;
    }

    eat() {
        return this.name + " is eating";
    }

    static isUser(obj) {
        return obj instanceof User;
    }
}

class UserRegistred extends User {
    constructor(name, age, email) {
        super(name, age);
        this.email = email;
        this.isRegister = true;
    }

    set email(value) {
        if (typeof value !== "string") {
            throw new TypeError("email must be string");
        }

        if (value.length === 0) {
            throw new RangeError("not empty");
        }
        this._email = value;
    }
    logWishList(...rest) {
        rest.forEach((item) => console.log(item));
    }
}

class Admin extends UserRegistred {
    constructor(name, age, email) {
        super(name, age, email);
    }

    addRegister(obj) {
        if (obj instanceof UserRegistred) {
            return (obj._isRegister = true);
        }
        throw new TypeError("must be UserRegistred");
    }
    removeRegister(obj) {
        if (obj instanceof UserRegistred) {
            return (obj._isRegister = false);
        }
        throw new TypeError("must be UserRegistred");
    }
}

try {
    const user = new UserRegistred("Tom", 44, "aef@.fdsf");
    console.log(user);
    console.log(user.logWishList(1, 2, 3));
    const simpleUser = new User("Simple", 44);
    const admin = new Admin("Ann", 24, "admin@gf.daf");
    admin.removeRegister(user);
} catch (error) {
    console.log("error", error);
}
