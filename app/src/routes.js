import Home from './views/Home.vue';
import AboutMe from './components/AboutMe.vue';
import MyProjects from './components/MyProjects.vue';
import Contacts from './components/Contacts.vue'

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'about', path: '/about', component: AboutMe},
	{ name: 'projects', path: '/projects', component: MyProjects},
	{ name: 'contacts', path: '/contacts', component: Contacts},
];
