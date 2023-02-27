import React, { useEffect, useState } from 'react'
import './app.scss'

export function App() {

    const [forecast, setForecast] = useState('')

    const [error, setError] = useState('')

    useEffect(() => {
        fetch("/api/WeatherForecast")
            .then(r => r.json())
            .then(data => setForecast(JSON.stringify(data, null, 4)))
            .catch(err => setError(err.toString()))
    }, [])

    return <div>
        <div>
            <h1 className='hello'>Hello World!</h1>
        </div>
        {forecast && <div>
            <div>Forecast:</div>
            <pre>{forecast}</pre>
        </div>}
        {error && <div className=".error">
            <div>Error:</div>
            <pre>{error}</pre>
        </div>}
    </div>
}