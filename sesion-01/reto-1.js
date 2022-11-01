var logger = {
    name: "Logger Helper",
    log: function(message) {
      console.log(this.name + ":", message);
    }
  };
  
logger.log("Hello World!"); // Logger Helper: Hello World!
var names  = ["Javier","Juan","Ana","Luisa"];

for (var i = 0; i < names.length; i++){
    var sco = {name : names[i]}
    logger.log.call(sco,"hello world")
}