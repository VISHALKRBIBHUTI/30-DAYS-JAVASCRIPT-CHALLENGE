let array=[1,2,3,4,5];
console.log("original Array: ");

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

array.push(6);

console.log("After Push 6 in the array ");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}