

/* const promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve({
            name:"waqas",
            age:24
        })
    }
    else{
        reject("failed to fetch data")
    }
});

promise.then((data)=>{
console.log(data)
}).catch((err)=>{
console.log(err);
}) */


const promise = Promise.resolve('A').then(data=>console.log(data));