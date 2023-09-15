const body = document.querySelector("body"), 
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

//verificando, a partir do valor de mode armazenado no navegador, se o site estava no Dark Mode no último acesso.
if(localStorage.getItem("mode") === "Dark Mode") {
    //se sim, então adicionará a classe dark ao Body para entrar no Dark Mode.
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

//evento para mudar de modo quando o modeSwitch for clicado 
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode"); 
});

