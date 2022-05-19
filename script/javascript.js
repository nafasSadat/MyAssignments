// let x =1;

// let c;
// console.log(typeof(x));

// // diff between let and var, let not allowed douplicate name, same with const not allowed to redeclare
// // null datatype: used assign null value not undefined.
// //

// let w = null;
// console.log(typeof(w));


// let n;
// console.log(typeof(n));

// console.log(w===n);
// === check both values and types, == check only values.
// let x= 5;
// let y="5";
// console.log(x==y);
// console.log(x===y);

// Functions: two type of function , same only syntax differents;

function hello(f, m){
    if(m>10 & f>10){
        return f+m;
    }
   var c= hello(f+1,m+1);

 return c+f+m;
};

r=hello(1,2);

console.log("The Result is:"+r);

// Anothe function def
// var summ=(a,b)=>a+b
// console.log(summ(2,4))

// Arrays

const person = {

    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
      //return this.firstName + " " + this.lastName;
    }

  };

let n= person.myFunction();
console.log(n);

const per={
    myfunc:function(){
        return this.firstName+" and "+this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
console.log(per.myfunc.call(person1))

const per2={
    myfunc2:function(city,country){
        return this.firstName+" and "+this.lastName+" "+city+" "+country;
    }
}
// apply function, different between call and function is that call take argument separately and apply as array
console.log(per2.myfunc2.call(person1,"Kabul","Afghanistan"))
console.log(per2.myfunc2.apply(person1,["Kabul","Afghanistan"]))
// bind borrow a function from another object
console.log(Math.random()+10)

// Class is a template for object. alwayes make constractor function.

class car{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    printdata (){
        return "Name: "+this.name+" Year: "+this.year;
    }


}

let c=new car("Corola","2001")
console.log(c.printdata())

