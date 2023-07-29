const reverseWords = str => {
    const result=[], 
          words=str.split(/\s+/g), 
          spaces=str.match(/\s+/g), 
          reversed=words.map(el => el.split('').reverse().join(''));
      let i = 0;
    while (i<reversed.length) {
      result.push(reversed[i]);
      if (spaces) result.push(spaces[i]);
      i++;
    }
    return result.join('');
}

console.log(reverseWords("double  spaced  words."));