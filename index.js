const express = require('express') // module
const bodyParser = require('body-parser')
const db = require('./db')
const response = require('./response')

const app = express() // variabel dengan module express
const port = 3000 // variabel mengatur port

app.use(bodyParser.json())

// route/url/endpoint utama ("/")
// mengambil function app dengan method get
app.get('/', (req, res) => { // yang menerima callback req dan res
  // get akan mengirim response ke browser yang nge request  
  
  // memanggil database dari tabel
  db.query("SELECT * FROM mahasiswa", (error, result) => {
    if (error) {
        // Mengembalikan response jika terjadi error
        response(500, null, "Error retrieving data", res);
    } else {
        // Mengembalikan response sukses dengan data dari mahasiswa
        response(200, result, "get all data from mahasiswa", res);
    }
  })
})

// memanggil nim dari database pada route (http://localhost:3000/find?nim=203040020)
app.get('/find', (req, res) => {
    console.log('find nim: ', req.query.nim)
    
    const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`
    // masukan ke database
    db.query(sql, (error, result) => {
        response(200, result, "find mahasiswa name", res)
    })
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