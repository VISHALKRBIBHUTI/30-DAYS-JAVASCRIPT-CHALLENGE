let array=[1,2,3,4,5];

console.log("original array ");

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

array.shift(); //remove element from start

console.log("After Performing shift operation");

for (let i=0;i<array.length;i++){
    console.log(array[i]);
}

