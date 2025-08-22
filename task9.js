function chatRoomStatus(arr){
    
        if(arr.length===0){
           return "no one online"
        }
        if(arr.length===1){
           return `${arr[0]} online`
        }
        if(arr.length===2){
            return `${arr[0]} and ${arr[1]} online`
        }
        if(arr.length>2){
            return `${arr[0]}, ${arr[1]} and ${arr.length-2} more online `

        }

    }
let arr=[]
let n=+prompt("Array nechta elementdan iborat")
for(let i=0; i<n; i++){
    a=prompt(`${i+1}-stringni kiriting`)
    arr.push(a)
}
alert(chatRoomStatus(arr))