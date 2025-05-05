// scope in javascript

// let a = 2;
// //  var b = 4;
// const c =6

// if(true){
//     let a = 15;
//      var b=16
//     const c = 7
//     console.log(a)    //15             //because we have variable in block scope, it will automaticaly give you local vlaue
// }
//  console.log(c)     //6               //because const is block scope, so it will give you global value


//  if(true){  
//      console.log(a)    //2               //in block scope we have access of global vairable
//  } 


//  let sum = 0
// for(let i = 1; i<=10; i++){
//     let name1 = "anil"
//     sum += i
//     console.log(name1) 
// }

//    console.log(sum)
   

//    //-------------------nested function with scope--------------------------

//    let lastName = "tiwari"  
//     function one() {
//          let fristName = "ANIL" 

//     function two() {
//         let fullName = "sachin pareek"
//             console.log(fristName)
//             console.log(lastName)
//             console.log(fullName)
//         }
//         two()  
//     }
//      one()

//      // calling function inside a function-------------------------------

//      function byeBye () {
//         console.log("bye bye user")
//      }
//      byeBye()

//     function greet() {
//         console.log("hello how are you friend")
//     }
//     greet()

//     function user() {
//         console.log("hello welcome to my site")
//     }
//     user()

    // function scope with:----------------------------------
    
    function printing() {
        var age = 20
         console.log("inner" ,age)
    }
    printing()
   
  
let phone = 4444444444
for(let i = 1; i< 11; i++){

    let phone = 6666666666
    console.log(i)
}
console.log(phone)

for(let i = 40; i< 51; i++){
    let phone = 8888888888
    console.log(i)
}

console.log(phone) 
    
