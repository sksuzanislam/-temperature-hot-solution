const API_KEY = `f2a339bad1ce0c840af051af48f5afd9`;
const searchtemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperture(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperture = temperture => {
    setInnerText('city', temperture.name)
    setInnerText('country', temperture.sys.country)
    setInnerText('temp', temperture.main.temp)
    setInnerText('condition', temperture.weather[0].main)
    // set wether icon

    const url = `http://openweathermap.org/img/wn/${temperture.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url)
    console.log(temperture)
}