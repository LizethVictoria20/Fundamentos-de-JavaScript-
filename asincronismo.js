setTimeout(() => console.log("b"), 2000);
for (let i = 0; i < 1000000000; i++) {}

function set() {
  console.log("Terminè");
}
set();
