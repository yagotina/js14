const numbers = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30, 
    }, 
    foo2: { 
        k: 23, 
        p: 13, 
    }, 
}; 

function convert(obj) {
    const newObj = {};    
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            const innerObj = obj[key];
            for(let key in innerObj) {
                newObj[key] = innerObj[key];
            }
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(numbers)
console.log(convert(numbers));
