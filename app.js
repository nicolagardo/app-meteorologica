//alert("app.js called")




const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault()
  //console.log("test");
  const apiKey = "627c57232dbfcef21a812fd90aaa2b3f";

  const inputVal = input.value;
  //console.log(inputVal)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
});

