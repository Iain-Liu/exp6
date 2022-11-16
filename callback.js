let ms = 1000;
console.log('task 1 begins');
console.log(`sleeping for ${ms} ms`);
setTimeout(() => {
    console.log('Task 1 ends');
    ms = 2000;
    console.log('task 2 begins');
    console.log(`sleeping for ${ms} ms`);
    setTimeout(() => {
        console.log('Task 2 ends');
        ms = 3000;
        console.log('task 3 begins');
        console.log(`sleeping for ${ms} ms`);
        setTimeout(() => {
            console.log('Task 3 ends');
            ms = 4000;
            console.log('task 4 begins');
            console.log(`sleeping for ${ms} ms`);
            setTimeout(() => console.log('Task 4 ends'), ms);
        }, ms);
    }, ms);
}, ms);