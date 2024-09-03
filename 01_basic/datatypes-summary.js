//  Primative Datatype

// 7 types : String ,Number , Boolearn , null , Undefined , Symbol , BigInt   

 const score  = 100
 const scoreValue = 100.1
 

 const isLoggedIn = false 
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId  = Symbol('123')

 console.log(id === anotherId);

//  const bigNumber = 23458432224858884n


 

// reference (Non primitive)

//  Array , Objects , Functions 


const heros = ["shaktiman" ,"naagraj" , "doga"]

let obj ={
    name:"Somaditya",
    age:24,
}


const myFunction = function (){
        console.log("Hello World");
        
}

console.log(typeof Symbol);

// / https://262.ecma-international.org/5.1/#sec-11.4.3
