<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0"
            >Social Details
        </v-card-text>
        <v-divider></v-divider>
    </div>
    <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="linkedin"
                append-inner-icon="mdi-linkedin"
                label="Linkedin"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="twitter"
                append-inner-icon="mdi-twitter"
                label="Twitter"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="instagram"
                append-inner-icon="mdi-instagram"
                label="Instagram"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="facebook"
                append-inner-icon="mdi-facebook"
                label="Facebook"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="github"
                append-inner-icon="mdi-github"
                label="Github"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="py-1">
            <v-text-field
                variant="outlined"
                v-model="website"
                append-inner-icon="mdi-web"
                label="Website"
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-space-evenly">
        <v-btn
            class="mx-3"
            prepend-icon="mdi-chevron-left"
            color="primary"
            @click="back()"
        >
            back
        </v-btn>
        <v-btn
            class="mx-3"
            append-icon="mdi-chevron-right"
            color="primary"
            @click="saveData()"
        >
            next
        </v-btn>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            linkedin: '',
            github: '',
            instagram: '',
            twitter: '',
            website: '',
            facebook: '',
        }
    },

    mounted() {
        this.linkedin = localStorage.getItem('linkedin')
        this.github = localStorage.getItem('github')
        this.instagram = localStorage.getItem('instagram')
        this.twitter = localStorage.getItem('twitter')
        this.website = localStorage.getItem('website')
        this.facebook = localStorage.getItem('facebook')
    },
    methods: {
        saveData() {
            localStorage.setItem('linkedin', this.linkedin ? this.linkedin : '')
            localStorage.setItem('github', this.github ? this.github : '')
            localStorage.setItem(
                'instagram',
                this.instagram ? this.instagram : ''
            )
            localStorage.setItem('twitter', this.twitter ? this.twitter : '')
            localStorage.setItem('website', this.website ? this.website : '')
            localStorage.setItem('facebook', this.facebook ? this.facebook : '')
            this.$router.push({ name: 'education' })
        },
        back() {
            this.$router.push({ name: 'index' })
        },
    },
}
</script>
