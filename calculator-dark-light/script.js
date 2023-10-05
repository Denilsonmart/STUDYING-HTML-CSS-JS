document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggleBtn");
  const body = document.querySelector("body");
  let btn = document.querySelectorAll("span");
  let value = document.querySelector("#value");


  for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
          if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
          }
          else {
            if(this.innerHTML == "Clear"){
              value.innerHTML =  "";
            } else {
              value.innerHTML += this.innerHTML;
            }
          }
        });
      }
      //evento para a mudança de modo aplicado para quando o toggleBtn for clicado
      toggleBtn.onclick = function () {
        body.classList.toggle("dark");
      }    
});
  

