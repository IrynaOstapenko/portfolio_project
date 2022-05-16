<template>
    <div class="nav-container">
        <div class="nav-container__initials">IO</div>
        <RouterLink :to="{ name: 'home' }" class="nav-container__home-icon"><img src="/images/home-icon.png" alt="home-icon"></RouterLink>
        <nav class="nav-container__navigation">
            <RouterLink :to="{ name: 'about'}">About me</RouterLink>
            <RouterLink :to="{ name: 'projects' }">My projects</RouterLink>
            <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
        </nav>
    </div>
</template>


<script>
    

</script>

<style>
    .nav-container {
        position: fixed;
        width: 24%;
        height: 100vh;
        background-color: var(--light-green);
        color: var(--nav-color);
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .nav-container__initials {
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
        transform: scale(1);
		transition: transform 0.3s ease;
    }

    .nav-container__home-icon:hover {
        transform: scale(1.2);
		transition: transform 0.3s ease;
    }

    nav {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center; 
        gap: 25px;
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

</style>
