script>  
        function printNameAndAge() {  
            const name = document.getElementById("userName").value;  
            const age = document.getElementById("userAge").value;  
            document.getElementById("output").innerText = `Tên: ${name}, Tuổi: ${age}`;  
        }  
        
        function printMultiplicationTable() {  
            const number = document.getElementById("multiplier").value;  
            let result = '';  
            for (let i = 1; i <= 10; i++) {  
                result += `${number} x ${i} = ${number * i}\n`;  
            }  
            document.getElementById("output").innerText = result;  
        }  
        
        function checkEvenOdd() {  
            const number = document.getElementById("evenOdd").value;  
            const result = number % 2 === 0 ? "Số chẵn" : "Số lẻ";  
            document.getElementById("output").innerText = result;  
        }  
        
        function calculateSum() {  
            const n = parseInt(document.getElementById("sumToN").value);  
            const total = (n * (n + 1)) / 2;  
            document.getElementById("output").innerText = `Tổng từ 1 đến ${n} là: ${total}`;  
        }  
        
        function printSequence() {  
            const sequence = document.getElementById("sequence").value.split(',');  
            document.getElementById("output").innerText = `Dãy số: ${sequence.join(', ')}`;  
        }  
        
        function checkPrime() {  
            const number = parseInt(document.getElementById("primeCheck").value);  
            if (number <= 1) {  
                document.getElementById("output").innerText = `${number} không phải là số nguyên tố.`;  
                return;  
            }  
            for (let i = 2; i <= Math.sqrt(number); i++) {  
                if (number % i === 0) {  
                    document.getElementById("output").innerText = `${number} không phải là số nguyên tố.`;  
                    return;  
                }  
            }  
            document.getElementById("output").innerText = `${number} là số nguyên tố.`;  
        }  
        
        function reverseString() {  
            const str = document.getElementById("reverseStringInput").value;  
            const reversed = str.split('').reverse().join('');  
            document.getElementById("output").innerText = `Chuỗi đảo ngược: ${reversed}`;  
        }  
        
        function exitProgram() {  
            alert("Chương trình đã thoát!");  
        }  
    </script>  