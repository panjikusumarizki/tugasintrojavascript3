const tambah = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let buah = ['anggur','pisang','jeruk','mangga']
            buah.push(nama)
            if (typeof(nama) === 'string'){
                resolve(buah)
            } else {
                reject(new Error('Input harus string !'))
            }
        }, 2000)
    })
}

tambah('melon').then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error.message)
})