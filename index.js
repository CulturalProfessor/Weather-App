const API = "52f1706b834fb3536ea92951ec7ee5f0";
const cloud=document.getElementById('cloud');
const temp=document.getElementById('temp');
const wind=document.getElementById('wind');
const icon=document.getElementById('icon');
const name=document.getElementById('name');

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  name.innerHTML=city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      temp.innerHTML=result["main"]["temp"]+" C";
      cloud.innerHTML=result["weather"][0]["description"];
      wind.innerHTML=result["wind"]["speed"]+" m/sec";
      let icon_id=result["weather"][0]["icon"];
      // http://openweathermap.org/img/w/10d.png
      const icon_url=`http://openweathermap.org/img/w/${icon_id}.png`;
      icon.src=icon_url;
    })
    .catch((err) => {
      console.log(err);
    });
});
