const getCount = str => {
    return str.split('')
            .filter(l => l == 'a'|| l == 'e'|| l == 'i'|| l =='o'|| l =='u')
            .length;
}

console.log(getCount('jesus')); // 2