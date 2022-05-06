//alert("app.js called")




const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "627c57232dbfcef21a812fd90aaa2b3f";

 
form.addEventListener("submit", e => {
  e.preventDefault()
  //console.log("test");
  const listItems = list.querySelectorAll(".ajax-section .city");
  const inputVal = input.value;
  //console.log(inputVal)
  
  //ajax
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;


  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather, timezone } = data;
// const icon = `https://openweathermap.org/img/wn/${
//   weather[0]["icon"]
// }@2x.png`;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
    }.svg`;
    console.log(timezone/3600);
    const tzEnHoras = timezone/3600
    console.log("gmt local: ",tzEnHoras);
    const d = new Date((new Date()));
    
    d.toISOString()
    const hora = d.getHours();
    const horaDelaConsulta = d.getTimezoneOffset()/60
    console.log("Hora de consulta: ", horaDelaConsulta);
    console.log("hora local: ", hora);
    const horaLocal = (hora + (tzEnHoras) + horaDelaConsulta)
   const hl = horaLocal >= 24 ? horaLocal - 24 : horaLocal;
    console.log("hora local seteada: ",horaLocal);
    console.log("hora local seteada: ",hl);
    console.log(d);
    
    
const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <p>${main.humidity}% Humedad</p>
  <p>${hl} hs</p>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
li.innerHTML = markup;
list.appendChild(li);
  })
  .catch(() => {
    msg.textContent = "Por favor, busca una ciudad valida 😩";
  });
  msg.textContent = "";
  form.reset();
  input.focus();
});


