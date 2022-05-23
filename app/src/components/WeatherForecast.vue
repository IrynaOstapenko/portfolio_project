<template>
    <div class="weather-container">
        <div class="error-message" v-if="error">{{ error }}</div>
        <div v-if="!error" class="weather-container__image">
            <img v-if="this.averagePrecipitation === 0" src="/images/sun.png" alt="sun" />
            <img v-else-if="this.averagePrecipitation > 0 && this.averagePrecipitation < 0.03" src="/images/sun-behind-large-cloud.png" alt="sun-behind-cloud" />
            <img v-else-if="this.averagePrecipitation >= 0.03 && this.averagePrecipitation <= 1.05" src="/images/sun-behind-rain-cloud.png" alt="sun-behind-rain-cloud" />
            <img v-else-if="this.averagePrecipitation >= 1.05 && this.averageTemperature < 0" src="/images/cloud-with-snow.png" alt="snow-cloud" />
            <img v-else src="/images/rain.png" alt="rain-cloud" />
        </div>
        <div v-if="!error" class="weather-container__temperature">{{ averageTemperature }}<span>&#176;</span></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                weatherData: {},
                averageTemperature: null,
                averagePrecipitation: null,
                error: ''
            }
        },

        async created() {
            this.fetchWeather();
        },

        methods: {
            //Fetching weather data from an open api
            async fetchWeather() {
                const url = 'https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m,precipitation&timezone=Europe%2FBerlin';
                const response = await fetch(url);
                try {
                    await this.handleResponse(response);
                } catch (error) {
                    console.log(error);
                    this.error = error.message;
                }
		    },

		    async handleResponse(response) {
                if (response.status >= 200 && response.status < 300) {
                    const  weather = await response.json();
                    this.weatherData = weather;

                    //Calculating average temperature
                    const temperatureArray = this.weatherData.hourly.temperature_2m;
                    this.averageTemperature = Math.round(temperatureArray.reduce((a, b) => a + b, 0) / temperatureArray.length);
                    console.log(this.averageTemperature);

                    //Calculating average precipitation
                    const precipitationArray = this.weatherData.hourly.precipitation;
                    const averagePrecipitationUnrounded = precipitationArray.reduce((a, b) => a + b, 0) / precipitationArray.length;
                    this.averagePrecipitation = (Math.round(averagePrecipitationUnrounded * 100)/100).toFixed(2);
                    console.log(this.averagePrecipitation);
                    return true;
                
                } else {
                    if (response.status === 404) {
                        throw new Error('Url not found');
                    }
                    if (response.status === 401) {
                        throw new Error('Unauthorized');
                    }
                    if (response.status > 500) {
                        throw new Error('Server error');
                    }
                        throw new Error('No weather data');
                }		
		    }
        }        
    }

</script>

<style>
    .weather-container {
        display: none;
    }    

    @media only screen and (min-width: 768px) {
        .weather-container {
            position: absolute;
            top: 0;
            right: 0;
            width: 10%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            margin: 1em;
        }

        .error-message {
            font-size: 0.5em;
        }

        .weather-container__image {
            height: 50px;
            width: 50px;
        }
    }

</style>
