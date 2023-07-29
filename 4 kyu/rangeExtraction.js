const solution = list => {
    let replacement, spliceRange=[]; list.push('end');
    for (let i=0; list[i]!=='end'; i++) {
        if (list[i]+1===list[i+1] && list[i+1]+1===list[i+2]){
            while (list[i]+1===list[i+1] && list[i+1]+1===list[i+2]) {
                !spliceRange.length ? spliceRange.push(i) : i++;
            }
            spliceRange.push(i+1);
            replacement = list[spliceRange[0]] + '-' + list[spliceRange[1]];
            list.splice(spliceRange[0],spliceRange[1]-spliceRange[0]+1,replacement);
            i=spliceRange[0], spliceRange=[];
        } 
    } list.pop();
    return list.join();
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// return: "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"