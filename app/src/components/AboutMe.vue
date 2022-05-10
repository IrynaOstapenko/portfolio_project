<template>
    <Navigation />
    <WeatherForecast />
    <div>About me</div>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import WeatherForecast from '../components/WeatherForecast.vue';

    export default {
        components: {
            Navigation,
            WeatherForecast
        }
    }
</script>
