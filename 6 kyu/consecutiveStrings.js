function longestConsec(strarr, k) {
  const arrLen= strarr.length;
  let i = 0, currentLen = 0, lengths = [];
  if (arrLen == 0 || arrLen < k || k <= 0) return "";
  while (i < arrLen-k + 1) {
      let j = i;
      while (j < (i + k)) {
        currentLen += strarr[j].length;
        j++;
      }
    lengths.push(currentLen)
    currentLen = 0;
    i++;
}
  let longIndex = 0, result = '';
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] > lengths[longIndex]) {
        longIndex = i;
      }
    }
  while (k > 0) {
    result += strarr[longIndex];
    longIndex++; k--;
    }
  return result;
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],2));

// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));

// console.log(longestConsec(["dfkgndrikgn"], -1));