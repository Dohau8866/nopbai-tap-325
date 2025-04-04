// Bài 1: In dãy Fibonacci  
function fibonacci(n) {  
    let fib = [0, 1];  
    for (let i = 2; i < n; i++) {  
        fib[i] = fib[i - 1] + fib[i - 2];  
    }  
    return fib.slice(0, n);  
}  

// Bài 2: Tính giai thừa của một số nguyên dương  
function factorial(n) {  
    if (n < 0) return undefined; // Giai thừa không xác định cho số âm  
    if (n === 0 || n === 1) return 1;  
    let result = 1;  
    for (let i = 2; i <= n; i++) {  
        result *= i;  
    }  
    return result;  
}  

// Bài 3: In tam giác vuông (với góc vuông ở vị trí khác nhau)  
function printRightTriangle(rowCount) {  
    for (let i = 1; i <= rowCount; i++) {  
        let row = ' '.repeat(rowCount - i) + '*'.repeat(i);  
        console.log(row);  
    }  
}  

// Bài 4: In hình chữ nhật rỗng  
function printHollowRectangle(rows, cols) {  
    for (let i = 0; i < rows; i++) {  
        let row = '';  
        for (let j = 0; j < cols; j++) {  
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {  
                row += '*'; // In dấu *  
            } else {  
                row += ' '; // In dấu cách ở những vị trí bên trong  
            }  
        }  
        console.log(row);  
    }  
}  

// Bài 5: Tính lãi ngân hàng (lãi mẹ đẻ lãi con)  
function calculateCompoundInterest(principal, rate, time) {  
    return principal * Math.pow((1 + rate / 100), time);  
}  

// Ví dụ sử dụng các hàm  
console.log("Dãy Fibonacci:", fibonacci(10)); // In 10 số đầu tiên trong dãy Fibonacci  
console.log("Giai thừa của 5:", factorial(5)); // In giai thừa của 5  
console.log("In tam giác vuông với 5 hàng:");  
printRightTriangle(5); // In tam giác vuông với 5 hàng  
console.log("In hình chữ nhật rỗng 5x10:");  
printHollowRectangle(5, 10); // In hình chữ nhật rỗng 5 hàng và 10 cột  
console.log("Lãi suất sau 6 tháng cho 1000 với lãi suất hàng tháng 5%:", calculateCompoundInterest(1000, 5, 6));  