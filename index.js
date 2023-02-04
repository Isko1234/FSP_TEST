let a = 365;
let b = a - 365;
let c = 0;
let year = 0;
let day = 0;
let week = 0;
while (b >= 0) {
  year += 1;
  b -= 365;
}
c = a - year * 365 - 7;
while (c >= 0) {
  week += 1;
  c -= 7;
}
while (c - 1 >= 0) {
  day += 1;
  c -= 1;
}

console.log(year, day, week);
