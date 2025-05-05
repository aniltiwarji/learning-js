// let names = ["anil", "vasu", "kano", "md", "akash"];
// let printNames = names.map( (name) => {
//     return " hello " + name 
// })
// console.log(printNames)


//  let profile = {
//     name: "anil",
//     age: 20,
//     marrige: false
//  }

//  console.log(profile.name)
//  console.log(profile.age)
//     console.log(profile.marrige)
    
   
let bikes = ["raider", "java", "hero", "splendor", "yamaha" ]

let bike = bikes.map((bike) => {
    return "my bike is " + bike
})
console.log(bike)

if (bikes[2] == "hero") {
    console.log("my bike is hero")
}   

for (let bike of bikes){
    console.log(bike, "bikes")
}


