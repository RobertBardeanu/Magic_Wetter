
const API_key="Man sollte kein API key auf github posten:)";
        async function getWeather() {
        const city=document.getElementById("city").value;
            try{
                    const res= await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric
    `)
                    const data= await res.json();
                    if(data.cod!=200){
                        alert("City not found")
                        return
                    }
                    document.getElementById("weather-card").style.display="block"
                    document.getElementById("cityname").innerHTML=data.name;
                    document.getElementById("country").innerHTML = data.sys.country;

                    document.getElementById("temperatur").innerHTML=data.main.temp+"°C";
                    document.getElementById("desc").innerHTML=data.weather[0].description;
                      const icon = data.weather[0].icon;
        document.getElementById("weather-icon").src =`https://openweathermap.org/img/wn/${icon}@2x.png`;
                
                }       
            catch(err){
                console.log(err);
            
            }

        }
        document.getElementById("city").addEventListener("keypress",function (event){
            if(event.key==="Enter"){
                getWeather();
            }
        });