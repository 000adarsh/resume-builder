<template>
    <form class="pt-4">
        <div class="my-4">
            <v-card-text class="text-center text-h4 py-0"
                >Personal Details</v-card-text
            >
            <v-divider></v-divider>
        </div>
        <v-row class="pt-2">
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="firstname"
                    label="First Name*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="lastname"
                    label="Last Name*"
                ></v-text-field>
            </v-col>

            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="phone"
                    type="number"
                    label="Phone no*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="email"
                    type="email"
                    label="E-mail*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="location"
                    label="Location*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="12">
                <v-textarea
                    variant="outlined"
                    v-model="about"
                    label="About*"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-space-evenly">
            <v-btn
                class="mx-3"
                append-icon="mdi-chevron-right"
                color="primary"
                @click="next()"
            >
                next
            </v-btn>
        </v-row>
    </form>
</template>
<script>
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            location: '',
            about: '',
        }
    },

    mounted() {
        this.firstname = localStorage.getItem('firstname')
        this.lastname = localStorage.getItem('lastname')
        this.phone = localStorage.getItem('phone')
        this.email = localStorage.getItem('email')
        this.location = localStorage.getItem('location')
        this.about = localStorage.getItem('about')
    },
    methods: {
        next() {
            localStorage.setItem('firstname', this.firstname)
            localStorage.setItem('lastname', this.lastname)
            localStorage.setItem('phone', this.phone)
            localStorage.setItem('email', this.email)
            localStorage.setItem('location', this.location)
            localStorage.setItem('about', this.about)
            console.log('next')
            this.$router.push({ name: 'social' })
        },
    },
}
</script>
