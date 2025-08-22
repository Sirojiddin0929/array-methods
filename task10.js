function assemble(arr){
    let count=0
    for(let i of arr){
        if(i===true){
            count++
        }
    }
    return count

}
// Ustoz bu masalani foydalanuvchi hech qachon boolen yani true false kiritta olmaydi. 
arr=[true,false,false,true,false,true,false,false]
alert(assemble(arr))