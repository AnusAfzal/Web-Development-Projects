let btn = document.querySelector("button");
let currWeatherDiv = null;

btn.addEventListener('click', () => {
    let input = document.querySelector("input");
    let city = input.value.trim();
    if (!city) {
        return;
    }
    getWeather(city);
    input.value = "";
});

async function getWeather(city) {
    const apiKey = "f91d6ed737004916bb652203260206";
    try {
        let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        let data = await res.json();
        console.log(data);
        showWeather(data.location.name, data.current.temp_c, data.current.condition.text, data.current.condition.icon);
    } catch (e) {
        console.log("Error - ", e);
    }
}

function showWeather(name, temp_c, condition, icon_url) {
    if (currWeatherDiv) {
        currWeatherDiv.remove();
    }

    let div = document.createElement("div");
    div.style.marginTop = "50px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    div.style.backgroundColor = "#87ceeb55";
    div.style.height = "175px";
    div.style.width = "250px";
    div.style.borderRadius = "30px";

    let p1 = document.createElement("p");
    p1.innerText = name;
    p1.style.color = "#f5f5f5";
    p1.style.fontSize = "50px";
    p1.style.margin = "2.5px";
    div.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerText = `Temperature: ${temp_c}° C`;
    p2.style.color = "white";
    p2.style.fontSize = "20px";
    p2.style.margin = "2.5px";
    div.appendChild(p2);

    let p3 = document.createElement("p");
    p3.style.display = "flex";
    p3.style.flexDirection = "row";
    p3.style.alignItems = "center";
    p3.style.gap = "3px";
    p3.style.margin = "2.5px";
    p3.innerText = condition;
    p3.style.color = "white";
    p3.style.fontSize = "20px";
    div.appendChild(p3);

    let img = document.createElement("img");
    img.src = icon_url;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.objectFit = "contain";
    p3.appendChild(img);

    let body = document.querySelector("body");
    body.appendChild(div);

    currWeatherDiv = div;
}
