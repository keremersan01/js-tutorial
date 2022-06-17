import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, age, city, type, salary){
        super(id, firstName, lastName, age, city, type)
        this.salary = salary
    }
}