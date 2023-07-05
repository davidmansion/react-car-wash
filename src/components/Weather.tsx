import { useEffect, useState } from "react";

export const Weather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.793&lon=18.960&appid=${process.env.WEATHER_API_KEY}`
    const [temperature, setTemperature] = useState<number | null>(null)

    const handleFetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (typeof data.main !== "undefined") {
            const celsius = parseInt(data.main.temp) / 10
            setTemperature(celsius)
        }

    }

    useEffect(() => {
        handleFetchData();
    }, [])

    return (
        <div className="absolute top-16 right-2 lg:right-8 z-40 font-bold text-xl md:text-2xl lg:text-4xl text-white">
            {temperature !== null && (
                <>{temperature} ℃</>
            )}
        </div>
    );
}