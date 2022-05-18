<template>
    <Navigation />
    <WeatherForecast />
    <div class="contacts-container">
        <div class="contacts-container__contacts">
            <div class="contacts__phone">
                <img class="contacts__phone-icon" src="/images/telephone.png" alt="telephone-icon">
                <div class="contacts__contact">{{ phone }}</div>
            </div>
            <div class="contacts__email">
                <img class="contacts__email-icon" src="/images/email.png" alt="email-icon">
                <div class="contacts__contact">{{ email }}</div>
            </div>
        </div>
        <h3>Contact Form</h3>
        <div class="contacts-container__form">
            <form>
                <input type="text" id="name" name="name" placeholder="Name" v-model="addedName" required>

                <input type="email" id="email" name="email" placeholder="Email" v-model="addedEmail" required>

                <input type="textarea" id="message" name="message" placeholder="Your message" v-model="addedMessage" required>

                <input type="submit" value="Send" @click="createMessage">
            </form>                
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
                phone: '',
                email: '',
                addedName: '',
                addedEmail: '',
                addedMessage: ''
            }
        },

        async created() {
            await this.sanityFetch(query, {
                type: 'about'
            });

            this.phone = this.result[0].telephoneNumber;
            this.email = this.result[0].email;
        },

        methods: {
            createMessage() {
                sanity.create({
                    _type: 'message',
                    name: this.addedName,
                    email: this.addedEmail,
                    message: this.addedMessage
                })
            }
        }
    }
</script>

<style>
    .contacts-container {
        position: absolute;
        top: 20%;
        left: 35%;
        width: 50%;
    }

    .contacts-container__contacts {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    .contacts-container__contacts div {
        width: 35%;
        height: 10%;
        background-color: white;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 10px;
    }

    .contacts-container__contacts div:hover {
        box-shadow: 5px 5px 5px #3A3A3A;
    }

    .contacts__phone-icon {
        width: 30px;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .contacts__email-icon {
        width: 40px;
        height: 40px;
    }

    .contacts__contact {
        text-align: center;
        font-size: 0.8em;
    }

    h3 {
        text-align: center;
        margin-top: 20px;
    }

    .contacts-container__form {
        margin-top: 20px;
    }

    form {
        display: flex;
        flex-flow: column nowrap;
        padding: 5px;
    }

    input {
         width: 100%;
         height: 50px;
         margin-bottom: 10px;
         background-color: white;
         padding-left: 5px;
         border-radius: 10px;
         font-size: 0.7em;
    }

    input:hover {
         box-shadow: 2px 2px 5px #3A3A3A;
    }

    input[type=textarea] {
        height: 100px;
    }

    input[type=textarea]::placeholder {
        margin: 0;
    }

    input[type=submit] {
        width: 30%;
        background-color: var(--light-green);
        margin: auto;
        cursor: pointer;
        font-size: 1em;
        transform: scale(1);
		transition: transform 0.3s ease;
    }

    input[type=submit]:hover {
        background-color: var(--darker-green);
        transform: scale(1.1);
		transition: transform 0.3s ease;
    }

</style>