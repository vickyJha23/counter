// console.log("har har mahadev");
const btns = document.querySelectorAll("button");
const value = document.querySelector(".value")
let count = 0;
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let classList = e.currentTarget.classList;    
        if(classList.contains("decrease")){
               count--;
         }
         else if(classList.contains("increase")){
              count++;
         }
         else{
              if(classList.contains("reset")){
                  count = 0;
              }
         }
         if(count > 0){
             value.style.color = "green";
         }
         if(count < 0){
              value.style.color = "red";
         }
         if(count == 0){
              value.style.color = "black";
         }
         value.textContent = count;        
        
     });
});
