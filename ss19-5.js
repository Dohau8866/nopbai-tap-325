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