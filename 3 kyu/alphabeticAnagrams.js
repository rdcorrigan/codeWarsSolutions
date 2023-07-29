// function listPosition(word) {
//     var array = word.split("").sort();
//     var combinations = 1;
//     for (let i = 2; i < array.length; i++) {
//         combinations *= i;
//     }
//     // console.log('combinations:',combinations);
//     for (let i = 0; i < array.length; i++)
//     {
//         let count = 1;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] == array[i])
//                 count++;
//         }
//         // console.log('combinations:',combinations);
//         combinations /= count;
//         // console.log('combinations after /=:',combinations);
//     }
//     console.log('combinations:',combinations);
//     console.log('array:',array);
//     console.log('word[0]:',word[0]);
//     console.log('array.indexOf(word[0]):',array.indexOf(word[0]));
//     var index = combinations * array.indexOf(word[0]);
//     console.log('index:',index);
//     return array.length > 1 ? index + listPosition(word.substring(1)) : index + 1;
// }


function listPosition(word) {
    var indexer = {}; // D:3 B:1 A:0 C:2
    var counts = []; // 2 1 1 1

    var lettersCount = 0;
    word.split("").sort().forEach(function(x){
        if ( indexer[x] == undefined ) {
            indexer[x] = lettersCount;
            counts[lettersCount] = 0;
            lettersCount ++;
        }
    });

    var term = 1;
    var sum = term;
    word.split("").reverse().forEach(function(x, i){
        var step = i + 1, idx = indexer[x];
        counts[idx] ++;
        term /= counts[idx];
        for (var j = 0; j < idx; ++j) 
            if (counts[j] != 0) 
                sum += term * counts[j];
        term *= step;
    });
    return sum;
}


console.log(listPosition('BOOKKEEPER'));
// console.log(listPosition('QUESTION'));

// ABAB = 2
// AAAB = 1
// BAAA = 4
// QUESTION = 24572
// BOOKKEEPER = 10743