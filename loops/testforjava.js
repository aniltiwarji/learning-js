
//1 question numer 1 {1-10 number print using for loop}
    let count = 1               

     for(let count = 1; count <= 10;  count++ ){       
         console.log(count)
    }
    


 //2 print even number from 1 to 20
     for (let i = 1; i <= 20; i++)    
        if (i % 2 === 0) {
            console.log(i);
        }


 //3 Print the multiplication table of 5 up to 10

     for (let i = 1; i <= 10; i++) {                  
         console.log(`5 x ${i} = ${5 * i}`);
     }


 //4 Calculate the sum of numbers from 1 to 100.
     let sum = 0;
     for (let i = 1; i <= 100; i++) {                            
         sum += i;
     }
     console.log(`${sum}`);

 // 5 Reverse a string using a loop. (Input: 'hello' -> Output: 'olleh')
        let str = 'hello';                                 
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        console.log(`Reversed string: ${reversedStr}`);
        
  //6  Count the number of vowels in a given string. (Input: 'javascript')
        let inputStr = 'javascript';                                 
        let vowels = 'aeiou';
        let countVowels = 0;
        for (let i = 0; i < inputStr.length; i++) {
            if (vowels.includes(inputStr[i])) {
                countVowels++;
            }
        }
        console.log(`Number of vowels in '${inputStr}': ${countVowels}`);
        
   //7  Loop through a string and print each character. (Input: 'Sween')
      let inputString = 'Sween';
        for (let i = 0; i < inputString.length; i++) {                                 
            console.log(`Character at index ${i}: ${inputString[i]}`);
        }
       
   //8 Check if a number is prime using a loop. (Input: 7 -> Output: true)
        let num = 7;                                 
        let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        console.log(`Is ${num} prime? ${isPrime}`);
        
   //9  FizzBuzz: Print numbers 1 to 100. For multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'Fizz'
        for (let i = 1; i <= 100; i++) {                                 
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            } else if (i % 3 === 0) {
                console.log('Fizz');
            } else if (i % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }

                
      
    

   //10 Create a loop that prints the squares of numbers from 1 to 10.
        for (let i = 1; i <= 10; i++) {                                 
            console.log(`Square of ${i}: ${i * i}`);
        }