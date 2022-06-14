export default class UserService{
    constructor(loggerService){
        this.users = [], // getUsersFormDB()
        this.loggerService = loggerService
    }


    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        console.log("User is added!: " + user.name)
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