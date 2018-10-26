const input = [1, 2, 2, 2, 2, 2];

const minimunUniqueSum = arr => {
    // Write your code here
    arr.sort((a, b) => a - b); // asc
    
    const len = arr.length;
    let i = 1;
    let sum = arr[0];
    let prev = arr[0];
    
    while (i < len) {
        let number = arr[i];
        
        if (prev >= number) {
            number = prev + 1;
        }
        
        sum += number;
        prev = number;
        i++;
    }
    
    return sum;
}

console.log(minimunUniqueSum(input));
