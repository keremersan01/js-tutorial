// method signature is consists of method name + method parameters
function addToCart(quantity,productName = "Limon")
{
    console.log("Sepetine " + productName + " Eklendi")
    console.log(quantity + " Adet")
}

addToCart(10, "Elma")
addToCart(5, "Portakal")
addToCart(2)

let sayHello = (name = "Oradaki") => {
    console.log("Merhaba variable which stores arrow function")
    console.log(name + " Merhaba")
}
let sayHello2 = function(surname = "Ghost"){
    console.log("Merhaba from variable which stores classic function")
    console.log("Hello Mr." + surname)
}
sayHello()
sayHello2()

let product1 = {productName: "Elma", quantity: 2, unitPrice: 5.65}

function addToCart2(product){
    console.log("Ürün ismi: " + product.productName)
    console.log("Ürün adedi: " + product.quantity)
    console.log("Ürün fiyatı: " + product.unitPrice)
}

addToCart2(product1)

// pass by value && pass by reference

// Objects and arrays are pass by reference
let prod = {name: "Kalem",quantity: "3"}
let prod2 = {name: "Silgi",quantity: "2"}

prod = prod2
prod.name = "Kitap"
console.log(prod2.name)

//  numbers are pass by value
let num1 = 10
let num2 = 15
num1 = num2
num2 = 20
console.log(num1)

function addToCart4(products)
{
    console.log(products)
}

let products = [
    {name: "Kalem",quantity: "3"},
    {name: "Silgi",quantity: "2"},
    {name: "Defter",quantity: "1"}
]

addToCart4(products)

// rest operator, concatenates the numbers into an array
function add(...numbers){
    let total = 0
    for(let i = 0; i < numbers.length; i++)
    {
        total += numbers[i]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)
add(0,5,6,7,8,9,17)

// spread operator , spreads the numbers from an array

let numbers = [5,6,12,22,32,42]
console.log("Max number: " + Math.max(...numbers))

// destructing assignment && Destructing Arrays
let [karadeniz, içAnadolu, marmara, 
    [içAnadoluŞehirleri,karadenizŞehirleri,MarmaraŞehirleri]] = [
    {name: "Karadeniz", population: "8M"},
    {name: "İç Anadolu", population: "12M"},
    {name: "Marmara", population: "25M"},
    [
        ["Ankara","Kırıkkale"],
        ["Giresun", "Rize"],
        ["İstanbul","Balıkesir"]
    ]
]
console.log(içAnadoluŞehirleri)

// Destructing assignment && Destructing Objects

let n,s,a
({name: n,surname: s,age: a} = {name: "Ali",surname: "Taş", age: 21})
console.log(n + " " + s + " " + a)




