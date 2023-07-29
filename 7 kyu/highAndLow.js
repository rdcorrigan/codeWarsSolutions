const highAndLow = numbers => {
    n=numbers.split(' ').sort((a,b)=>a-b);
    return `${n[n.length-1]} ${n[0]}`;
}

console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"