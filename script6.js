let item = [12, "google", 32, null, "yahoo", 25];

let newitem = item.map(function (x) {
  if (typeof x == "number") {
    return Math.pow(x, 2);
  } else if (typeof x == "string") {
    return x.toUpperCase();
  } else {
    return x;
  }
});

console.log(newitem);
