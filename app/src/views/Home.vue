<template>
	<Navigation />
	<WeatherForecast />
	<div class="main-page-container">
		<div class="main-page__image"><img src="/images/working-woman.jpg" alt="programming-woman"></div>
		<div class="main-page__general-info">
			<div class="general-info__about-me">Hi! I am Iryna Ostapenko, Junior Front-End Developer</div>
			<div class="general-info__cv-git">
				<div class="cv-git__cv-button">CV</div>
				<div class="cv-git__git-icon"><img src="/images/github-icon.png" alt=""></div>
			</div>
		</div>
	</div>
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

