function readNumber() {
    const number = document.getElementById(numberInput).Value;

    // Lấy giá trị từ ô nhập 
    let reading; // Biến để lưu cách đọc của số
    switch (number) {
        case '0':
            reading = 'Số Không';
            break;
        case '1':
            reading = 'Số Một';
            break;

        case  '2':
            reading = 'Số Hai';
            break;
        case '3':
            reading = 'Số Ba';
            break;
        case '4':
            reading = 'Số Bốn';
            break;
        case '5':
            reading = 'Số Năm';
            break;
        case '6':
            reading = 'Số Sáu';
            break;
        case '7':
            reading = 'Số Bảy';
            break;
        case '8':
            reading = 'Số Tám';
            break;
        case '9':
            reading = 'Số Chín';
            break;
        default:
            reading = 'in vui lòng nhập số từ 0 đến 9.';
            // Thông báo nếu số không hợp lệ
            break;
        
    }
    // Hiển thị kết quả lên màn hình
    document.getElementById('result'(erText = reading;
}




