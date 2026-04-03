const api = 'https://a.4cdn.org/po/threads.json'
fetch(api)
.then(response => response.json())
.then(data => {
    data.forEach(data => {
        data.threads.forEach(data => {
            console.log(data.last_modified)
        })
    })    
    });

document.getElementById("data").innerHTML = "assoy"