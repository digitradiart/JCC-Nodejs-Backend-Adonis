/*
3.
Ubahlah function berikut menjadi Async Await

const editData = (update) => {

fspromise.readFile('data.json')

.then(dataJson=>{

let data = JSON.parse(dataJson)

let updated={...data,...update}

return fspromise.writeFile('data.json',JSON.stringify(updated))

})

.then(()=>console.log('updated'))

.catch(err=>console.log(err))

}


CATATAN: fspromise adalah function yang berbasis promise */
