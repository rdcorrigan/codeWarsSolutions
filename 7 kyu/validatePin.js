function validatePIN (pin) {
    pin = pin.toString().split('');
    if (pin.length != 4 && pin.length != 6) return false;
    for (let i=0; i<pin.length; i++) {
        if (/\D/.test(pin[i])) return false;
    }
    return true;
}

// console.log(validatePIN(-1.234));
console.log(validatePIN(123456));