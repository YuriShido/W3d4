const changeToSecond = function(min) {
  min = min.toFixed(2);
  let second = min * 60;
  // second = second.toFixed(2)
  return second;
}
console.log(changeToSecond(1.348));