function toqSon(arr){
    for(let i of arr){
        if(i%2===1){
            return i
            break

        }
    
    }
}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-sonni kiriting`)
    arr.push(a)
}
alert(toqSon(arr))