
let numberarry=[2,3,4,5,6,7,8]
let num2=[5,6,7,8]
let z = []
for(let i=0;i<numberarry.length;i++){ //outer loop
    //2 --> 5, 2-->6, 2-->7, 2-->8
  for(let j=0;j<num2.length;j++){ //inner loop
     //console.log("Outerloop :"+numberarry[i] +"innerloop",num2[j])
     if(numberarry[i]===num2[j]){
        //console.log("Match found :"+numberarry[i])
        z.push(numberarry[i])
     }
  }

}
console.log("Common elements in both arrays :" , z )

