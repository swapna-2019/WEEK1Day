function login(credentials){   
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(credentials==="vidya"){
               resolve("Valid data")
                 }else{
                  reject("Invalid data")
                 }        
        }, 100);
    })   
 }


 
async function validateUser(user, loginInfo) {
    try {
        const message = await loginInfo(user);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
validateUser("vidya1",login)

function login(credentials){   
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(credentials==="vidya"){
               resolve("Valid data")
                 }else{
                  reject("Invalid data")
                 }        
        }, 100);
    })   
 }


function validateUser(user,callback){  
        callback(user).then((message)=>console.log(message))
        .catch((errorMsg)=>console.log(errorMsg))
}

validateUser("vidya",login)
//console.log("Click on login")

validateUser("Aswin",login)
//console.log("Click on login")
function firstFn(callback){
    setTimeout(() => {
        console.log("calling first fn")
    }, 3000);
    callback()
}
function secondFn(callback){
    setTimeout(() => {
        console.log("From second function")
    }, 3000);
    callback()
}
function thridFn(){
    setTimeout(() => {
        console.log("From third function")
    }, 3000);
   
}
//pyramid -->callback hell -->Promise
firstFn(function () {
    secondFn(function () {
        thridFn(fo());
    });
});
//js -->async, singlethreaded and non blocking io 


//4. callback function -higher order function

// setTimeout(() => {
//     console.log("Login to app")
// }, 2000);
// console.log("history of video")


function loginDetails(credentials){
    if(credentials=="7907668903"){
        console.log("Valid crdentials")
        history()
        recommended()
    }   
}

function history(){
    console.log("History of movies watched")
}

function recommended(){
    console.log("recommended to watch")
}

//loginDetails("7907668903")
//--------------------

//function fn(a){a()}

function watchVideo(user,onHistory,onRecommended){
    console.log("User Authentication")
    if(user=="Vidya"){
      console.log("Login successful")
      console.log("Fetch all the data from the server")
      onHistory()
      console.log("Fetch the recommded movies")
      onRecommended()
    }
}

function onHistory(){
    console.log("Histroy loaded")
}

function onRecommended(){
  console.log("Recommended movies added")
}

watchVideo("Vidya",onHistory,onRecommended)