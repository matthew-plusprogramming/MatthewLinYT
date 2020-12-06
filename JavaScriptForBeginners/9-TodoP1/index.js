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

todoList.addToList('Take out the trash');
todoList.addToList('Buy eggs');
todoList.addToList('Buy giftcards');
todoList.addToList('Go to school');

todoList.printList();

todoList.removeFromList('Buy eggs');
todoList.printList();
