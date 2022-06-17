// default olmadıgı için ayrı ayrı süslü parantezde import ettik
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js"

// "default" keywordu sayesinde direk userService ve User classını import ettik
import Customer from "../modals/customer.js"
import Employee from "../modals/employee.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger = new ElasticLogger()
let userService = new UserService(logger)


let customer = new Customer(1,"İpek", "Yazıcı", 11, "İzmir", "customer", "456454")
let employee = new Employee(2,"Salim", "Manav", 29, "Adana", "employee", 12000)

userService.add(customer)
userService.add(employee)

console.log(userService.list())
console.log(userService.getById(2))
console.log("---------------------------------")

userService.load()
console.log(userService.employees)
console.log(userService.customers)
console.log(userService.errors)
console.log(userService.list())

