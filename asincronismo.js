<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
/>;
setTimeout(() => console.log("b"), 2000);
for (let i = 0; i < 1000000000; i++) {}

function set() {
  console.log("Terminè");
}
set();
