import { useEffect, useState } from "react";

export const Weather = () => {
    const [temperature, setTemperature] = useState<number | null>(null)

    useEffect(() => {
        const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=47.793&lon=18.960&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        const fetchData = async () => {
          try {
            const response = await fetch(api_url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (typeof data.main !== 'undefined') {
              const celsius = parseFloat(data.main.temp) / 10;
              setTemperature(celsius);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      });

    return (
        <div className="absolute top-16 right-2 lg:right-8 z-40 font-bold text-xl md:text-2xl lg:text-4xl text-white">
            {temperature !== null && (
                <>{temperature} ℃</>
            )}
        </div>
    );
}