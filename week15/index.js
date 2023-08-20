const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Лондон'];

const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = Number(prompt(`Введите температуру в городе ${cities[i]}`));
    temperatures.push(temperature);
}

const list = document.createElement('ul');
for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    list.appendChild(listItem);
}
document.body.appendChild(list);

let maxTemperature = -Infinity;
let minTemperature = Infinity;
for (let temperature of temperatures) {
    if (temperature > maxTemperature) {
        maxTemperature = temperature;
    }
    if (temperature < minTemperature) {
        minTemperature = temperature;
    }
}

const weatherInfo = document.createElement('p');
weatherInfo.textContent = `Температура в городах: ${temperatures.join('°C, ')}°C.`;
document.body.appendChild(weatherInfo);

const maxMinInfo = document.createElement('p');
maxMinInfo.textContent = `Максимальная температура: ${maxTemperature}°C, Минимальная температура: ${minTemperature}°C.`;
document.body.appendChild(maxMinInfo);