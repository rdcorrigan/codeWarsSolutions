// sumByFactors

function sumOfDivided(lst) {
  if (lst.length === 0) return [];

  var max = Math.max(...lst), sum = 0, flag = false, result = [];
 
  
  // adjust max prime divisor value if max is negative
  if (max < 0) {
    max = Math.abs(Math.min(...lst));
  }
  
  
  // prime validator function
  function prime(x) {
    for (var i=2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }
  
  for (var i=2; i<=max; i++) {
    if (i > 3 && !prime(i)) { // i only iterates through lst if prime
      continue;
    }
    for (var j=0; j<lst.length; j++) {
      if (lst[j] % i === 0) { // if element is divisible by i then add to sum for current prime
        sum += lst[j], flag = true; // flag is to confirm that values were added, even if sum is 0
      }
      if (j === lst.length - 1 && flag) { 
        result.push([i, sum]), sum = 0, flag = false; // reset sum and flag
      }
    }
  }
  
  return result;
}
 

console.log(sumOfDivided([17, 34, 51, 68, 102 ]));