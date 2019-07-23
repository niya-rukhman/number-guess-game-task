function check(){
    let number = document.querySelector("input").value;
    let randomNumber = parseInt(Math.random()*100);
    

   if(number > randomNumber){
       alert("Too Big");
   }
   else if(number < randomNumber){
       alert("Too Small");
   }
   else{
       alert("You Win")
   }





   alert(randomNumber);
}