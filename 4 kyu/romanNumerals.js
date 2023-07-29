class RomanNumerals {
    static toRoman(num) {
        const ones = {0:'',1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'},
            tens = {0:'',1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC'},
            hunds = {0:'',1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM'},
            thous = {1:'M',2:'MM',3:'MMM'};
        let a = String(num).split('').map(e=>Number(e)), result = '';
        if (num < 10) return ones[num];
        const one = (n) => result += ones[n],
            ten = (n) => result += tens[n],
            hund = (n) => result += hunds[n],
            thou = (n) => result += thous[n];
        switch (a.length) {
            case 2:
                ten(a[0]); one(a[1]); break;
            case 3:
                hund(a[0]); ten(a[1]); one(a[2]); break;
            case 4:
                thou(a[0]); hund(a[1]); ten(a[2]); one(a[3]); break;
        }
       return result;
    }
    static fromRoman(str) {
        const ones = {'':0,'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9},
            tens = {'':0,'X':1,'XX':2,'XXX':3,'XL':4,'L':5,'LX':6,'LXX':7,'LXXX':8,'XC':9},
            hunds = {'':0,'C':1,'CC':2,'CCC':3,'CD':4,'D':5,'DC':6,'DCC':7,'DCCC':8,'CM':9},
            thous = {'M':1,'MM':2,'MMM':3};
        let curr = '', i = 0, result = [];
        switch (str[0]) {
            case 'M':
                while (str[i] == 'M') {curr += str[i]; i++;}
                result.push(thous[curr]); curr = '';
                if (/C|D/.test(str[i])) {
                    while (/C|M|D/.test(str[i])) {
                        curr += str[i]; i++;
                    } result.push(hunds[curr]); curr = '';
                } else result.push('0');
                if (/X|L/.test(str[i])) {
                    while (/X|C|L/.test(str[i])) {
                        curr += str[i]; i++;
                    } result.push(tens[curr]); curr = '';
                } else result.push('0');
                if (/I|V/.test(str[i])) {
                    while (/I|X|V/.test(str[i])) {
                        curr += str[i]; i++;
                    } result.push(ones[curr]); 
                } else result.push('0'); break;
            case 'C':
            case 'D':
                while (/C|M|D/.test(str[i])) {curr += str[i]; i++;}
                result.push(hunds[curr]); curr = '';
                if (/X|L/.test(str[i])) {
                    while (/X|C|L/.test(str[i])) {
                        curr += str[i]; i++;
                } result.push(tens[curr]); curr = '';
                } else result.push('0');
                if (/I|V/.test(str[i])) {
                    while (/I|X|V/.test(str[i])) {
                        curr += str[i]; i++;
                } result.push(ones[curr]);
                } else result.push('0'); break;
            case 'X':
            case 'L':
                while (/X|C|L/.test(str[i])) {curr += str[i]; i++;}
                result.push(tens[curr]); curr = '';
                if (/I|V/.test(str[i])) {
                    while (/I|X|V/.test(str[i])) {
                        curr += str[i]; i++;
                } result.push(ones[curr]); break;
                } 
            case 'I':
            case 'V':
                while (/I|X|V/.test(str[i])) {curr += str[i]; i++;}
                result.push(ones[curr]); break;
        }
      return Number(result.join(''));
    }
}

// console.log(RomanNumerals.fromRoman('MMMDCLXVI')); // returns 3666
console.log(RomanNumerals.fromRoman('CMLX')); // returns 960
// console.log(RomanNumerals.toRoman(99)); // returns 'MDCLXVI'