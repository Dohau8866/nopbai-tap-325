<!DOCTYPE html>  
<html lang="vi">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Bài 2: Quản lý khóa học</title>  
</head>  
<body>  
    <h1>Bài 2: Quản lý khóa học</h1>  
    <script>  
        // Mảng khóa học ban đầu  
        let courses = [  
            { name: "JavaScript", status: "complete" },  
            { name: "HTML", status: "incomplete" },  
            { name: "CSS", status: "complete" }  
        ];  

        function printCourses() {  
            console.log("Danh sách khóa học:");  
            courses.forEach((course, index) => {  
                console.log(`${index + 1}. Tên: ${course.name}, Trạng thái: ${course.status}`);  
            });  
        }  

        const runProgram = () => {  
            while (true) {  
                const input = prompt("Nhập vào chữ cái C/R/U/D/E").toUpperCase();  
                if (input === "C") {  
                    const newCourse = prompt("Nhập vào tên khóa học mới:");  
                    const status = prompt("Nhập vào trạng thái hoàn thành (complete/incomplete):");  
                    courses.push({ name: newCourse, status });  
                    printCourses();  
                } else if (input === "R") {  
                    printCourses();  
                } else if (input === "U") {  
                    const indexToUpdate = parseInt(prompt("Nhập vào vị trí khóa học muốn cập nhật:")) - 1;  
                    if (indexToUpdate >= 0 && indexToUpdate < courses.length) {  
                        const newName = prompt("Nhập vào tên mới:");  
                        const newStatus = prompt("Nhập vào trạng thái mới (complete/incomplete):");  
                        courses[indexToUpdate] = { name: newName, status: newStatus };  
                        printCourses();  
                    } else {  
                        console.log("Vị trí không hợp lệ");  
                    }  
                } else if (input === "D") {  
                    const indexToDelete = parseInt(prompt("Nhập vào vị trí khóa học muốn xóa:")) - 1;  
                    if (indexToDelete >= 0 && indexToDelete < courses.length) {  
                        courses.splice(indexToDelete, 1);  
                        printCourses();  
                    } else {  
                        console.log("Vị trí không hợp lệ");  
                    }  
                } else if (input === "E") {  
                    alert("Cảm ơn bạn đã đến với Rikkei Academy");  
                    break;  
                } else {  
                    console.log("Mời bạn nhập lại.");  
                }  
            }  
        };  

        runProgram();  
    </script>  
</body>  
</html>  