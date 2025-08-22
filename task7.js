function formatPhoneNumber(arr){
    str=''
    for(let i=0; i<arr.length; i++){
        str+=arr[i]

    }
    return `(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
}
let arr=[]
let n=10
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-raqamni kiriting(0-9) oraligida`)
    arr.push(a)
}
alert(formatPhoneNumber(arr))
