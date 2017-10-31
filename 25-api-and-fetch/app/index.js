// API and fetch

// Http Methods
// GET => retrieves data and has no secondary effect.
// POST => sends data to a server to add resources. 
// HEAD, DELETE, PATCH...

const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url, {
    method: 'GET'
})
.then(response => response.json())
.then(json => console.log(json));


console.log("API calls are awesome!");

const url2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(url2, {
    method: 'GET'
})
.then(response => response.json())
.then(json => console.log(json));