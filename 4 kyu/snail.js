function snail(array) {
    var n = array.length, i = 0, top = 0, bottom = n - 1, end = n - 1,
    arr = [], len = Math.pow(n, 2);
    if (n < 2) return array[0];
    function right() {
      return arr = arr.concat(array[i]);
    }
    function down() {
      i++;
      if (i - 1 == top && i + 1 == bottom && end < 2) left();
      while (i < bottom && arr.length < len) {
        arr.push(array[i][end]);
        array[i].splice(end, 1);
        i++;
      }
      end--;
      return arr;
    }
    function left() {
      return arr = arr.concat(array[i].reverse());
    }
    function up() {
      i--;
      if (i - 1 == top && i + 1 == bottom) right();
      while (i > top && arr.length < len) {
        arr.push(array[i][0]);
        array[i].splice(0, 1);
        i--;
      }
      end--;
      return arr;
    }
    while (arr.length < len) {
      right(), down(), left(), up();
      top++, bottom--, i++;
    }
    return arr;  
  }
  
// console.log(snail([[ 1,  2,  3,  4,  5, 6], 
//                   [20, 21, 22, 23, 24, 7], 
//                   [19, 32, 33, 34, 25, 8], 
//                   [18, 31, 36, 35, 26, 9], 
//                   [17, 30, 29, 28, 27, 10], 
                  // [16, 15, 14, 13, 12, 11]]));
  
console.log(snail([[1,2,3,1],
                    [4,5,6,9],
                    [7,8,9,6],
                    [4,2,7,8]]))