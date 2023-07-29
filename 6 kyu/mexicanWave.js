const wave = str => {
    let i=0,
        giver=str.toUpperCase().split(''),
        receiver=str.split(''),
        result=[],
        sub
    while (i<str.length) {
        if (str[i]!==' ') {
            sub=giver.splice(i,1) 
            receiver.splice(i,1,sub) 
            result.push(receiver.join(''))
            giver=str.toUpperCase().split('')
            receiver=str.split('')
        }
        i++
    }
    return result
}

console.log(wave("two words"));

