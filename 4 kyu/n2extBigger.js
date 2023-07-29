const nextBigger = n => {
    const a = String(n).split(''),
    permutations = array => {
        let result = [];
        const permute = (arr, permutation = []) => {
            if (arr.length === 0) {
                console.log('permutation.join(""):',permutation.join(''));
                result.push(Number(permutation.join('')));
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let remaining = arr.slice(0,i).concat(arr.slice(i+1));
                    
                    permute(remaining, permutation.concat(arr[i]));
                }
            }

        }
        permute(array)
        result = result.filter((el,i,self)=>self.indexOf(el)===i).sort((a,b)=>a-b);
        return result[result.length-1]==n ? -1 : result[result.indexOf(n)+1];
    }
    return permutations(a);
}

console.log(nextBigger(2017));