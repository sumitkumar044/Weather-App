
const search=document.querySelector("button");
search.addEventListener("click",()=>{

function updateTemp(data){
    document.getElementById("temperature").innerHTML=`${data.main.temp} °C`;
    
       document.getElementById("cityName").innerHTML = data.name;

        document.getElementById("description").innerHTML =
            data.weather[0].description;
}

       const place=document.getElementById("city").value;
       const API_KEY = "484feac0f62f4c6db1de9772cbded36b";
       const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`)
       promise.then((response)=>{
            return response.json();
       }).then((data)=>{
        updateTemp(data);
       })
})