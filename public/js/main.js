const showCityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const day = document.getElementById('day');
const date = document.getElementById('today_date');


const getInfo = async(event) => {
    event.preventDefault();

    const getCurrentDay = () => {
        var weekday = new Array(7)
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thurs";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        let currentTime = new Date()
        let day = weekday[currentTime.getDay()]
        return day;
    }

    const getCurrentTime = () => {
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        var now = new Date()
        var month = months[now.getMonth()]
        var date = now.getDate();
        return `${month} ${date}`;
    };

    let city_get_Name = city_name.value;

    if (city_get_Name === "") {
        showCityName.innerText = 'Please Write Name before Search';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_get_Name}&appid=f115a2019ee67f91ef48ede394346df9`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            const temperature = Math.round(arrData[0].main.temp / 10);
            temp.innerText = `${temperature} C`;
            showCityName.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            status.innerText = arrData[0].weather[0].main;
            day.innerText = getCurrentDay();
            date.innerText = getCurrentTime();
        }catch{
            showCityName.innerText = 'Please Write Name before Search';
        }
    }
}

submitBtn.addEventListener('click', getInfo)