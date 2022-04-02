var events = require("events");
var util = require("util");

var Person=function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter);
var humza=new Person("Humza");
var arfeen=new Person("Arfeen");
var muneeb=new Person("Muneeb");

var people=[humza,arfeen,muneeb];


people.forEach(function(person){
    person.on("speak",function(msg){
        console.log(person.name + " said: " + msg);
    });
});

humza.emit("speak","hy Dude");
arfeen.emit("speak","Hi Humza");
muneeb.emit("speak","Hello");

// var myEmitter= new events.EventEmitter();

// myEmitter.on("someEvent",function(msg){
//     console.log(msg);
// });


// myEmitter.emit("someEvent","the event was emitted");