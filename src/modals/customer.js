export default class Customer extends User{
    constructor(id, firstName, lastName, age , city , creditCardNo)
    {
        super(id, firstName, lastName, age, city)
        this.creditCardNo = creditCardNo
    }
}