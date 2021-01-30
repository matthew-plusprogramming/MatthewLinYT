// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.sidenav');
//   M.Sidenav.init(elems, {});
// });
M.AutoInit();

function onOpen() {
  console.log('Hello World');
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: onOpen,
    preventScrolling: false,
    dismissible: false,
  });
});
