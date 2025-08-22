function splitWord(str){
     let arr=[]
     let lst=''
     for(let i=0; i<str.length; i++){
        lst+=str[i]
        arr.push(lst)
        
     }
     return arr


}
let str=prompt("1 ta so'zdan iborat string kirit")
alert(splitWord(str))