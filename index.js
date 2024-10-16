const express = require('express') // module
const app = express() // variabel dengan module express
const port = 3000 // variabel mengatur port

// route/url/endpoint utama ("/")
// mengambil function app dengan method get
app.get('/', (req, res) => { // yang menerima callback req dan res
  // get akan mengirim response ke browser yang nge request  
  res.send('Hello World NGABBERS Selalu dihati!')
})

// untuk me running dibalik layar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})