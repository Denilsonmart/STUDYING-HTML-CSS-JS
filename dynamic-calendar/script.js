const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span")
  

//obtendo data, ano e mês atual
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

//armazenando os nomes de todos os meses em um array
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "junho",
  "Julho",
  "Agosto",
  "setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //obtendo o primeiro dia do mês
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //Obtendo última data do mês
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //Obtendo último dia do mês
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate() //obtendo última data do mês anterior

  let liTag = ""
  for (let i = firstDayofMonth; i > 0; i--) {
    //criando li dos últimos dias do mês anterior
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    //criando li dos dias do mês atual
    let isToday = //adicionado a classe active para o li do dia, mês e ano atual em que está sendo visto o calendário
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : ""

    liTag += `<li class="${isToday}">${i}</li>`
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    //criando li dos primeiros dias do próximo mês
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
  }
  
  currentDate.innerText = `${months[currMonth]} ${currYear}`
  daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {//obtendo prev e next icons
  icon.addEventListener("click", () => {//adicionado o evento de clique para ambos os ícones
    //se o ícone clicado é o de anterior, então o atual mês será decrementado em 1, senão ele será incrementado em 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11){//se o mês atual depois da operação der menor que 0 ou maior que 11
      //criando uma nova data  com ano e mês atual e passando como valor da variável date 
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear()//atualizando o ano atual com o ano da nova data
      currMonth = date.getMonth()//atualizando o mês atual com o mês da nova data
    } else {
      date = new Date();//passando a data atual como valor da variável date
    }
    renderCalendar();//chamando a função renderCalendar
  });
});


  
