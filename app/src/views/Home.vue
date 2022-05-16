<template>
	<Navigation />
	<WeatherForecast />
	<div class="main-page-container">
		<div class="main-page__image"><img :src="mainImage" alt="programming-woman"></div>
		<div class="main-page__general-info">
			<div class="general-info__about-me">{{ intro }}</div>
			<div class="general-info__cv-git">
				<a :href="cvLink"><button class="cv-git__cv-button">CV</button></a>
				<div class="cv-git__git-icon"><a :href="gitHubLinkMain"><img src="/images/github-icon.png" alt=""></a></div>
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
				intro: '',
				mainImage: '',
				cvLink: '',
				gitHubLinkMain: ''
            }           
        },

		async created() {
			await this.sanityFetch(query, {
                type: 'about'
            });

			this.intro = this.result[0].intro;
			this.mainImage = this.result[0].mainImage.asset.url;
			this.cvLink = this.result[0].cv.asset.url;
			this.gitHubLinkMain = this.result[0].gitHubLinkMain;
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
		transform: scale(1);
		transition: transform 0.3s ease-in-out;
		border-radius: 10px;
	}

	.main-page__image img:hover {
		filter: none;
		transform: scale(1.1);
		transition: transform 0.3s ease-in-out;
	}

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

	a .cv-git__cv-button {
		text-decoration: none;
	}

	.cv-git__cv-button {
		height: 50px;
		width: 170px;
		background-color: var(--light-green);
		border-radius: 20px;
		text-align: center; 
		padding-top: 0.3em;
		margin-right: 5em;
		color: var(--nav-color);
		transform: scale(1);
		transition: transform 0.3s ease-in-out;
	}

	.cv-git__cv-button:hover {
		transform: scale(1.1);
		transition: transform 0.3s ease-in-out;
		background-color: var(--darker-green);
	}

	.cv-git__git-icon {
		transform: scale(1);
		transition: transform 0.3s ease-in-out;
	}

	.cv-git__git-icon:hover {
		transform: scale(1.2);
		transition: transform 0.3s ease-in-out;
	}

</style>

