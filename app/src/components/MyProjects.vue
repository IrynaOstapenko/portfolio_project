<template>
    <Navigation />
    <WeatherForecast />
    <div class="projects-container">
        <div v-for="project in projects" class="projects-container__item">
            <div>{{ project.title }}</div>
            <img :src="project.image.asset.url" alt="project-image" class="projects-container__image">
            <span class="project-image__popup">{{ project.description }}</span>
            <div class="projects-container__links">
                <a :href="project.gitHubLink" aria-label="link-to-github"><img src="/images/github-icon.png" alt="github-icon"></a>
                <a :href="project.netlifyLink" aria-label="link-to-netlify"><img src="/images/netlify-icon.png" alt="netlify-icon"></a>
            </div>            
        </div>
    </div>
    
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import WeatherForecast from '../components/WeatherForecast.vue'

    export default {
        components: {
            Navigation,
            WeatherForecast
        },
        data() {
            return {
                 projects: []
            }           
        },

        async created() {
            const sanity_query_url = 'https://hepvg5nh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%24type%5D%20%7B%0A%20%20_id%2C%0A%20%20title%2C%0A%20%20slug%2C%0A%20%20description%2C%0A%20%20gitHubLink%2C%0A%20%20netlifyLink%2C%0A%20%20image%20%7B%0A%20%20%20asset-%3E%20%7B%0A%20%20%20%20url%0A%20%20%20%7D%0A%20%20%7D%0A%7D&%24type=%22project%22'

		    const sanity_response = await fetch(sanity_query_url);
		    const { result } = await sanity_response.json();

		    this.projects = result;
            console.log(this.projects);
        }
    }

    
</script>

<style>
    .projects-container {
        width: 60%;
        height: auto;
        position: absolute;
        top: 10%;
        left: 30%;
    }

    .projects-container__item {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        gap: 15px;
        margin-bottom: 80px;
    }

    .projects-container__image {
        width: 60%;
        height: auto;
    }

    .project-image__popup {
        visibility: hidden;
        width: 200px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 8px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -80px;
    }

    .project-image__popup:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    .project-image__popup:hover {
        visibility: visible;
        -webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;
    }

    .projects-container__links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }

    .projects-container__links a {
        width: 30px;
        height: 30px;
        margin-right: 30px;
    }

</style>
