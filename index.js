const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
        .then(json => {json.map(a => console.log(a.name))}))
    .catch(error => {
        console.log(error.message)
    })

/* menampilkan di debug console browser
npm i -g inspect-process (install inspect package)
node --inspect-brk index.js

chrome://inspect/#devices */



    
// const express = require('express')
// const app = express()

// app.get('/', (request, response) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => response.send(json.map(a => a.name)))
//     .catch(error => {
//         console.log(error.message)
//     })
// })

// app.listen(3000, () => {
//     console.log('App running on http://localhost:3000')
// })