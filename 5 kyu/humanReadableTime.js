const humanReadable = sec => {
    const a = ['00','00','00'],
    pad = t => String(a[t]).length<2 ? a[t] = '0' + a[t] : a[t];
    a[2] = sec%60; min = Math.floor(sec/60);
    if (min) a[1] = min%60; hour = Math.floor(min/60);
    if (hour) a[0] = hour;
    return `${pad(0)}:${pad(1)}:${pad(2)}`;
}

console.log(humanReadable(45296));

//   strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//   strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//   strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');