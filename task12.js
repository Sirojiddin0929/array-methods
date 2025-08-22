function indeed(arr) {
    return function inner(num, i = 0) {
        if (i === arr.length) return []
        return [arr[i] * num].concat(inner(num, i + 1))
    }
}
let arr = []
let n = +prompt("Array nechta elementdan iborat")
for (let i = 0; i < n; i++) {
    let a = +prompt(`${i+1}-sonni kirit`)
    arr.push(a)
}
let num = +prompt("Qaysi songa kopaytiramiz");
alert(indeed(arr)(num))
