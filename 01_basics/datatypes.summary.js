// Primitive 

// 7 types : string, number, Boolean, null, undefined, symbol,BigInt
  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false

  const outsideTemp = null
  let userEmail;

  const id = Symbol('123')
  const anotherId = Symbol('123')

  console.log(id=== anotherId);
  
//   const bigNumber = 3456543576654356754n

// Non primitive(Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]
let myObj = {
         name: "hitesh",
         age: 22,
       }

 const myFunction = function(){
    console.log("Hello world");
    
 }    
 
 console.log(typeof scoreValue);
 console.log(typeof anotherId);
 

 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (primitive), Heap(Non-primitive)

 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 
 console.log(anothername);
 
 let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
 }

 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 

 