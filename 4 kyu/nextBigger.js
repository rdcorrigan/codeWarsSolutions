// function nextBigger(n){
//     a = n.toString().split('');
//     const permutations = string => {
//         let result = [];
//         function permute(arr, permutation = []) {
//           console.log('start arr:',arr)
//           console.log('permutation:',permutation);
//           if (arr.length === 0) {
//             result.push(Number(permutation.join('')));
//             console.log('permutation.join(""):',permutation.join('')); 
//           } else {
//             for (let i = 0; i < arr.length; i++) {
//                 console.log('i:',i);
//             //    console.log('arr:',arr);
//                 const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
//                console.log('remaining:',remaining);
//                 permute(remaining, permutation.concat(arr[i]));
               
//             }
//           }
//         }
//         permute(string);
//         result = result.filter((el,i,self) => self.indexOf(el) === i).sort((a,b)=>a-b);
//         return result[result.indexOf(n) + 1];
//         return result[result.length-1] == n ? -1 : result[result.indexOf(n) + 1];
//       }
//     return permutations(a);
// }

const nextBigger = n => {
    const a = String(n).split(''),
    permutations = array => {
        let result = [];
        const permute = (arr, permutation=[]) => {
            if (arr.length===0) result.push(Number(permutation.join(''))); 
            else for (let i=0; i<arr.length; i++) {
                    const remaining = arr.slice(0,i).concat(arr.slice(i+1));
                    permute(remaining, permutation.concat(arr[i]));
                }
        };
        permute(array);
        result = result.filter((el,i,self)=>self.indexOf(el)===i).sort((a,b)=>a-b);
        return result[result.length-1]===n ? -1 : result[result.indexOf(n)+1];
    };
    return permutations(a);
}

console.log(nextBigger(2017));

  //   12 ==> 21
  //  513 ==> 531
  // 2017 ==> 2071
  
  //   9 ==> -1
  // 111 ==> -1
  // 531 ==> -1