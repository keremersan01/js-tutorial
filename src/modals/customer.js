import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, age , city ,type, creditCardNo)
    {
        super(id, firstName, lastName, age, city, type)
        this.creditCardNo = creditCardNo
    }
}