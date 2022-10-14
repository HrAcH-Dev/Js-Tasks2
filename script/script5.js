// 5. Create async generator function which will get 3 promise arguments and will yeald 
// result will be 17, 42, 15.
let Promise1 = new Promise((resolve, reject) => {
    resolve(15)
})

let Promise2 = new Promise((resolve, reject) => {
    resolve(17)
})

let Promise3 = new Promise((resolve, reject) => {
    resolve(42)
})

function* foo() {
    yield Promise1.then(response => {
        setTimeout(() => {
            console.log(response)
        },600)
    })
    
    yield  Promise3.then(response => {
        setTimeout(() => {
            console.log(response)
        },500)
    })
    yield  Promise2.then(response => {
        setTimeout(() => {
            console.log(response)
        },200)
    })
}

let f = foo()
f.next()
f.next()
f.next()


