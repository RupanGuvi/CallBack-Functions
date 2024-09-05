//! Callback using settimeout

/*
console.log("First");
console.log("Second");
console.log("App is Started");
setTimeout(() => console.log("...loading"), 5000);
setTimeout(() => console.log("App Completed"), 5000);
console.log("App is Building");

*/

//! callback using Function

/*
const complete =()=>{
    console.log("Finish");
}
const add = (a) =>{ // (complete)
    var x = 2;
    var y=3;
    a(); //complete()
    console.log("sum",x+y);
}
add(complete)
*/

//! Callback using function and setTimeout

/*
console.log("Food is ordered in Swiggy");
function getFood(callback){
    setTimeout(()=>{
        const food = "🍔"
        callback(food)
    },5000)
}
function foodReady(food){
    console.log(`Food is ready ${food}`);
    
}
getFood(foodReady)
console.log("Doing Other Works until food is ready");

*/

//!callback hell

/*
setTimeout(()=>{
    console.log("5");
    setTimeout(()=>{
        console.log("4");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("2");
                setTimeout(()=>{
                    console.log("1");
                    setTimeout(()=>{
                        console.log("Welcome to Async Programming");
                        
                    },1000)
                    
                },1000)
                
            },1000)
            
        },1000)
        
    },1000)
    
},1000)
*/

//! Callback hell example

setTimeout(()=>{
    document.getElementById("display").innerText = "10"
    setTimeout(()=>{
        document.getElementById("display").innerText = "9"
        setTimeout(()=>{
            document.getElementById("display").innerText = "8"
            setTimeout(()=>{
                document.getElementById("display").innerText = "7"
                setTimeout(()=>{
                    document.getElementById("display").innerText = "6"
                    setTimeout(()=>{
                        document.getElementById("display").innerText = "5"
                        setTimeout(()=>{
                            document.getElementById("display").innerText = "4"
                            setTimeout(()=>{
                                document.getElementById("display").innerText = "3"
                                setTimeout(()=>{
                                    document.getElementById("display").innerText = "2"
                                    setTimeout(()=>{
                                        document.getElementById("display").innerText = "1"
                                        setTimeout(()=>{
                                            document.getElementById("display").innerText = "Happy Teacher's Day"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)