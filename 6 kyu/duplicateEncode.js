const duplicateEncode = word => {
    const result = [], 
          arr = word.toLowerCase().split(''),
          dupes = arr.filter((el, i, self) => self.indexOf(el) !== i),
          set = new Set([...dupes]);
          arr.forEach(el => set.has(el) ? result.push(')') : result.push('('));
  return result.join('');
}

console.log(duplicateEncode('Success'));