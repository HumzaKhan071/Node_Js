var counters=function(arr){
    return "There are " + arr.length + "elements in this array";
}

var adder=function(a,b){
    return `The sum of two numbers is ${a+b}`;
}


var pi =3.14159;



// module.exports.counters=counters;
// module.exports.adder=adder;
// module.exports.pi=pi;


// 2nd method


module.exports.counters=function(arr){
    return "There are " + arr.length + "elements in this array";
}

module.exports.adder=function(a,b){
    return `The sum of two numbers is ${a+b}`;
}

module.exports.pi =3.14159;

counters=counters;
adder=adder;
pi=pi;

// 3rd  way of decelration

var counters=function(arr){
    return "There are " + arr.length + "elements in this array";
}

var adder=function(a,b){
    return `The sum of two numbers is ${a+b}`;
}


var pi =3.14159;


module.exports={

    counters:counters,
    adder:adder,
    pi:pi,

};