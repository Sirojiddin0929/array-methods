function unli(arr){
    let lst=[]
    for(let i=0; i<arr.length; i++){
        let str=''
        for(let j=0; j<arr[i].length; j++){
            
            if(arr[i][j].toLowerCase()==='a' ||arr[i][j].toLowerCase()==='i'||arr[i][j].toLowerCase()==='o'||arr[i][j].toLowerCase()==='u'||arr[i][j].toLowerCase()==='e' ){
                str+=arr[i][j].toLowerCase()
            }

        }
        lst.push(str)

    }
    return lst
}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=prompt(`${i+1}-stringni kiriting`)
    arr.push(a)
}
alert(unli(arr))