// function in javascript

// A.  function declaration
// B.  function expression
// C.  arrow function


// A.  function declaration
 function greet () {
    return "HELLO, How are you guys"
 }
 console.log(greet())


 // B. function expression 
    let greet2 = function() {
        return "HELLO, How are you All Friends"
    }
    console.log(greet2 ())

// C. arrow function
    let greet3 = ()  => { 
        return "HELLO, How are you Friends"
    }
    console.log(greet3 ())


    
// parameters in js / ...  when you are declaring a function, and giving some values.

 function add(a, b) {
    return a+ b
 }
 console.log(add(2, 5))

 // -----------------------------default parameter in js------------------------------

  function multiply(a = 2, b = 6) {
    return a * b
  }

  console.log(multiply(2, 4))
  console.log(multiply()) // 2 * 6 = 12

   function welcome(name, age, work) {
    return `Hello ${name}, your age is ${age} and you are a ${work}`
   }
    console.log(welcome("rakesh", 22, "Web-developer")) 

    
    function bike(name, color, condition, price) {
        return `I have givan to ${name} bike, ${color} color, ${condition} condition and the price is ${price}
        `
    }
    console.log(bike("hero", "red and black", "good", 40000))

    console.log(bike("honda", "black", "good", 50000))

    

 