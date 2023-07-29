const isPangram = string => new Set(string.toLowerCase().split('').filter(e=>/[a-z]/.test(e))).size == 26;

// "The quick brown fox jumps over the lazy dog."
console.log(isPangram("The quick brown fox jumps over the lay dogggggg."));