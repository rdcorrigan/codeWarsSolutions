function findOdd(A) {
    let count=1,i=0; A=A.sort();
    while (i<A.length){
      if (A[i]===A[i+1]) count++,i++;
      else if (count%2) return A[i];
      else count=1,i++;
    }
  }