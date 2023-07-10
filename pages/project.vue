<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0"
            >Project Developed</v-card-text
        >
        <v-divider></v-divider>
    </div>

    <v-row v-for="(item, i) in projects" class="d-flex justify-space-between">
        <v-col cols="12" sm="12" md="3" lg="3">
            <v-text-field
                variant="outlined"
                label="Title / Name"
                v-model="item.title"
            ></v-text-field>
        </v-col>

        <v-col cols="12" sm="5" md="3" lg="3">
            <v-text-field
                variant="outlined"
                label="Link"
                v-model="item.link"
            ></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="5" lg="5">
            <v-text-field
                variant="outlined"
                label="Description"
                v-model="item.description"
            ></v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="1" lg="1">
            <v-btn
                v-if="i != 0"
                class="mr-4 mt-2"
                icon="mdi-delete"
                size="small"
                color="error"
                @click="projectRemove(i)"
            >
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-btn class="mx-3 mb-6" color="primary" @click="projectAdder()">
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
        projects: [{}],
    }),
    mounted() {
        const project = JSON.parse(localStorage.getItem('projects'))
        if (project) {
            this.projects = project
        }
    },
    methods: {
        projectAdder() {
            this.projects.push({})
        },
        projectRemove(i) {
            this.projects.splice(i, 1)
        },
        saveData() {
            localStorage.setItem('projects', JSON.stringify(this.projects))
            this.$router.push({ name: 'preview' })
        },
        back() {
            this.$router.push({ name: 'language' })
        },
    },
}
</script>
