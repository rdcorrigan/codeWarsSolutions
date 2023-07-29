const permutations = string => {
    let result = [];
  
    function permute(str, permutation = []) {
      console.log('start str:',str)
      if (str.length === 0) {
        console.log('permutation.join(""):',permutation.join(''));
        result.push(permutation.join('')); 
      } else {
        for (let i = 0; i < str.length; i++) {
          console.log('i:',i);
            console.log('forloop str:',str);
            console.log('str.slice(0, i):',str.slice(0, i));
            const remaining = str.slice(0, i).concat(str.slice(i + 1));
            console.log('remaining:',remaining);
            console.log('str[i]:',str[i]);
            permute(remaining, permutation.concat(str[i]));
            // console.log('end str[i]:',str[i]);
        }
      }
    }
    permute(string);
    result = result.filter((el,i,self) => self.indexOf(el) === i);

    return result;
  }
  
  console.log(permutations('abc'));