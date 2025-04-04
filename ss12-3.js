function isPrime(num) {  
    if (num <= 1) return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố  
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) return false; // Nếu chia hết, không phải số nguyên tố  
    }  
    return true; // Nếu không chia hết cho số nào, là số nguyên tố  
}  

function getFirst20Primes() {  
    const primes = [];  
    let count = 0;  
    let num = 2; // Số nguyên tố đầu tiên  

    while (count < 20) {  
        if (isPrime(num)) {  
            primes.push(num);  
            count++;  
        }  
        num++;  
    }  
    return primes;  
}  

// Hiển thị kết quả  
const primes = getFirst20Primes();  
console.log(`20 số nguyên tố đầu tiên: ${primes.join(', ')}`);  