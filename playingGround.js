// callback
function getData (callback) {
    setTimeout(() => {
        const data = 'some data';
        callback(data);
    }, 1000);
}

getData((data) => {
    console.log(data)
});


// promise
function getData1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data1 = 'some data';
            resolve(data1);
        }, 5000);
})

}

getData1()
.then((data1) => {
    console.log(data1);
})
.catch((err) => {
    console.log(err);
})


// async and await

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data2 = 'some data';
            resolve(data2);
        },5000);
    })
}
async function main() {
    const data2 = await getData2();
    console.log(data2);
}

main();