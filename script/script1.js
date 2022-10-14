// 1. Have 2 functions validateName(which get argument some string and return true if it valid name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not  empty)) and validateAge(get number argument and return true if value > 19 ).
// Create some functions by currying,so I can filter list of users by valid name and age.

function validateName(text) {
    let a = text.split()
    let b = a.some(elem => {
        if(elem.includes(" ") ) {
            return true
        }
    });
    
    return b
}

console.log(validateName("Jackob Luchy"))

function validateAge(num) {
    if(num > 19) {
        return true
    }else {
        return false
    }
}

console.log(validateAge(20))

let array = [ 
  { name: "Вася", age: 25 },
  { name: "Петя", age: 30 },
  { name: "Маша", age: 28 },
];

function sortByAge(arr) {
    let x = arr.sort((a, b) => a.age > b.age ? 1 : -1);
    return x
}
  
let result = sortByAge(array)
console.log(result)
  



