let users = [
    {id: 1, userName: "Kerem", age: 12},
    {id: 2, userName: "Mehmet", age: 18},
    {id: 3, userName: "Ali", age: 22}
]

// map function
//-------------

console.log("<ul>")
users.map(user =>{
    console.log("<li>" + user.userName + "</li>")
})
console.log("</ul>")

// filter function
let filteredArray = users.filter(user => user.age > 20)
console.log(filteredArray)

// reduce function
let total = users.reduce((acc,product)=>acc+ product.age,0)
console.log(total)

// objects and arrays are pass by reference
let user = {id: 1, userName: "Salim", age: 38}

function addToUserList(person){
    users.push(person)
}

addToUserList(user)
console.log(users)

// numbers are pass by value
let number = 14

function increment(no)
{
    no += 1
}
console.log(number)