<template>
    <Navigation />
    <WeatherForecast />
    <div class="projects-container">
        <div v-for="project in projects" class="projects-container__item">
            <div>{{ project.title }}</div>
            <div class="projects-container__image-container">
                <img :src="project.image.asset.url" alt="project-image" class="image-container__image">
                <div class="image-container__overlay">
                    <div class="image-container__overlay-description">{{ project.description }}</div>
                </div>                
            </div>            
            <div class="projects-container__links">
                <a :href="project.gitHubLink" aria-label="link-to-github"><img src="/images/github-icon.png" alt="github-icon"></a>
                <a :href="project.netlifyLink" aria-label="link-to-netlify"><img src="/images/netlify-icon.png" alt="netlify-icon"></a>
            </div>            
        </div>
    </div>
    
</template>

<script>    
    import Navigation from '../components/Navigation.vue';
    import WeatherForecast from '../components/WeatherForecast.vue';

    import query from '../groq/myProjects.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

    export default {
        mixins: [viewMixin],
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
            await this.sanityFetch(query, {
                type: 'project'
            })
            this.projects = this.result;
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

    .projects-container__image-container {
        width: 60%;
        height: 30%;
        position: relative;
        cursor: pointer;
    }

    .image-container__image {
        /* width: 100%;
        height: 100%; */
        object-fit: contain;
    }

    .image-container__overlay {
        position: absolute;
        bottom: 0;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.8); 
        width: 100%;
        opacity: 0;
        overflow: hidden;
        transition: .4s ease;
    }

    .projects-container__image-container:hover .image-container__overlay {
        opacity: 1;
    }

    .image-container__overlay-description {
        color: white;
        font-size: 20px;
        text-align: center;
        padding: 1em;
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
