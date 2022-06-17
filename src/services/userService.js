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
                    if (!this.ValidateUser(user) && !this.CheckIfAgeIsInt(user))
                        this.customers.push(user)
                    break;
                case "employee":
                    if (!this.ValidateUser(user) && !this.CheckIfAgeIsInt(user))
                        this.employees.push(user)
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    CheckIfAgeIsInt(user) {
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError("Age contains letters!", user))
        }
        return hasErrors
    }

    ValidateUser(user) {
        let hasErrors = false
        let requiredFields

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
        console.log("User is added!: " + user.firstName)
        console.log(user.type)
        if (user.type !== "employee" && user.type !== "customer")
            this.errors.push(new DataError(`Wrong user type on ${user}`), user)

        else if (!this.ValidateUser(user)) {
            switch (user.type) {
                case "employee":
                    this.employees.push(user)
                    break;
                case "customer":
                    this.customers.push(user)
                    break;
            }
        }
        this.loggerService.log(user)
    }

    list() {
        console.log("Users are listed!")
        let allUsers = this.customers.concat(this.employees)
        return allUsers
    }

    getById(id) {
        let allUsers = this.customers.concat(this.employees)
        return allUsers.find(user => user.id === id)
    }
}