let array = [
  "hello",
  125,
  "javascript",
  "html",
  43,
  "css",
  "scss",
  "bootstrap",
  88,
  59,
  "python",
];

let array2 = array.filter(function (x) {
  if (typeof x == "number") return x;
});
console.log(array2);
