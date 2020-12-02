// List is JS obj
// Members include listData
// addToList, removeFromList, printList

let todoList = {
  listData: [],
  addToList: function (item) {
    this.listData.push(item);
  },
  removeFromList: function (item) {
    for (let index = 0; index < this.listData.length; index++) {
      if (this.listData[index] == item) {
        this.listData.splice(index, 1);
      }
    }
  },
  printList: function () {
    for (let index = 0; index < this.listData.length; index++) {
      console.log(this.listData[index]);
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
