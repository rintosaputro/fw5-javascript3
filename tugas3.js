// NO 1
const cekNegaraAsean = (negara) => { // inisialisasi fungsi chekNegaraAsean dengan parameter negara
    return new Promise((resolve, reject) => { // mengembalikan promise dengan parameter resolve untuk berhasil dan reject untuk error
        setTimeout(() => { // inisialisasi setTimeOut untuk membuat program dijalankan dalam waktu yang ditentukan di parameter ke 2 dan parameter ke 1 berisi callback function 
            const daftarNegara = ['Filipina', 'Indonesia', 'Malaysia', 'Singapura', 'Thailand', 'Brunei', 'Vietnam', 'Laos', 'Myanmar', 'Kamboja'] // daftarNegara yang berisi array negara asean
            let cek = daftarNegara.find(item => item.toLowerCase() === negara.toLowerCase()) // mencari data daftarNegara dengan find dan mengembalikan item yang sama dengan negara yang keduanya diubah terlebih dahulu menjadi huruf kecil
            if(cek) { // inisialisasi pengkondisian mengecek cek apakah true/false
                resolve(`${cek} adalah negara ASEAN`) // jika true rosolve diisi dengan pesan cek + adalah negara ASEAN
            } else { // inisialisasi pengkondisian jika fals
                reject(new Error(`${negara} bukan bagian dari ASEAN`)) // mengisi reject dengan pesan error jika false
            }
        }, 1000) // menentukan waktu tunggu dari setTimeOut yaitu 1 detik
    })
}

// then catch
cekNegaraAsean('filipina') //memanggil fungsi cekNegaraAsean dan memberi nilai parameter negara yang akan dicek
.then((result) => { // inisialisasi promise resolve dengan then dengan parameter result
    console.log(result) // mencetak parameter result
})
.catch((err) => { // inisialisasi promise reject dengan catch dengan parameter err
    console.log(err) // mencetak parameter err yang berisi error
})
// Output => Filipina adalah negara ASEAN

// try catch
const proses = async (negara) => { // inisialisasi fungsi async dengan parameter negara
    try{ // inisialisasi try untuk promise resolve 
        const result = await cekNegaraAsean(negara) // menunggu hasil dari cekHariKerja  dengan deklarasi variable result
        console.log(result) // mencetak parameter result
    }
    catch(err) { // inisialisasi catch untuk promise reject dengan parameter err yang berisi reject
        console.log(err) // mencetak error dari parameter err
    }
}
proses('amerika') // memanggil fungsi async proses dengan parameter amerika yang akan di cek
// Output => Error: amerika bukan bagian dari ASEAN



// NO 2
let saldo = 1000000 // deklarasi saldo
const pembayaran = (harga) => { // inisialisasi fungsi pembayaran dengan parameter harga
    return new Promise((resolve, reject) => { // // mengembalikan promise dengan parameter resolve untuk berhasil dan reject untuk error
        if(typeof(harga) === 'number') { // melakukan validasi apakah parameter harga bertipe number
            setTimeout(() => { // inisialisasi setTimeOut untuk membuat program dijalankan dalam waktu yang ditentukan di parameter ke 2 dan parameter ke 1 berisi callback function 
                if(saldo >= harga) { // validasi apakah nilai saldo lebih besar dari harga
                    saldo -= harga // nilai saldo dikurangi harga
                    resolve(`Pembayaran sukses! Saldo anda saat ini ${saldo}`) // memberi niali untuk resolve 
                } else { // kondisi jika harga lebih besar dari saldo
                    reject(new Error('Maaf saldo anda kurang!')) // mencetak reject dengan pesan error
                }
            }, 1000) // menentukan waktu tunggu dari setTimeOut yaitu 1 detik
        }
    })
}

pembayaran(500000) // memanggil fungsi pembayaran dengan mengisi parameter harga 500000
.then((result) => { // inisialisasi promise resolve dengan then dengan parameter result
    console.log(result) // mencetak parameter result
})
.catch((err) => { // inisialisasi promise reject dengan catch dengan parameter err
    console.log(err) // mencetak parameter err yang berisi error
})
//Output => Pembayaran sukses! Saldo anda saat ini 500000

const pembayaranAsync = async (harga) => { // inisialisasi fungsi async dengan parameter harga
    try{ // inisialisasi try untuk promise resolve 
        const result = await pembayaran(harga) // menunggu hasil dari pembayaran  dengan deklarasi variable result
        console.log(result) // mencetak parameter result
    }
    catch(err) { // inisialisasi catch untuk promise reject dengan parameter err yang berisi reject
        console.log(err) // mencetak error dari parameter err
    }
}
pembayaranAsync(1500000) // memanggil fungsi async pembayaranAsync dengan parameter 1500000 yang akan di cek
// Output => Error: Maaf saldo anda kurang!