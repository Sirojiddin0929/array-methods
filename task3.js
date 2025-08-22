function minMax(arr){
    return Array.of(Math.min(...arr),Math.max(...arr))
}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-sonni kiriting`)
    arr.push(a)
}
alert(minMax(arr))