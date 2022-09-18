let words = ["Madrid", "Rome", "Milan", "Berlin"];

let words2 = words.filter(function (x) {
  return x.includes("m") || x.includes("M");
});
console.log(words2);
