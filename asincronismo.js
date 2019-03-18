console.log("a");
setTimeout(() => console.log("b"), 0);
function set() {
  console.log("Me ejecute");
}
set();
console.log("c");
