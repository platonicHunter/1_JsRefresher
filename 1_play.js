var name="mully";
var age=8;
var hasHobby=true;

const summarizeCharacter= (userName,userAge,userHasHobby) => {
    return ("Name is "+userName+", Age is "+ userAge +", Hobby :"+ userHasHobby);
}


const add = (a,b) => a+b;
const addOne = a => a+1;
const addRnd =() => 1+2;

console.log(add(1,2));
console.log(addOne(1));
console.log(summarizeCharacter(name,age,hasHobby));

/**
 * Object Property Method
 */
const person={
    name: "Json",
    age: 22,

    //cannot use name (this cannot define in arrow function)
    // greet:()=>{
    //     console.log("Hi,I am ",this.name);
    // }  

    //can use
    // greet:function(){
    //     console.log("Hi,I am ",this.name);
    // }
    greet(){
        console.log("Hi,I am ",this.name);
    }
}

const printName=({name})=> console.log(name);  
printName(person);///mully

// const { name , age } = person;
// console.log(name,age); //mully 8

person.greet();

/**
 * ************Array**************
 */
const hobbies= ["sport","gaming"];
// for(hobby of hobbies){
//     console.log(hobby);
// }
console.log(hobbies.map(hobby =>  "hobby :"+hobby));

hobbies.push("gambling");
console.log(hobbies)

cpyarray=[...hobbies];//Spread 
cpyPerson={...person};

//Rest
const restArr=(...args)=> args;
console.log(46,4,5,4);