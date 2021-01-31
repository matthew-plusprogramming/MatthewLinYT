// List is JS obj
// Members include listData
// addToList, removeFromList, printList

// Our todo list object
let todoList = {
  listData: [],
  addToList: function (item) {
    this.listData.push(item);
  },
  removeFromList: function (item) {
    for (let i = 0; i < this.listData.length; i++) {
      if (this.listData[i] == item) {
        this.listData.splice(i, 1);
      }
    }
  },
  printList: function () {
    console.log('Todo List:');
    for (let i = 0; i < this.listData.length; i++) {
      console.log(i + 1 + '. ' + this.listData[i]);
    }
    console.log('');
  },
};

let userInput = '';
while (userInput != 'exit') {
  userInput = prompt('What do you want to do?');

  if (userInput == 'add') {
    let item = prompt('What do you want to add?');
    todoList.addToList(item);
  } else if (userInput == 'remove') {
    let item = prompt('What do you want to remove?');
    todoList.removeFromList(item);
  } else if (userInput == 'print') {
    todoList.printList();
  }
}
