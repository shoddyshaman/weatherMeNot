require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { SERVER_PORT} = process.env
const { getWeatherForMajorCities, searchWeather} = require('./controllers/weatherController')

const app = express()

app.use(express.json())
app.use(cors())

//weather endpoints
//get weather from major cities across the world
app.get('/api/weather/cities',getWeatherForMajorCities)
app.get('/api/weather/search',searchWeather)

app.listen(SERVER_PORT,() => console.log(`server jammin on ${SERVER_PORT}`))