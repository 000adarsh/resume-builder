<template>
    <div class="d-flex justify-center">
        <v-card width="750px" class="pa-5" flat>
            <v-row>
                <v-col cols="3">
                    <v-img
                        :src="profilePhoto"
                        :width="140"
                        :height="170"
                        class="ml-10"
                        cover
                    ></v-img>
                </v-col>
                <v-col cols="9">
                    <div v-if="firstName || lastName || tagline">
                        <h1
                            style="color: #2486bb"
                            class="text-h3 ml-10 mt-5 font-weight-bold"
                        >
                            {{ firstName }} {{ lastName }}
                        </h1>
                        <h2
                            style="color: #474545"
                            class="text-h5 ml-10 mt-3 text-color-error font-weight-bold"
                        >
                            {{ tagline }}
                        </h2>
                        <v-divider
                            thickness="5px"
                            class="mt-2"
                            inset
                            color="error"
                        ></v-divider>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="5">
                    <div class="d-flex flex-column mb-6">
                        <h4>
                            {{ location }}
                        </h4>
                        <h4 class="py-1" v-if="email">
                            <v-icon>mdi-email</v-icon>
                            {{ email }}
                        </h4>

                        <h4 class="py-1" v-if="phone">
                            <v-icon>mdi-phone</v-icon>
                            {{ phone }}
                        </h4>

                        <h4 class="py-1" v-if="website">
                            <v-icon>mdi-web</v-icon>
                            {{ website }}
                        </h4>

                        <h4 class="py-1" v-if="linkedin">
                            <v-icon>mdi-linkedin</v-icon>
                            {{ linkedin }}
                        </h4>

                        <h4 class="py-1" v-if="github">
                            <v-icon>mdi-github</v-icon>
                            {{ github }}
                        </h4>

                        <h4 class="py-1" v-if="twitter">
                            <v-icon>mdi-twitter</v-icon>
                            {{ twitter }}
                        </h4>

                        <h4 class="py-1" v-if="instagram">
                            <v-icon>mdi-instagram</v-icon>
                            {{ instagram }}
                        </h4>

                        <h4 class="py-1" v-if="facebook">
                            <v-icon>mdi-facebook</v-icon>
                            {{ facebook }}
                        </h4>
                        <div v-if="skills.length">
                            <v-divider thickness="5px" class="my-2"></v-divider>
                            <h2 class="text-h5 my-1 font-weight-bold">
                                Skills
                            </h2>
                            <h4 class="py-1" v-for="skill in skills">
                                <v-icon>mdi-circle-medium</v-icon>
                                {{ skill.skill }}
                            </h4>
                        </div>
                        <div v-if="languages.length">
                            <v-divider thickness="5px" class="my-2"></v-divider>
                            <h2 class="text-h5 my-1 font-weight-bold">
                                Languages
                            </h2>
                            <h4 class="py-1" v-for="language in languages">
                                <v-icon>mdi-circle-medium</v-icon>
                                {{ language.language }}
                            </h4>
                        </div>
                    </div>
                </v-col>
                <v-col cols="7" class="pl-5">
                    <div v-if="about">
                        <h2 class="text-h5 font-weight-bold">About</h2>
                        <h5 class="pl-2 mt-2">
                            {{ about }}
                        </h5>
                    </div>
                    <div v-if="experienses.length">
                        <v-divider thickness="5px" class="my-4"></v-divider>
                        <h2 class="text-h5 font-weight-bold">Experienses</h2>
                        <div
                            class="pl-2 mt-2 font-weight-bold"
                            v-for="experiense in experienses"
                        >
                            <h4>
                                <v-icon>mdi-circle-medium</v-icon>
                                {{ experiense.organization }} /
                                {{ experiense.position }}
                            </h4>
                            <h5 class="pl-5">
                                Duration - {{ experiense.duration }}
                            </h5>
                            <h5>
                                <v-icon>mdi-arrow-right-thick</v-icon
                                >{{ experiense.description }}
                            </h5>
                        </div>
                    </div>
                    <div v-if="projects.length">
                        <v-divider thickness="5px" class="my-4"></v-divider>
                        <h2 class="text-h5 font-weight-bold">Projects</h2>
                        <div class="pl-2 mt-2" v-for="project in projects">
                            <h4>
                                <v-icon>mdi-circle-medium</v-icon>
                                {{ project.title }}
                            </h4>
                            <h5 class="pl-5">Link - {{ project.link }}</h5>
                            <h5>
                                <v-icon>mdi-arrow-right-thick</v-icon
                                >{{ project.description }}
                            </h5>
                        </div>
                    </div>
                    <div v-if="education.length">
                        <v-divider thickness="5px" class="my-4"></v-divider>
                        <h2 class="text-h5 font-weight-bold">Education</h2>
                        <div class="pl-2 mt-2" v-for="ed in education">
                            <h4>
                                <v-icon>mdi-circle-medium</v-icon
                                >{{ ed.course }} / {{ ed.institute }}
                            </h4>
                            <h5 class="pl-5">Passing year - {{ ed.year }}</h5>
                            <h5>
                                <v-icon>mdi-arrow-right-thick</v-icon
                                >{{ ed.description }}
                            </h5>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'pdf Page',
    data() {
        return {
            profilePhoto: '',
            firstName: '',
            lastName: '',
            about: '',
            tagline: '',
            email: '',
            phone: '',
            location: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            github: '',
            skills: [],
            languages: [],
            experienses: [],
            projects: [],
            education: [],
        }
    },

    mounted() {
        this.profilePhoto = localStorage.getItem('profilePhoto')
        this.firstName = localStorage.getItem('firstname')
            ? localStorage.getItem('firstname').toUpperCase()
            : ''
        this.lastName = localStorage.getItem('lastname')
            ? localStorage.getItem('lastname').toUpperCase()
            : ''
        this.tagline = localStorage.getItem('tagline')
            ? localStorage.getItem('tagline')
            : ''
        this.about = localStorage.getItem('about')
            ? localStorage.getItem('about')
            : ''
        this.email = localStorage.getItem('email')
            ? localStorage.getItem('email')
            : ''
        this.phone = localStorage.getItem('phone')
            ? localStorage.getItem('phone')
            : ''
        this.location = localStorage.getItem('location')
            ? localStorage.getItem('location')
            : ''
        this.website = localStorage.getItem('website')
            ? localStorage.getItem('website')
            : ''
        this.instagram = localStorage.getItem('instagram')
            ? localStorage.getItem('instagram')
            : ''
        this.facebook = localStorage.getItem('facebook')
            ? localStorage.getItem('facebook')
            : ''
        this.twitter = localStorage.getItem('twitter')
            ? localStorage.getItem('twitter')
            : ''
        this.linkedin = localStorage.getItem('linkedin')
            ? localStorage.getItem('linkedin')
            : ''
        this.github = localStorage.getItem('github')
            ? localStorage.getItem('github')
            : ''
        this.skills = localStorage.getItem('skills')
            ? JSON.parse(localStorage.getItem('skills'))
            : []
        this.languages = localStorage.getItem('languages')
            ? JSON.parse(localStorage.getItem('languages'))
            : []
        this.experienses = localStorage.getItem('experienses')
            ? JSON.parse(localStorage.getItem('experienses'))
            : []
        this.projects = localStorage.getItem('projects')
            ? JSON.parse(localStorage.getItem('projects'))
            : []
        this.education = localStorage.getItem('education')
            ? JSON.parse(localStorage.getItem('education'))
            : []
    },
}
</script>
