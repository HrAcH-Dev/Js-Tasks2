// 2.  Make the following object iterable:

let todoList = {
    todoItems: [],
    addItem(description) {
        this.todoItems.push({ description, done: false });
        return this
    },
    crossOutItem(index) {
        if(index < this.todoItems.length) {
            this.todoItems[index].done = true
        }
    }
}

todoList.addItem('Junior1').addItem('Junior2').crossOutItem(0)


let iterableTodoList = todoList.todoItems

for (let item of iterableTodoList) {
    console.log(item)
}