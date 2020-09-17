const hoursToSeconds = function(hours) {
  hours = hours.toFixed(4);
  let seconds = hours * 60 * 60
 return seconds;
}

console.log(hoursToSeconds(1.25314));