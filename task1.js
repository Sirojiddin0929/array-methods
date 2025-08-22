function numberSplit(son){
    if(son%2===0){
        return Array.of((son/2),(son/2))
    }
    return Array.of(Math.floor(son/2),(Math.floor(son/2)+1))


}
let son=+prompt("Sonni kiriting: ")
alert(numberSplit(son))