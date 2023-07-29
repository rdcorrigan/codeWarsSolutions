const calc = expression => {
  let split = expression.split('').filter(e => /\S/.test(e)), 
      operatorExists = split.filter((e) => /\*|\/|\+|\-/.test(e)),
      i, j, total, preIndex, postIndex, parIndex = [], negNum = [], negRange = [];
  if (!operatorExists.length) return Number(expression);
  split.forEach((e, i) => e === '(' ? parIndex.push(i) : null);

  const negative = split => {
    for (i = split.length - 2; i >= 0; i--) {
      if (/-/.test(split[i]) && /[^\d\)]/.test(split[i-1]) && /\d|\(/.test(split[i+1])) {
        j = i;
        while (/\d|\./.test(split[j+1])) {
          negNum.push(split[j+1]); negRange.push(j); j++;
        }
      } else break;
      negRange.push(j);
      split.splice(negRange[0], negRange[negRange.length-1] + 1 - negRange[0], Number(negNum.join('')) * -1);
    }
  }

  const parentheses = (split, parSequence) => {
    while (parIndex.length) {
      i = parIndex[parIndex.length - 1] + 1;
      while (split[i] !== ')') {
        parSequence.push(split[i]); i++;
      }
      parSequence.length === 1 ? spliceSplit(split, parIndex, parSequence[0]) : operatorPriority(split, parSequence)
    }
  }

  const operatorPriority = (split, sequence, operator = []) => {
    for (i = 0; i < sequence.length; i++) {
      if (/\*|\//.test(sequence[i])) { operator.push(sequence[i], i); break; }
    }
    if (/\*|\//.test(operator[0]))  createSubSequence(split, sequence, operator)
    for (i = 0; i < sequence.length; i++) {
      if (typeof sequence[i] !== 'string') continue;
      if (/\-/.test(sequence[i])) { operator.push(sequence[i], i); break; }
      if (/\+/.test(sequence[i])) { operator.push(sequence[i], i); break; }
    }
    if (/\+|\-/.test(operator[0])) createSubSequence(split, sequence, operator) 
  }

  const createSubSequence = (split, sequence, operator, preOperator = [], postOperator = [], subRange = []) => {
    j = operator[1];
    while (/\d|\./.test(sequence[j - 1])) {
      preOperator.unshift(sequence[j - 1]); j--;
    }
    preIndex = j;
    subRange.push(preIndex);
    if (preOperator.length) {
      preOperator = Number(preOperator.join(''));
    }
    j = operator[1];
    while (j < sequence.length && /\d|\./.test(sequence[j + 1])) {
      postOperator.push(sequence[j + 1]); j++;
    }
    postIndex = j;
    subRange.push(postIndex);
    postOperator = Number(postOperator.join(''));
    calculate(split, sequence, operator, preOperator, postOperator, subRange)
  }

  const calculate = (split, sequence, operator, preOperator, postOperator, subRange) => {
    switch (operator[0]) {
      case '*':
        total = preOperator * postOperator; break;
      case '/':
        total = preOperator / postOperator; break;
      case '+':
        total = preOperator + postOperator; break;
      case '-':
        total = preOperator - postOperator; break;
    }
    spliceSequence(split, sequence, subRange, total)
  }

  const spliceSequence = (split, sequence, subRange, total) => {
    sequence.splice(preIndex, subRange[1] - subRange[0] + 1, total);
    if (sequence.length > 1) {
      operatorPriority(split, sequence, operator = [], preOperator = [], postOperator = [], subRange = []);
    }
    else if (sequence.length === 1) {
      spliceSplit(split, parIndex, total, subRange)
    }
  }

  const spliceSplit = (split, parIndex, total, subRange, parEnd = []) => {
     split.forEach((e, i) => e === ')' ? parEnd.push(i) : null);
    if (parIndex.length) {
      split.splice(parIndex[parIndex.length - 1], parEnd[0] + 1 - parIndex[parIndex.length - 1], total);
      if (split[parIndex[parIndex.length - 1] - 1] === '-') {
        split.splice(parIndex[parIndex.length - 1] - 1, parEnd[0] + 1 - parIndex[parIndex.length - 1], total * -1);
      }
      parIndex.pop();
    }
    if (split.length === 1) return split[0];
    parIndex.length ? parentheses(split, parSequence = []) : operatorPriority(split, split)
  }

  negative(split)
  parIndex.length ? parentheses(split, parSequence = []) : operatorPriority(split, split)

  return split[0]
}


// console.log(calc('(2 / (4 - 2 + 3.33 * 5 / 7) * 4) - -6')); // 7.8271

// console.log(calc('2--(6*8/9)')); // 7.3333

console.log(calc('6+-(4)')); // 2