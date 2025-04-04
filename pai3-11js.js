function readNumber() {  
    const number = document.getElementById('numberInput').value;  // Lấy giá trị từ ô nhập  
    const readings = ['Không', 'Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín'];  
    
    // Kiểm tra nếu giá trị nằm trong khoảng từ 0 đến 9  
    if (number >= 0 && number <= 9) {  
        document.getElementById('result').innerText = 'Cách đọc: ' + readings[number];  // Hiển thị cách đọc  
    } else {  
        document.getElementById('result').innerText = 'Xin vui lòng nhập số từ 0 đến 9.';  // Thông báo lỗi  
    }  
}  