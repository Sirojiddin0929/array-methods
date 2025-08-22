function kub(arr){
    return arr.map((i)=>i*i*i).reduce((a,b)=>a+b,0)

}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-sonni kiriting`)
    arr.push(a)
}
alert(kub(arr))