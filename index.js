const api = 'https://a.4cdn.org/po/threads.json'
const kali = document.getElementById("data")
fetch(api)
.then(response => response.json())
.then(data => {
    data.forEach(data => {
        data.threads.forEach(data => {
            kali.innerHTML += data.last_modified + "</br>"
        })
    })    
    });