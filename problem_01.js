const m3_5 = [];

for (i=1; i<1000; i++) {
    if (i % 3 === 0) {
        m3_5.push(i);
    }
    else {
        if (i % 5 === 0) {
            m3_5.push(i);
        }
    }
}

console.log(m3_5.reduce((accumulator, currentValue) => accumulator + currentValue, 0));