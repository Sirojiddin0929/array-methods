function tubson(arr){
    lst=[]
    for(let i of arr){
        if(i==2){
            lst.push(i)
        }
        if(i>2 && i%2==1){
            let count=0
            for(let j=1; j<=i; j++){
                if(i%j==0){
                    count++
                }

            }
            if(count==2){
                 lst.push(i)

            }

        }
    }
    return lst

}
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=+prompt(`${i+1}-stringni kiriting`)
    arr.push(a)
}
alert(tubson(arr))