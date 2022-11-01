var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.logName = function() {
      console.log("Name: " + this.firstName + " " + this.lastName);
    }
  }
  
  var john = new Person("John", "Doe");
//   {
//     firstName : "John",
//     lastName : "Doe"
//   }
  john.logName(); // Name: John Doe
  
  var jane = new Person("Jane", "Doe");
  jane.logName(); // Name: Jane Doe
//   {
//     firstName : "Jane",
//     lastName : "Doe"
//   }

var hola = {
    firstName : "Javier",
    lastName : "Bedu"
}

function foo (){
    console.log(this.x);
}

john.logName.apply(hola)

john.logName();

var showName = john.logName.bind(hola)

showName();
showName();
showName();

var sc = {
    x : 8
}

foo.call(sc);
var ex = foo.bind(sc);

sc.x=120;

ex();
ex();
ex();
ex();