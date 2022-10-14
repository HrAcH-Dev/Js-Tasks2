// 4.   Create an infinite sequence that generates the next value of the Fibonacci sequence.  

let fib1 = 1
let fib2 = 1

let i = 0

while(i < 50 - 2) {
    let fibSum = fib1 + fib2
    fib1 = fib2
    fib2 = fibSum
    i = i + 1
    console.log(fib2)
}
