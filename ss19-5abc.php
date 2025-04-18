<!DOCTYPE html>  
<html lang="vi">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Ứng Dụng Bookmark</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            background-color: #f4f4f4;  
            margin: 0;  
            padding: 20px;  
        }  

        .container {  
            max-width: 600px;  
            margin: auto;  
            background: white;  
            padding: 20px;  
            border-radius: 8px;  
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
        }  

        h1 {  
            text-align: center;  
        }  

        form {  
            display: flex;  
            justify-content: space-between;  
            margin-bottom: 20px;  
        }  

        input[type="text"],  
        input[type="url"] {  
            width: 45%;  
            padding: 10px;  
            border: 1px solid #ccc;  
            border-radius: 4px;  
        }  

        button {  
            padding: 10px 15px;  
            border: none;  
            background-color: #5cb85c;  
            color: white;  
            border-radius: 4px;  
            cursor: pointer;  
        }  

        button:hover {  
            background-color: #4cae4c;  
        }  

        #bookmark-list {  
            list-style-type: none;  
            padding: 0;  
        }  

        .bookmark-item {  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            background: #f9f9f9;  
            margin: 5px 0;  
            padding: 10px;  
            border-radius: 4px;  
        }  

        .delete-btn {  
            background: #d9534f;  
            border: none;  
            color: white;  
            padding: 5px 10px;  
            border-radius: 4px;  
            cursor: pointer;  
        }  

        .delete-btn:hover {  
            background: #c9302c;  
        }  
    </style>  
</head>  
<body>  
    <div class="container">  
        <h1>Quản Lý Bookmark</h1>  
        <form id="bookmark-form">  
            <input type="text" id="website-name" placeholder="Tên trang web" required>  
            <input type="url" id="website-url" placeholder="URL trang web" required>  
            <button type="submit">Thêm Bookmark</button>  
        </form>  
        <ul id="bookmark-list"></ul>  
    </div>  
    <script>  
        document.getElementById('bookmark-form').addEventListener('submit', addBookmark);  

        function addBookmark(e) {  
            e.preventDefault();  

            const websiteName = document.getElementById('website-name').value;  
            const websiteUrl = document.getElementById('website-url').value;  

            const bookmark = {  
                name: websiteName,  
                url: websiteUrl  
            };  

            let bookmarks = getBookmarksFromLocalStorage();  
            bookmarks.push(bookmark);  
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));  

            document.getElementById('bookmark-form').reset();  
            displayBookmarks();  
        }  

        function getBookmarksFromLocalStorage() {  
            let bookmarks;  
            if (localStorage.getItem('bookmarks') === null) {  
                bookmarks = [];  
            } else {  
                bookmarks = JSON.parse(localStorage.getItem('bookmarks'));  
            }  
            return bookmarks;  
        }  

        function displayBookmarks() {  
            const bookmarks = getBookmarksFromLocalStorage();  
            const bookmarkList = document.getElementById('bookmark-list');  

            bookmarkList.innerHTML = '';  

            bookmarks.forEach((bookmark, index) => {  
                bookmarkList.innerHTML += `  
                    <li class="bookmark-item">  
                        <span><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></span>  
                        <button class="delete-btn" onclick="deleteBookmark(${index})">Xoá</button>  
                    </li>  
                `;  
            });  
        }  

        function deleteBookmark(index) {  
            let bookmarks = getBookmarksFromLocalStorage();  
            bookmarks.splice(index, 1);  
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));  
            displayBookmarks();  
        }  

        // Hiển thị các bookmark khi tải trang  
        displayBookmarks();  
    </script>  
</body>  
</html>  