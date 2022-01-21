const fetch = require('cross-fetch')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(response => {
    return response.json()
})
.then(responseJson => {
    const name = responseJson.map(item => item.name)
    console.log(name)
})
.catch(err => {
    console.log(err)
})

const daftarNama = async () => {
    try {
        const response = await fetch(url)
        const responseJson = await response.json()
        const names = responseJson.map(item => item.name)
        console.log(names)
    } catch(err) {
        console.log(err)
    }
}
daftarNama()