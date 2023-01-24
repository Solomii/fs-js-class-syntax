"use strict";
function UserOldSyntax(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    UserOldSyntax.amount++;
}
//static
UserOldSyntax.amount = 0;
UserOldSyntax.createTestUser = function () {
    return new UserOldSyntax("Test", "Testtest", 18);
};
function UserOldSyntaxProto() {
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
    this.toString = function () {
        return this.firstName;
    };
}
UserOldSyntax.prototype = new UserOldSyntaxProto();
