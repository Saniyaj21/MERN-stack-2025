

function doSum(a, b, c, d, ...numbers) {
    
    console.log(numbers);
    
    let sum = 0;
    sum = a + b + c +d;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let res = doSum(1, 2, 3, 4, 5, 6, 7, 8)
let res2 = doSum(1, 2, 3, 4)
console.log(res);
