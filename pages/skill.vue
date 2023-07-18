<template>
    <navbar />
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0">Skills</v-card-text>
        <v-divider></v-divider>
    </div>

    <v-row v-for="(item, i) in skills" class="d-flex justify-space-evenly">
        <v-col cols="10" sm="10" md="10" lg="10" class="py-0">
            <v-text-field
                variant="outlined"
                label="Skill"
                v-model="item.skill"
            ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2" lg="2">
            <v-btn
                v-if="i != 0"
                class="mr-4 mt-2"
                icon="mdi-delete"
                size="small"
                color="error"
                @click="skillRemove(i)"
            >
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-end">
        <v-btn class="mx-3 mb-6" color="primary" @click="skillAdder()">
            Add
        </v-btn>
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
    data: () => ({
        skills: [{}],
    }),
    mounted() {
        const skill = localStorage.getItem('skills')
            ? JSON.parse(localStorage.getItem('skills'))
            : ''
        if (skill) {
            this.skills = skill
        }
    },
    methods: {
        skillAdder() {
            this.skills.push({})
        },
        skillRemove(i) {
            this.skills.splice(i, 1)
        },
        saveData() {
            if (this.skills[0].skill) {
                localStorage.setItem('skills', JSON.stringify(this.skills))
            } else {
                localStorage.setItem('skills', [])
            }
            this.$router.push({ name: 'language' })
        },
        back() {
            this.$router.push({ name: 'education' })
        },
    },
}
</script>
