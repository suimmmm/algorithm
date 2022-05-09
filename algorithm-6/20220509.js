let a = 0;

let timeSet = setInterval(function(){
  console.log(a);
  a++;
  if(a > 10){
    clearInterval(timeSet);
  }
},1000)