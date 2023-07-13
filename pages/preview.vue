<template>
    <div>
        <h1>preview</h1>
        <v-btn @click="run">apple</v-btn>
    </div>
</template>
<script>
import { pdfMaker } from '../pdf/pdf.mjs'
export default {
    data: () => ({
        data: {
            firstName: 'Adarsh ',
            lastName: 'Maurya',
            about: 'Freelance web developer Freelance web developer Freelance web developer Freelance web developer Freelance web developer',
            tagline: 'I am a web developer',
            email: 'a@a.com',
            phone: '1234567890',
            location: 'Prayagraj Uttar Pradesh India',
            website: 'https://www.google.com',
            instagram: 'https://www.instagram.com',
            facebook: '',
            twitter: 'https://www.twitter.com',
            linkedin: 'https://www.google.com',
            github: 'https://www.google.com',
            skills: [{ skill: 'asdgsaui' }, { skill: 'asdas' }],
            languages: [{ skill: 'asdgsaui' }, { skill: 'asdas' }],
            experienses: [
                {
                    organization: 'Google',
                    position: 'Developer',
                    duration: '2 year',
                    description:
                        'I was working on this company on vue  and java language',
                },
            ],
            educations: [
                {
                    institute: 'apple',
                    year: '2022-2025',
                    course: 'bca',
                    description:
                        'I was working on this company on vue  and java language',
                },
            ],
            projects: [
                { title: 'sabsbabs', link: 'sasass', description: 'asasasa' },
            ],
        },
    }),
    methods: {
        run() {
            console.log('apple')
            // console.log(pdfMaker())
            // pdfMaker()
        },
    },
}
</script>
