<template>
    <navbar />
    <v-form class="pt-4" ref="form" v-model="valid">
        <div class="my-4">
            <v-card-text class="text-center text-h4 py-0"
                >Personal Details</v-card-text
            >
            <v-divider></v-divider>
        </div>
        <v-row class="pt-2">
            <v-col class="pt-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    :rules="[
                        (firstName) =>
                            (!!firstName && firstName.length > 2) ||
                            'firstName greater than 2 character',
                    ]"
                    clearable
                    v-model="firstname"
                    label="First Name*"
                ></v-text-field>
            </v-col>
            <v-col class="pt-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="lastname"
                    :rules="[
                        (lastName) =>
                            (!!lastName && lastName.length > 2) ||
                            'LastName greater than 2 character',
                    ]"
                    clearable
                    label="Last Name*"
                ></v-text-field>
            </v-col>

            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="phone"
                    type="number"
                    :rules="[
                        (phone) =>
                            (!!phone && phone.length === 10) ||
                            'phone no is 10 digit required ',
                    ]"
                    label="Phone no*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="email"
                    type="email"
                    label="E-mail*"
                    :rules="[
                        (email) =>
                            /.+@.+\..+/.test(email) || 'Enter a valid email ',
                    ]"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="location"
                    :rules="[(phone) => !!phone || 'Location is required ']"
                    label="Location*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-text-field
                    variant="outlined"
                    v-model="tagline"
                    :rules="[(tagline) => !!tagline || 'tagline is required ']"
                    label="Tagline*"
                ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="6">
                <v-file-input
                    accept=" image/jpeg"
                    v-model="img"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Profile Photo"
                    variant="outlined"
                ></v-file-input>
            </v-col>
            <v-col class="py-0" cols="12" sm="12" md="12">
                <v-textarea
                    variant="outlined"
                    v-model="about"
                    :rules="[(about) => !!about || 'about is required ']"
                    label="About*"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-space-evenly">
            <v-btn
                class="mx-3"
                append-icon="mdi-chevron-right"
                color="primary"
                :disabled="!valid"
                @click="next()"
            >
                next
            </v-btn>
        </v-row>
    </v-form>
</template>
<script>
export default {
    data() {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            location: '',
            about: '',
            img: [],
            profilePhoto: '',
            tagline: '',
        }
    },
    mounted() {
        this.firstname = localStorage.getItem('firstname')
        this.lastname = localStorage.getItem('lastname')
        this.phone = localStorage.getItem('phone')
        this.email = localStorage.getItem('email')
        this.location = localStorage.getItem('location')
        this.about = localStorage.getItem('about')
        this.profilePhoto = localStorage.getItem('profilePhoto')
        this.tagline = localStorage.getItem('tagline')
    },
    methods: {
        next() {
            if (this.img[0]) {
                var reader = new FileReader()
                reader.readAsDataURL(this.img[0])
                reader.onload = () => {
                    this.profilePhoto = reader.result
                    this.next2()
                }
            } else {
                this.next2()
            }
        },
        next2() {
            localStorage.setItem(
                'firstname',
                this.firstname ? this.firstname : ''
            )
            localStorage.setItem('lastname', this.lastname ? this.lastname : '')
            localStorage.setItem('phone', this.phone ? this.phone : '')
            localStorage.setItem('email', this.email ? this.email : '')
            localStorage.setItem('location', this.location ? this.location : '')
            localStorage.setItem('about', this.about ? this.about : '')
            localStorage.setItem(
                'profilePhoto',
                this.profilePhoto ? this.profilePhoto : ''
            )
            localStorage.setItem('tagline', this.tagline ? this.tagline : '')
            this.$router.push({ name: 'social' })
        },
    },
}
</script>
