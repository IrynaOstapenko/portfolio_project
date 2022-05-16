<template>
	<Navigation />
	<WeatherForecast />
	<div class="main-page-container">
		<div class="main-page__image"><img :src="mainImage" alt="programming-woman"></div>
		<div class="main-page__general-info">
			<div class="general-info__about-me">{{ intro }}</div>
			<div class="general-info__cv-git">
				<a :href="cvLink"><div class="cv-git__cv-button">CV</div></a>
				<div class="cv-git__git-icon"><img src="/images/github-icon.png" alt=""></div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import WeatherForecast from '../components/WeatherForecast.vue';

import query from '../groq/home.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

// import sanityClient from '@sanity/client';

// 	const sanity = sanityClient({
// 		projectId: 'hepvg5nh',
// 		dataset: 'production',
// 		apiVersion: '2022-05-10', 
// 		useCdn: false 
// 	});

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
				about: [],
				intro: '',
				mainImage: '',
				cvLink: ''
            }           
        },

		async created() {
			// const query = `*[_type == $type] 
			// {
            //     intro,
            //     aboutMe,
            //     cv {
			// 		asset -> {
			// 			url
			// 		}
			// 	},
            //     mainImage {
            //          asset -> {
            //              url
            //          }
            //     }
            // }` 
			// const params = { type: 'about' };

			// this.about = await sanity.fetch(query, params);
			// this.loading = false;
            // console.log(this.about);

			await this.sanityFetch(query, {
                type: 'about'
            });

			this.about = this.result;

			this.intro = this.about[0].intro;
			this.mainImage = this.about[0].mainImage.asset.url;
			this.cvLink = this.about[0].cv.asset.url;
		}
    }
</script>

<style>
	.main-page-container {
		width: 60%;
		height: 40%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 24%;
		margin-left: 10%;
		display: flex;
		flex-flow: row nowrap;
		gap: 2em;
	}

	.main-page__image img {
		height: 100%;
		width: auto;
		filter: grayscale(100%);
	}

	.main-page__image img:hover {
		filter: none;
		transform: scale(1.1);
		transition: transform 0.5s ease-in-out;
	}

	/*.main-page__image img:hover{
		animation-name: zoomIn;
		animation-duration: 0.3s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
	}

	@keyframes zoomIn {
		from{
			transform: scale(1);
			filter: grayscale(100%);
		}
		to{
			transform: scale(1.1);
			filter: none;
		}
	}*/

	.main-page__general-info {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
	}

	.general-info__cv-git {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.cv-git__cv-button {
		height: 50px;
		width: 170px;
		background-color: var(--light-green);
		border-radius: 20px;
		text-align: center; 
		padding-top: 0.3em;
		margin-right: 5em;
	}

</style>

