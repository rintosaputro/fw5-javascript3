const getmonth = (callback) => { // inisialisasi fungsi getmonth dengan parameter callback
    setTimeout(() => { // inisialisasi setTimeOut untuk memberi waktu tertentu untuk menjalankan perintah didalam callbac functionnya
        let error = false; // inisialisasi error dengan nilai false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'December'] // inisialisasi month degan tipe array
        if(!error) { // validasi apakah error false
            callback(null, month) // jika validasi true parameter callback akan diisi dengan null dan month
        } else { // validasi jika error true
            callback(new Error('Sorry Data Not Found'), []) // mengisi parameter callback dengan pesan error untuk parameter pertama dan array kosong untuk parameter kedua
        }
    }, 4000) // menentukan parameter ke dua setTimeOut untuk menjalankan program callback function pada parameter pertama dengan menunggu 4 detik
}

getmonth((err, arr) => { // memanggil fungsi getmonth dengan isi parameter callback function dengan 2 paramter err yang berupa pesan error dan arr yang berupa array
    if(err) { // validasi apakah nilai dari parameter err ada
        console.log(err)   // mencetak err jika true
    } else { // validasi false / jika err tidak null
        const month = arr.map(item => item) // mengakses nilai dari parameter arr dengan map yang akan mencetak item dari array arr
        console.log(...month)
    }
})

/*
Output:
January February March April May Juni July August September October November December
*/