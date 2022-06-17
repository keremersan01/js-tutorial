import { users } from "../data/data.js"
import DataError from "../modals/dataError.js";

export default class UserService {
    constructor(loggerService) {
        this.employees = [],
            this.customers = [],
            this.errors = [],
            this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.ValidateUsers(user))
                        this.customers.push(user)
                    break;
                case "employee":
                    if (!this.ValidateUsers(user))
                        this.employees.push(user)
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    ValidateUsers(user) {
        let hasErrors = false
        let requiredFields = ""

        if (user.type === "customer")
            requiredFields = "id firstName lastName age city".split(" ")
        else if (user.type === "employee")
            requiredFields = "id firstName lastName age city salary".split(" ")

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation error on ${field}.
                    `, user))
            }
        }
        return hasErrors

    }

    add(user) {
        if (user.type === "customer")
            this.customers.push(user)
        else if (user.type === "employee")
            this.employees.push(user)

        this.loggerService.log(user)
        console.log("User is added!: " + user.firstName)
    }

    list() {
        console.log("Users are listed!")
        let allUsers = this.customers.concat(this.employees)
        return allUsers
    }

    getById(id) {
        //return this.users.find(u => u.id === id)
    }
}