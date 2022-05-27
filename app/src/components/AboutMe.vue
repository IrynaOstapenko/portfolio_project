<template>
    <Navigation />
    <WeatherForecast />
    <div class="about-container">
        <section>{{ generalInfo }}</section>
        <h3>My skills</h3>
        <div v-for="skill in skills" class="skills-container">
            <div class="skills-container__skill">
                <img :src="skill.asset.url" alt="skill-image" class="skill-image">
                <div class="skill-title">{{ skill.caption }}</div>
            </div>
        </div>
    </div>    
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
                generalInfo: '',
                skills: []
            }
        },
        //Fetching data from database
        async created() {
            await this.sanityFetch(query, {
                type: 'about'
            });

            this.generalInfo = this.result[0].aboutMe;
            this.skills = this.result[0].skills;
        }
    }
</script>

<style>
    .about-container {
        width: 60%;
        margin: 80px auto auto auto;
        font-size: var(--mobile-body-style);
    }

    .skills-container {
        display: inline-block;
        margin-right: 15px;
        margin-top: 15px;
    }

    .skills-container__skill {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        width: auto;
        border: 1px solid black;
        border-radius: 20px;
        padding: 7px;
    }

    .skill-image {
        width: 20px;
        height: 20px;
    }

    @media only screen and (min-width: 768px) {
        .about-container {
            position: absolute;
            top: 20%;
            left: 30%;
            margin: 0;
            font-size: var(--body-style);
        }

        .skills-container {
            margin-right: 20px;
            margin-top: 20px;
        }

        .skill-image {
            width: 30px;
            height: 30px;
        }
    }

</style>
