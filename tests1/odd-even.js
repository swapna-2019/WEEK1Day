let number = 10
let evencount = 0
let oddcount = 0
for(let i=0; i<=number; i++){
    if(i%2===0)
    {
        console.log(i + '= even')
        evencount++;
    }
    else{
        console.log(i + ' = odd')
        oddcount++;
    }
}
console.log(evencount)
console.log(oddcount)