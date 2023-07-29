const numberToEnglish = n => {
    const reg=/(-|\.)/, 
        arr=n.toString().split(''), 
        valid=[...arr].sort(), 
        ones=Number(arr[arr.length-1]), 
        tens=Number(arr[arr.length-2]), 
        hunds=Number(arr[arr.length-3]), 
        thous=Number(arr[arr.length-4]), 
        tThous=Number(arr[arr.length-5]), 
        obj = {
                0: 'zero', 1: 'one', 2: 'two', 3: 'three',
                4: 'four', 5: 'five', 6: 'six', 7: 'seven',
                8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
                12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
                16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
                20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
                60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
                100: 'hundred', 1000: 'thousand'
            }
    if (n>99999 || reg.test(valid[0])) return '';
    switch (arr.length) {
        case 1:
            return obj[n];
        case 2:
            if (n<=20) return obj[n];
            if (!ones) return `${obj[tens*10]}`;
            return `${obj[tens*10]} ${obj[(ones)]}`;
        case 3:
            if (!ones) {
                if (!tens) {
                    return `${obj[hunds]} hundred`;
                }
                return `${obj[hunds]} hundred ${obj[tens*10]}`;
            }
            if (tens<2) return `${obj[hunds]} hundred ${obj[(tens*10)+ones]}`;
            return `${obj[hunds]} hundred ${obj[tens*10]} ${obj[ones]}`;
        case 4:
            if (!ones) {
                if (!tens) {
                    if (!hunds) { 
                        return `${obj[thous]} thousand`;
                    }
                    return `${obj[thous]} thousand ${obj[hunds]} hundred`;
                }
                return `${obj[thous]} thousand ${obj[hunds]} hundred ${obj[tens*10]}`;
            }
            if (!tens) {
                if (!hunds) {
                    return `${obj[thous]} thousand ${obj[ones]}`;
                }
            }
            if (!hunds){
                if (tens<2) return `${obj[thous]} thousand ${obj[tens*10+ones]}`;
                else return `${obj[thous]} thousand ${obj[tens*10]} ${obj[ones]}`;
            }
            if (tens<2) return `${obj[thous]} thousand ${obj[hunds]} hundred ${obj[(tens*10)+ones]}`;
            else return `${obj[thous]} thousand ${obj[hunds]} hundred ${obj[tens*10]} ${obj[(ones)]}`;
        case 5:
            if (!ones) {
                if (!tens) {
                    if (!hunds) { 
                        if (!thous) {
                            return `${obj[tThous*10]} thousand`;
                        }
                        return `${obj[tThous*10]} ${obj[thous]} thousand`;
                    }
                    if (!thous) {
                        return `${obj[tThous*10]}  thousand ${obj[hunds]} hundred`;
                    }
                    return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[hunds]} hundred`;
                }
                if (!hunds) {
                    if (!thous) {
                        return `${obj[tThous*10]} thousand ${obj[tens*10]}`;
                    }
                    return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[tens*10]}`;
                }
                if (!thous) {
                    return `${obj[tThous*10]} thousand ${obj[hunds]} hundred ${obj[tens*10]}`;
                }
                if (tThous<2) {
                    return `${obj[tThous*10+thous]} thousand ${obj[hunds]} hundred ${obj[tens*10]}`;
                }
                return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[hunds]} hundred ${obj[tens*10]}`;
            }
            if (!tens) {
                if (!hunds) { 
                    if (!thous) {
                        return `${obj[tThous*10]} thousand ${obj[(ones)]}`;
                    }
                    if (tThous<2) return `${obj[tThous*10+thous]} thousand ${obj[(ones)]}`;
                    return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[(ones)]}`;
                }
                if (!thous) {
                    return `${obj[tThous*10]} thousand ${obj[hunds]} hundred ${obj[(ones)]}`;
                }
                if (tThous<2) {
                    return `${obj[tThous*10+thous]} thousand ${obj[hunds]} hundred ${obj[ones]}`;
                }
                return `${obj[tThous]} ${obj[thous]} thousand ${obj[hunds]} hundred ${obj[(ones)]}`;
            }
            if (!hunds) { 
                if (!thous) {
                    if (tens<2) return `${obj[tThous*10]} thousand ${obj[(tens*10+ones)]}`;
                    return `${obj[tThous*10]} thousand ${obj[(tens*10)]} ${obj[(ones)]}`;
                }
                if (tens<2) return `${obj[tThous*10+thous]} thousand ${obj[(tens*10+ones)]}`;
                return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[(tens*10)]} ${obj[(ones)]}`;
            }
            if (!thous) {
                if (tens<2) return `${obj[tThous*10]} thousand ${obj[hunds]} hundred ${obj[(tens*10+ones)]}`;
                return `${obj[tThous*10]} thousand ${obj[hunds]} hundred ${obj[(tens*10)]} ${obj[(ones)]}`;
            }
            if (tThous<2) {
                if (tens<2) {
                return `${obj[tThous*10+thous]} thousand ${obj[hunds]} hundred ${obj[(tens*10+ones)]}`;
                }
                return `${obj[tThous*10+thous]} thousand ${obj[hunds]} hundred ${obj[(tens*10)]} ${obj[(ones)]}`;
            }
            if (tens<2) return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[hunds]} hundred ${obj[(tens*10+ones)]}`;
            return `${obj[tThous*10]} ${obj[thous]} thousand ${obj[hunds]} hundred ${obj[(tens*10)]} ${obj[(ones)]}`;
    }
}

console.log(numberToEnglish(10603));