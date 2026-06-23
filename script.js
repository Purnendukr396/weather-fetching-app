
const inpput = document.querySelector("#text");
const apiKey = "cf4759d0b4d2203e0bc34445a9031166";

const icon = document.querySelector(".fa-solid.fa-magnifying-glass");
const citty = document.querySelector("#city");
const tempe = document.querySelector("#temp");
const humii =document.querySelector("#para")
const wind = document.querySelector("#speed")

icon.addEventListener("click", () => {
    const text = inpput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;

    const getfacts = async () => {
        try {
            let response = await fetch(url);
            let data = await response.json();

            citty.innerText = data.name;
            tempe.innerHTML = `${Math.round(data.main.temp)}°C`;
            humii.innerText = `${Math.round(data.main.humidity)}%`;
            wind.innerText = `${Math.round(data.wind.speed)} Km/h`;


            // console.log(data);
        }
        catch(error) {
            console.log("error:", error);
        }
    };

    getfacts();
});