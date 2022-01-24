const fetch = require('cross-fetch') // deklarasi fetch untuk mengimport cross-fetch dengan require

const url = 'https://jsonplaceholder.typicode.com/users' // deklarasi url berisi alamat url api yang akan diambil datanya

fetch(url) // memanggil fetch dengan variable url sebagai parameternya
.then(response => { // menggunakan promise then dengan parameter response
    return response.json() // mengembalikan file json dengan response.json()
})
.then(responseJson => { // menggunakan promise then dengan parameter responseJson yang merupakan kembalian dari then sebelumnya
    const name = responseJson.map(item => item.name) // deklarasi name berisi perintah map untuk responseJson yang memliki parameter item dan mengembalikan nilai item.name
    console.log(name) // mencetak data name
})
.catch(err => { // menggunakan promise catch dengan parameter err yang berisi pesan error 
    console.log(err) // mencetak error mengambil dari parameter err
})

const daftarNama = async () => { // dekalarasi daftarNama berupa async function 
    try { // menggunakan try untuk promise nya
        const response = await fetch(url) // deklarasi response yang berisi perintah untuk menunggu fetch mengambil data dari url
        const responseJson = await response.json() // deklarasi responseJson yang akan menunggu hasil dari response dalam json
        const names = responseJson.map(item => item.name) // deklarasi names berisi me map responseJson dengan parameter item dan mengembalikan nilai item.name dari responseJson
        console.log(names) // mencetak names
    } catch(err) { // menggunakan catch promise  untuk error
        console.log(err) // mencetak nilai dari parameter err
    }
}
daftarNama() // memanggil fungsi daftarNama 

/* Output: 
[
  'Leanne Graham',
  'Ervin Howell',
  'Clementine Bauch',
  'Patricia Lebsack',
  'Chelsey Dietrich',
  'Mrs. Dennis Schulist',
  'Kurtis Weissnat',
  'Nicholas Runolfsdottir V',
  'Glenna Reichert',
  'Clementina DuBuque'
]
*/