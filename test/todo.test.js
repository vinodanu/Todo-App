const expect = require("chai").expect
const Todo = require("../src/todo")

describe("Todo class", () => {
    //arrange
    let todo;
    beforeEach(() => {
         todo = new Todo();
    })

    afterEach(() => {
        todo.resetTodoList();
    })

    it("It should add new item in the TodoList", () => {
        //Act
        todo.addItem({label : "Groceries"});

        //Assert
        expect(todo.getItems()).to.have.lengthOf(1);
    })

    it("It should remove item from the list based on index value", () => {
        todo.addItem({label : "shopping"})
        todo.removeItem(0);
        expect(todo.getItems()).to.have.lengthOf(0)
    })
})