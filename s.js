// const user = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username: "jshindi", password: "123"})
//         }else{
//             reject('ERROR: js went wrong')
//         }
        
//     }, 1000)
// });

// async function consumeuser() {
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
        
//     }catch(error){
//         console.log("E.", error);
//     }
    
// }
    
// consumeuser()

// const getpromise=()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("i am going to home")
//     });
// };


// let Promise= getpromise();
// Promise.then((resolve)=>{
//     console.log("sam beef")
// });

// function getdata(dataId, getTextData){
//     setTimeout(()=>{
//         console.log("data", "dataId");
//         if(getTextData){
//             getTextData();
//         }
//     }, 3000)
// }

// getdata(1,()=>{
//     console.log("morag");
//     getdata(2,()=>{
//         console.log("sindhu");
        
//     });
// });

var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    console.log("hitesh");
    
})

document.addEventListener("mousemove", function(dets){
    blur.style.left=dets.x - 90+"px"
    blur.style.top=dets.y- 100+"px"
})