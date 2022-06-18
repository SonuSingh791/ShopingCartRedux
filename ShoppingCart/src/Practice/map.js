let arr = ["Sonu Singh", "Sonu Kumar", "Sumit Malik"];

let narr = arr.map((str) => {
    let newStr = str.split(" ");
    for(let i = 0; i < newStr.length; i++){

    }
    return newStr[0][0]+"."+newStr[1][0]+"."
})
console.log(narr)