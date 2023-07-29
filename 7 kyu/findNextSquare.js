const findNextSquare = sq => {
    const theRoot = Math.sqrt(sq);
    return theRoot % 1 === 0 ? (theRoot + 1) ** 2 : -1;
}
  
console.log(findNextSquare(33));