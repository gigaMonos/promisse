console.log('Request data...')
const prom = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Prepering data...')
        let backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)//останавливаем работу промиса 
    }, 2000)
})
prom.then(data => {
    const promTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true //отправляем данные на сервер
            reject(data)
            console.log('in process', data)
        },2000)
    })
    promTwo.then(clientData => {
        console.log('Well done', clientData)
    })
})
.catch(err => console.log('error', err))