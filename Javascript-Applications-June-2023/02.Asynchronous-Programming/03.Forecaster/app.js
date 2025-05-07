window.addEventListener('load', attachEvents());

function attachEvents() {

    const getWeatherButton = document.querySelector('#submit');
    const inputFieldElement = document.querySelector('#location');
    const divForecastElement = document.querySelector('#forecast');
    const divCurrentElement = document.querySelector('#current');
    const divUpcomingElement = document.querySelector('#upcoming');
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    // console.log(divForecastElement);
    const weatherSymbolsObj = {
        'Sunny': '&#x2600;',        //☀
        'Partly sunny': '&#x26C5',  //⛅
        'Overcast': '&#x2601',      //☁
        'Rain': '&#x2614',          //☂
        'Degrees': '&#176',         //°
    };
    const createElement = (tag, content, attributesArr = []) => {
        const element = document.createElement(tag);
        if (content) {
            element.innerHTML = content;
        }
        if (attributesArr.length !== 0) {
            for (let i = 0; i < attributesArr.length; i += 2) {
                element.setAttribute(attributesArr[0], attributesArr[1]);
            }
        }
        return element;
    };

    const getWeatherButtonEventHandler = async () => {
        // console.log(divForecastElement);
        try {
            divForecastElement.style.display = 'block';
            const divForecastEl =  document.querySelector('.forecasts');
            if (divForecastEl !== null) {
                divForecastEl.remove();
            }
            const divUpcomingEls = document.querySelector('.forecast-info');
            if (divUpcomingEls !== null) {
                divUpcomingEls.remove();
            }
    
            const resolve = await fetch(baseUrl);
            const data = await resolve.json();
            const inputValue = inputFieldElement.value;
            const locationObjIdx = data.findIndex((lockObj) => lockObj['name'] === inputValue);
            let { code } = data[locationObjIdx];
            const currentUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            const currentResolve = await fetch(currentUrl);
            const currentData = await currentResolve.json();
            const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            const upcomingResolve = await fetch(upcomingUrl);
            const upcomingData = await upcomingResolve.json();

            // console.log(currentData);
            let { name } = currentData;
            let { condition, high, low } = currentData.forecast;
            // console.log(name);
            // console.log(condition);
            // console.log(high);
            // console.log(low);
            const divEl = createElement('div', '', ['class', 'forecasts']);
            const spanSymbolEl = createElement('span', weatherSymbolsObj[condition], ['class', 'condition symbol']);
            divEl.appendChild(spanSymbolEl);
            const spanCurrentEl = createElement('span', '', ['class', 'condition']);
            const spanNameEl = createElement('span', name, ['class', 'forecast-data']);
            spanCurrentEl.appendChild(spanNameEl);
            const spanDegreesEl = createElement('span', `${low}${weatherSymbolsObj.Degrees}/${high}${weatherSymbolsObj.Degrees}`, ['class', 'forecast-data']);
            spanCurrentEl.appendChild(spanDegreesEl);
            const spanConditionEl = createElement('span', condition, ['class', 'forecast-data']);
            spanCurrentEl.appendChild(spanConditionEl);
            divEl.appendChild(spanCurrentEl);
            divCurrentElement.appendChild(divEl);
            divForecastElement.style.display = 'block';

            const upcomingDataArray = Object.entries(upcomingData.forecast);
            // console.log(upcomingDataArray);
            const divUpcomingEl = createElement('div', '', ['class', 'forecast-info']);
            upcomingDataArray.forEach(currDayObj => {
                let { condition, high, low } = currDayObj[1];
                // console.log(condition);
                // console.log(high);
                // console.log(low);
                const spanUpcomingEl = createElement('span', '', ['class', 'upcoming']);
                const spanSymbolEl = createElement('span', weatherSymbolsObj[condition], ['class', 'symbol']);
                spanUpcomingEl.appendChild(spanSymbolEl);
                const spanDegreesEl = createElement('span', `${low}${weatherSymbolsObj.Degrees}/${high}${weatherSymbolsObj.Degrees}`, ['class', 'forecast-data']);
                spanUpcomingEl.appendChild(spanDegreesEl);
                const spanConditionEl = createElement('span', condition, ['class', 'forecast-data']);
                spanUpcomingEl.appendChild(spanConditionEl);
                divUpcomingEl.appendChild(spanUpcomingEl);
            });
            divUpcomingElement.appendChild(divUpcomingEl);
        } catch (error) {
            // console.log(error);
            divForecastElement.style.display = 'block';
            divForecastElement.innerHTML = 'Error';
        }
    };
    getWeatherButton.addEventListener('click', getWeatherButtonEventHandler);
}

// attachEvents();