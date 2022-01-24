const cekHariKerja = (day) => { // inisialisasi fungsi cekHariKerja dengan parameter day
    return new Promise((resolve, reject) => { // mengembalikan promise
        setTimeout(() => { // inisialisasi setTimeOut untuk membuat program dijalankan dalam waktu yang ditentukan di parameter ke 2 dan parameter ke 1 berisi callback function 
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] // inisialisasi array hari yang akan dicek
            let cek = dataDay.find((item) => { // melakukan pencarian data di dataDay dengan find
                return item === day // mengembalikan item di dataDay yang nilainya sama dengan parameter
            })
            if(cek) { // inisialisasi pengkondisian mengecek cek apakah true/false
                resolve(cek) // jika true resolve akan diisi nilai dari cek
            } else { // inisialisasi pengkondisian jika false
                reject(new Error('Hari ini bukan hari kerja')) // mengisi reject dengan error jika false
            }
        }, 3000) // menentukan waktu tunggu dari setTimeOut yaitu 3 detik
    })
}

// then dan catch
cekHariKerja('senin') //memanggil fungsi cekHariKerja dan memberi nilai parameter day yang akan dicek
.then((response) => { // inisialisasi promise resolve dengan then dengan parameter response
    console.log(response) // mencetak parameter response
})
.catch((err) => { // inisialisasi promise reject dengan catch dengan parameter err
    console.log(err) // mencetek parameter err
})
// output => senin

// async await
const proses = async (day) => { // inisialisasi fungsi async
    try { // inisialisasi try untuk promise resolve 
        const response = await cekHariKerja(day) // menunggu hasil dari cekHariKerja  dengan deklarasi variable response
        console.log(response) // mencetak hasil dari response
    }
    catch(err) { // inisialisasi catch untuk promise reject dengan parameter err yang berisi reject
        console.log(err) // mencetak error
    }
}

proses('minggu') // memanggil fungsi async proses dengan parameter minggu yang akan di cek
// output =>  Error: Hari ini bukan hari kerja