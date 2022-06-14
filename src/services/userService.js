export default class UserService{
    constructor(){
        this.users = []
    }


    add(user){
        this.users.push(user)
        console.log("User is added!: " + user.name)
    }

    list()
    {
        console.log("Users are listed!")
        return this.users
    }

    getById(id)
    {
        return this.users.find( u => u.id === id)
    }
}