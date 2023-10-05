//evento usado para resolver o problema em que o querrySelector não estava funcionando, esse evento faz que o código seja rodado somente após ser carregado todos os elementos do DOM
document.addEventListener("DOMContentLoaded", function () {
  //obtendo todos os elementos necessários para o código
  const toggleBtn = document.querySelector(".toggleBtn");
  const body = document.querySelector("body");
  let btn = document.querySelectorAll("span");
  let value = document.querySelector("#value");


  btn.forEach(function(tecla){
    tecla.addEventListener("click", function () {
      if (tecla.innerHTML == "=") {
        value.innerHTML = eval(value.innerHTML)
      } else {
        if (tecla.innerHTML == "Clear") {
          value.innerHTML = ""
        } else {
          value.innerHTML += tecla.innerHTML
        }
      }
    })
  }) 
      //evento para a mudança de modo aplicado para quando o toggleBtn for clicado
      toggleBtn.onclick = function () {
        body.classList.toggle("dark");
      }    
});
  

