
//let x =1;
//const parentFunction = () => {
  //  let myvalue = 2;
    //console.log(x);
    //console.log(myvalue);

  //  const childfunction = () => {
    //    console.log(x+= 5);
      //  console.log(myvalue +=1);
    //}
    //return childfunction;
//} 
//const result =parentFunction();
//console.log(result);
//result();
//result();
//console.log(result);


//const privatecounter =(() =>{
 //   let count =0;
 //   console.log(count);
 //   return () => { count +=1 ; console.log(count)}


//})();
//privatecounter();
//privatecounter();





//const credits = ((num) =>{
  //  let credits = num;
  //  console.log(credits);
    //return() => {
    //    credits -= 1;
    //    if(credits >0) console.log(credits);
      //  if(credits <=0 ) console.log('not enought credits');
   
  //  }
 // })(3);
  //credits();
  //credits();
  //credits();

  
  
  //prototype inhertance and chain


//const person = {
//  alive: true
//}
//const musican = {
//  plays: false
//}
//musican.__proto__= person;
//console.log(musican.plays);
//console.log(musican.alive);
//console.log(musican);
//Object.setPrototypeOf(musican, person);
//console.log(Object.getPrototypeOf(musican));
//console.log(musican.__proto__);
//console.log(Object.getPrototypeOf(musican) ===musican.__proto__);
//const car ={
 // doors:2,
//  seats: "vinyl",
//  get seatMaterial(){
//    return this.seats;
//  },
 // set seatMaterial(material){
  //  this.seats = material;
 // }
//}
//const luxuryCar ={};
//Object.setPrototypeOf(luxuryCar , car);
//luxuryCar.seatMaterial = "leather";
//console.log(luxuryCar);
//console.log(luxuryCar.doors);
//console.log(car);
//console.log(luxuryCar.valueOf());
//console.log(Object.keys(luxuryCar));
//Object.keys(luxuryCar).forEach(key =>{
//  console.log(key);
//});
//for(let key in luxuryCar){
//  console.log(key);
//}
