/*More JavaScript 🎉*/
/*Create a function that takes 3 arguments and returns the sum of the these arguments.*/
function sum(num1, num2, num3){
    return num1+num2+num3;
  }
  console.log(sum(20,35,55));
  
  /*Create a function named colorCar that receives a color, and prints out, 'a red car' for example.*/
  function colorCar(color){
    return 'a '+color+' car';
  }
  console.log(colorCar('red'));
  
  /*Create an object and a function that takes the object as a parameter and prints out all of its properties and values.*/
  let object = {Type1:'ornaments', Type2:['Antiques'], Type3:"Currency"};
  function printObj(obj){
    return obj;
  }
  console.log(object)
  
  /*Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)*/
  function vehicleType(color, code){
    if(code === 1){
      code = 'car';
    }
    if(code === 2){
      code = 'motorbike';
    }
    return 'a '+ color + ' motorbike'
  }
  console.log(vehicleType("blue", 2))
  
  /*Can you write the following without the if statement, but with just as a single line with console.log(...);?
  if (3 === 3) {
    console.log("yes");
  } else {
    console.log("no");
  }*/
  3===3 ? console.log('yes'): console.log('no')
  
  /*Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'*/
  
  function vehicle(color, code, age){
    if(code === 1){
      code = 'car';
    }
    if(code === 2){
      code = 'motorbike';
    }
    if(age!=0){
      age = 'used';
    }
    return 'a ' + color + ' '+ age + ' ' + code
  }
  vehicle("blue", 1, 5)
  
  /*Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/
   let vehicleList = ["motorbike", "caravan", "bike", "car"]
   /*How do you get the third element from that list?*/
   console.log(vehicleList[2])
  /*Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".*/
  
  vehicle = function(color, code, age){
    if(code===1){
      code = vehicleList[3];
    }
    if(code===2){
      code = vehicleList[0];
    }
    if(code===3){
      code = vehicleList[2];
    }
    if(age!=0){
      age = 'used';
    }
    return 'a ' + color + ' ' + age + ' ' + code;
  }
  console.log(vehicle("green", 3, 1))
  
  /* Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.) */
  
  function ad(){
    let ad = "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
    for(let i= 0; i<vehicleList.length - 2; i++){
      ad += vehicleList[i] + 's, ';
    }
    ad +=vehicleList[vehicleList.length - 2] + 's and ' + vehicleList[vehicleList.length -1] + 's.';
    return ad;
  }
  console.log(ad())
  
  /*What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?*/
  vehicleList.push('speedboat');
  console.log(ad())
  
  /*Create an empty object.*/
  let emptyObject={};
  
  /*Create an object that contains the teachers that you have had so far for the different modules.*/
  let teachers = { mentor1: 'Claudiu',
                  mentor2: 'Seif',
                  mentor3: 'Sahin'}
  console.log(teachers)
  
  /*Add a property to the object you just created that contains the languages that they have taught you.*/
  let languagesTaught = 'HTML, CSS, Javascript'
  
  /*Write some code to test two arrays for equality using == and ===. Test the following:
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;*/
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
  console.log("For x==y i think it should return true as both are identical strings which are being compared, for x===y it should return false as both are identical but occupies different places in RAM , for z==y and z==x it should return true as they are compairing two identical strings")
  console.log(x == y)
  console.log(x === y)
  console.log(z == y)
  console.log(z == x)
  /*Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).Does the order that you assign (o3 = o2 or o2 = o3) matter?*/
  let o1 = { foo: "bar" };
  let o2 = { foo: "bar" };
  let o3 = o2;
  
  o2['lorem'] = 'ipsum';
  console.log(o2);
  console.log(o3);
  console.log("o3 has changed, as it only contains the reference to the same object in heap memory as object o2")
  
  o2 = {lorem: 'ipsum'};
  console.log(o2);
  console.log(o3);
  console.log("o3 has not changed as it still contains the address to the old o2 object, while the address of the new object has changed");
  
  console.log("There won't be any change in o3 by changing o1 as there is no relationship between them")
  
  
  console.log("Changing o2=o3 or vice-versa does not make any sense since o2 is already declared and even if the keyword let was removed so that the statement becomes only an assignment, as o3 is not declared, JS will throw an error")
  
  /*What does the following code return? (And why?)
  let bar = 42;
  typeof typeof bar;*/
  
  function typCoer(){
    let bar = 42;
    return typeof typeof bar;
  }
  console.log("The function should return string as 'typeof bar returns number' which is a string");
  console.log(typCoer());