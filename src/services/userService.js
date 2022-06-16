import { users } from "../data/data.js"

export default class UserService{
    constructor(loggerService){
        this.users = [], // getUsersFormDB()
        this.employees = [],
        this.customers = [],
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    console.log("User type is wrong!")
                    break;
            }
        }
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        console.log("User is added!: " + user.firstName)
    }

    list()
    {
        console.log("Users are listed!")
        return this.users
    }

    getById(id)
    {
        return this.users.find(u => u.id === id)
    }
}