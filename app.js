// setTimeout(function(){

//   console.log(
//     "2 seoconds passed"
//   )

  
// },2000)

var time=0;
var timer= setInterval(function(){
  time +=2;
console.log(time+"  secons passed")
if (time>5) {
  console.log("Time Out");
  clearInterval(timer);
  
}
},2000)


console.log(__dirname);
console.log(__filename);