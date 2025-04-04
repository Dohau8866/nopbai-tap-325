
    <script>  
        function calculateBMI() {  
            // Lấy giá trị cân nặng và chiều cao từ input  
            const weight = parseFloat(document.getElementById('weight').value);  
            const height = parseFloat(document.getElementById('height').value);  

            // Tính toán BMI  
            const bmi = weight / (height * height);  

            // Phân loại BMI  
            let classification;  
            if (bmi < 18.5) {  
                classification = "Cân nặng thấp (gầy)";  
            } else if (bmi >= 18.5 && bmi < 25) {  
                classification = "Bình thường";  
            } else if (bmi >= 25 && bmi < 30) {  
                classification = "Thừa cân";  
            } else if (bmi >= 30 && bmi < 35) {  
                classification = "Béo phì độ I";  
            } else if (bmi >= 35 && bmi < 40) {  
                classification = "Béo phì độ II";  
            } else {  
                classification = "Béo phì độ III";  
            }  

            // Hiển thị kết quả  
            alert(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)}.\nPhân loại: ${classification}`);  
        }  
    </script>  
