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

   //import sanity from '../sanity.js'

    // import sanityClient from '@sanity/client';

	// const sanity = sanityClient({
	// 	projectId: 'hepvg5nh',
	// 	dataset: 'production',
	// 	apiVersion: '2022-05-10', 
	// 	useCdn: false 
	// });

    export default {
        mixins: [viewMixin],
        components: {
            Navigation,
            WeatherForecast
        },
        data() {
            return {
                // loading: true,
                // result: null,
                projects: []
            }           
        },

        async created() {
            /*Ordinary sanity link is working properly */
            // const sanity_query_url = 'https://hepvg5nh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%24type%5D%20%7B%0A%20%20_id%2C%0A%20%20title%2C%0A%20%20slug%2C%0A%20%20description%2C%0A%20%20gitHubLink%2C%0A%20%20netlifyLink%2C%0A%20%20image%20%7B%0A%20%20%20asset-%3E%20%7B%0A%20%20%20%20url%0A%20%20%20%7D%0A%20%20%7D%0A%7D&%24type=%22project%22'

		    // const sanity_response = await fetch(sanity_query_url);
		    // const { result } = await sanity_response.json();

		    // this.projects = result;
            // console.log(this.projects);

            // const query = `*[_type == $type]`

            // const query = `*[_type == $type] {
            //     _id,
            //     title,
            //     slug,
            //     description,
            //     gitHubLink,
            //     netlifyLink,
            //     image {
            //         asset -> {
            //             url
            //         }
            //     }
            // }` 
			// const params = { type: 'project' };

			// this.projects = await sanity.fetch(query, params);
			// this.loading = false;
            // console.log(this.projects);

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
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .image-container__overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        /* opacity: 0; */
        overflow: hidden;
        transform: scale(0);
        transition: .4s ease;
        background-color: var(--nav-color);
    }

    .projects-container__image-container:hover .image-container__overlay {
        transform: scale(1);
    }

    .image-container__overlay-description {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
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
