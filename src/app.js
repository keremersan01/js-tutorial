console.log("Merhaba Javascript!")

// javascript is not a type-safe language!
let todaysDolarvalue = 16.5
todaysDolarvalue = "Random string!"

console.log(todaysDolarvalue)
console.log(yesterdaysDolarvalue)
let yesterdaysDolarvalue = 14.7

// It destroys local scope rule! 'var' keyword makes variable global!! 
var variable = 15
{
    var variable = 20
}
let variable2 = 15
{
    let variable2 = 20
}
const variable3 = "variable3 is a string"

console.log("var variable: " + variable)
console.log("let variable: " + variable2)
console.log("const variable: " + variable3)

// arrays in js

// camel casing is used for convention
let homeCredits = ["Kamu Konut Kredileri", "Ev Konut Kredileri", "Konut Kredisi"] 
let arrayIsNotTypeScript = [12.8, true, "String text"]
let arrayInsideArray = ["String", "String2", [1,2,3]]

console.log(homeCredits)
console.log(arrayIsNotTypeScript)
console.log(arrayInsideArray)

//let users = getUsersFromApi()

console.log("<ul>")
for(let i = 0; i < homeCredits.length; i++)
{
    console.log("<li>"+homeCredits[i]+"</li>")
}
console.log("</ul>")
let n1 = 2
let n2 = 4

