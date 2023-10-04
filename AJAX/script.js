document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '1fb7a9d130c5438c87a2c9adca8e7974';

    // Lakukan permintaan Ajax ke OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ID&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `Cuaca di ${data.name}: ${data.weather[0].description}, Suhu: ${data.main.temp}°C`;
            document.getElementById('weatherData').textContent = weatherData;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
