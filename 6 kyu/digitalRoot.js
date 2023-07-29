const digitalRoot= n => {
    if (n.toString().length<2) return n;
    n=n.toString().split('').reduce((a,d)=>a+Number(d),0);
    return digitalRoot(n);
}

console.log(digitalRoot(6542));