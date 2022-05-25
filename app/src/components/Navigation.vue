<template>
    <div class="nav-container">
        <div class="nav-container__initials">IO</div>
        <RouterLink :to="{ name: 'home' }" class="nav-container__home-icon"><img src="/images/home-icon.png" alt="home-icon"></RouterLink>
        <nav class="nav-container__navigation" :class="{'visible' : isOpen}">
            <RouterLink :to="{ name: 'about'}">About me</RouterLink>
            <RouterLink :to="{ name: 'projects' }">My projects</RouterLink>
            <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
        </nav>
        <button class="hamburger-button" @click="openMenu()"  :class="{'hidden': isOpen}"><img src="/images/hamburger-menu.png" alt="hamburger-menu"></button>
        <button class="close-button" @click="closeMenu()" v-show="isOpen"><img src="/images/close-icon.png" alt="close-icon"></button>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                isOpen: false            
            }
        },

        methods: {
            openMenu() {
                this.isOpen = true;
            },
            closeMenu() {
                this.isOpen = false;
            }
        }
    }
    
</script>

<style>
    .nav-container {
        position: relative;
        width: 100%;
        height: 60px;
        background-color: var(--light-green);
        color: var(--nav-color);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .nav-container__initials {
        display: none;
    }

    .nav-container__home-icon {
        height: 35px;
        width: 35px;
        transform: scale(1);
		transition: transform 0.3s ease;
    }

    .nav-container__home-icon:hover {
        transform: scale(1.2);
		transition: transform 0.3s ease;
    }

    nav {
        visibility: hidden;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--light-green);
        z-index: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center; 
        padding-top: 80px;
        gap: 25px;    
    }

    .visible {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    nav a {
        text-decoration: none;
        color: var(--nav-color);
        transform: scale(1);
		transition: transform 0.3s ease;
    }

    nav a:hover {
        transform: scale(1.1);
		transition: transform 0.3s ease;
        font-weight: 500;
    }

    .nav-container__navigation a.router-link-active {
        text-decoration: underline;
    }

    @media only screen and (min-width: 768px) {
        .nav-container {
            position: fixed;
            width: 25%;
            height: 100vh;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 0;
        }

        .nav-container__initials {
            display: block;
            width: 100%; 
            height: 10%;
            padding-top: 3%; 
            margin-bottom: 30%;
            background-color: var(--darker-green);
            text-align: center;
            font-size: var(--header-style);
        }

        .nav-container__home-icon {
            height: 70px;
            width: 70px;
            margin-bottom: 30%;
        }

        nav {
            visibility: visible;
            position: relative;
            top: 0;
            width: auto;
            height: auto;
            justify-content: center;
            padding-top: 0;
        }

        .hamburger-button {
            display: none;
        }

        .close-button {
            display: none;
        }
    }

</style>
