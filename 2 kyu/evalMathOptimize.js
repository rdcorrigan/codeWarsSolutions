// OPTIMIZE MY CODE
// ELIMINATE AS MANY STEPS IN CODE AS POSSIBLE
// BEGIN ITERATING FROM END OF EXPRESSION (RIGHT TO LEFT) TO FIND STARTING PARENTHESES

// 1. Starting from right going left, find first/if any existing opening parentheses index.
// 2. Identify any double negatives and convert number to negative then splice into split.
// 3. Operator priority (mult/div then add/sub from left to right). 
// 4. Continually test for closing parentheses index to end subexpression.

const calc = expression => {
    let split = expression.split(''), 
        i, j, total, parExpression = [], 
        startIndex = 0, endIndex = 0, negNum = [], negRange = [], parRange = [], count = 0;
    console.log(split);
    // const negative = split => {
    //   for (i = split.length - 2; i >= 0; i--) {
    //     if (/-/.test(split[i]) && /[^\d\)]/.test(split[i-1]) && /\d|\(/.test(split[i+1])) {
    //       j = i;
    //       while (/\d|\./.test(split[j+1])) {
    //         negNum.push(split[j+1]); negRange.push(j); j++;
    //       }
    //     } else break;
    //     negRange.push(j);
    //     split.splice(negRange[0], negRange[negRange.length-1] + 1 - negRange[0], Number(negNum.join('')) * -1);
    //     console.log(split);
    //   }
    //   parentheses(split, parExpression, parRange)
    // }
  
    const parentheses = (split, parExpression, parRange, startIndex, endIndex) => {
        
        console.log('parentheses');
        i = split.length - 1;
        while (i > -1 && split[i] !== '(') { 
            i--; 
        }
        // IF NO PARENTHESES FOUND:
        if (i === -1) operatorPriority(split, split);
        console.log(parRange);
        parRange.push(i++);
        while (split[i] !== ')' && i < split.length) {
            if (/\S/.test(split[i])) {
                parExpression.push(split[i]);
            }
            i++;
        }
        parRange.push(++i)
        console.log('parRange:',parRange);
        console.log('parExpression:',parExpression);
        operatorPriority(split, parExpression, parRange);
    }
  
    const operatorPriority = (split, sequence, parRange, operator = []) => {
        console.log('operatorPriority');
      for (i = 0; i < sequence.length; i++) {
        if (/\*|\//.test(sequence[i])) { operator.push(sequence[i], i); break; }
      }
      
      if (/\*|\//.test(operator[0]))  createSubSequence(split, sequence, parRange, operator)
      for (i = 0; i < sequence.length; i++) {
        if (typeof sequence[i] !== 'string') continue;
        if (/\-/.test(sequence[i])) { operator.push(sequence[i], i); break; }
        if (/\+/.test(sequence[i])) { operator.push(sequence[i], i); break; }
      }
      console.log(operator);
      if (/\+|\-/.test(operator[0])) createSubSequence(split, sequence, parRange, operator) 
    }
  
    const createSubSequence = (split, sequence, parRange, operator, preOperator = [], postOperator = [], subRange = []) => {
        console.log('createSubSequence');
      j = operator[1];
      console.log(j);
        console.log('BUG HERE?');
      console.log(sequence);

      while (/\d|\./.test(sequence[j - 1])) {
        console.log(sequence[j - 1]);
        preOperator.unshift(sequence[j - 1]); j--;
        console.log('preOperator:',preOperator);
      }
      preIndex = j;
      subRange.push(preIndex);
      if (preOperator.length) {
        preOperator = Number(preOperator.join(''));
      }
      j = operator[1];
      while (j < sequence.length && /\d|\./.test(sequence[j + 1])) {
        postOperator.push(sequence[j + 1]); j++;
        console.log('postOperator:',postOperator);
      }
      postIndex = j;
      subRange.push(postIndex);
      postOperator = Number(postOperator.join(''));
      console.log(subRange);
      calculate(split, sequence, parRange, operator, preOperator, postOperator, subRange)
    }
  
    const calculate = (split, sequence, parRange, operator, preOperator, postOperator, subRange) => {
        console.log('CALCULATE');
        
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
      console.log(total);
      spliceSequence(split, sequence, parRange, total, subRange)
    }
  
    const spliceSequence = (split, sequence, parRange, subRange, total) => {
        console.log('spliceSequence');
        console.log(sequence);
      sequence.splice(preIndex, subRange[1] - subRange[0] + 1, total);
      console.log(sequence);
      if (sequence.length > 1) {
        operatorPriority(split, sequence, parRange, operator = [], preOperator = [], postOperator = [], subRange = []);
      }
      else if (sequence.length === 1) {
        console.log('parRange:',parRange);
        spliceSplit(split, parRange, total, subRange)
      }
    }
  
    const spliceSplit = (split, parRange, total, subRange, parEnd = []) => {
        console.log('spliceSplit');
        console.log(split);
        if (split[parRange[0] - 1] === '-') {
          split.splice(parRange[0] - 1, parRange[1] + 1 - parRange[0], total * -1);
        } else {
            split.splice(parRange[0], parRange[1] - parRange[0], total);
        }
        console.log(split);
      
      if (split.length === 1) return split[0];
      parentheses(split, parExpression = [], parRange = [])
    }

    // RETURN IF SINGLE NUMBER INPUT
    for (let i = 0; i < split.length; i++) {
        if (/[^\-].*[\-]|\*|\/|\+|\(/.test(split)) {
            parentheses(split, parExpression, parRange)
        } 
        if (i === split.length - 1) return Number(split.join(''));
    }

  
    return split
}

// console.log(calc('(2 / -(4 - 2 + 3.33 * 5 / 7) * 4) - -6')); // 7.8271

console.log(calc('-(3+42)')); // -45