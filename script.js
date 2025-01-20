var x = 1;
var y = 2;
function add() {
  var t = x + y;
  console.log(t);
}

function spare() {
  console.log(x - y);
}

// division
function division(p1, p2) {
  if (p2 != 0) {
    return p1 / p2;
  }
}

console.log(division(12 / 3));
