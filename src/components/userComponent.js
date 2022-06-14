// "default" keywordu sayesinde direk userService classını import ettik
import User from "../modals/user.js"
import UserService from "../services/userService.js"



console.log("User component yüklendi")

let userService = new UserService()


let user1 = new User(1,"İpek", 24)
let user2 = new User(2,"Salim", 12)

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))