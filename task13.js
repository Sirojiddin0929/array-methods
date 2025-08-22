function distance(arr) {
    let n = arr.length
    let total = (n * (n + 1)) / 2
    let sum = nums.reduce((a, b) => a + b, 0);
    return total - sum
}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-raqamni kirit (0-9) oraliqda kirit`)
    arr.push(a)
}
alert(distance(arr))
