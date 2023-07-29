const expandedForm = num => {
    const arr=num.toString().split('').reverse(), result=[];
    for (let i=0; i<arr.length; i++) {if (arr[i]*10**i) result.unshift(arr[i]*10**i)}
    return result.join(' + ');
}


console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'