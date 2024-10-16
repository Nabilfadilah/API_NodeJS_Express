const express = require('express') // module
const bodyParser = require('body-parser')
const app = express() // variabel dengan module express
const port = 3000 // variabel mengatur port

app.use(bodyParser.json())

// route/url/endpoint utama ("/")
// mengambil function app dengan method get
app.get('/', (req, res) => { // yang menerima callback req dan res
  // get akan mengirim response ke browser yang nge request  
  res.send('Hello semuanya Selalu dihati!')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('login berhasil')
})

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send('Update berhasil')
})

// req : ngambil dari luar ke dalam, terpanggil atau tidak 
// res : ngirim keluar

// untuk me running dibalik layar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})