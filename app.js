const tbodyElement = document.querySelector('tbody')

async function getData(){
    const response = await fetch('https://pro.openweathermap.org/data/2.5/forecast/climate?q=Tashkent,uz&units=metric&appid=b1b15e88fa797225412429c1c50c122a1')
    let result = await response.json();

    result.list.forEach(element => {
        const icon = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
        const trElement = document.createElement('tr');
        const dateElement = document.createElement('td')
        const tdDayElement = document.createElement('td');
        const tdNightElement = document.createElement('td');
        const tdWindElement = document.createElement('td')
        const tddescriptionElement = document.createElement('td');
        const iconElement = document.createElement('img');
        iconElement.setAttribute('src', icon);

        dateElement.textContent = new Date().getTime()
        tdDayElement.textContent = element.temp.day + ' C';
        tdNightElement.textContent = element.temp.night + ' C';
        tdWindElement.textContent = element.speed + ' km/s';
        tddescriptionElement.textContent = element.weather[0].description;
        iconElement.innerHTML = icon;


        trElement.appendChild(dateElement)
        trElement.appendChild(tdDayElement);
        trElement.appendChild(tdNightElement);
        trElement.appendChild(tdWindElement);
        trElement.appendChild(tddescriptionElement);
        trElement.appendChild(iconElement)

        tbodyElement.appendChild(trElement)

        console.log(element)
    });
}

getData()