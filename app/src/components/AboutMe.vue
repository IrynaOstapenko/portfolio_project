<template>
    <Navigation />
    <WeatherForecast />
    <div>{{ generalInfo }}</div>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import WeatherForecast from '../components/WeatherForecast.vue';

    import query from '../groq/home.groq?raw';
    import viewMixin from '../mixins/viewMixin.js';

    export default {
        mixins: [viewMixin],
        components: {
            Navigation,
            WeatherForecast
        },

        data() {
            return {
                generalInfo: ''
            }
        },

        async created() {
            await this.sanityFetch(query, {
                type: 'about'
            });

            this.generalInfo = this.result[0].aboutMe;
        }
    }
</script>
