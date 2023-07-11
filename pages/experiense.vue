<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0">Experienses</v-card-text>
        <v-divider></v-divider>
    </div>
    <v-card v-for="(item, i) in projects" class="my-2 pa-2" elevation="2">
        <div class="d-flex justify-end mb-2 d-md-none">
            <v-btn
                v-if="i != 0"
                icon="mdi-delete"
                size="small"
                color="error"
                @click="experienseRemove(i)"
            ></v-btn>
        </div>
        <v-row class="d-flex justify-space-between">
            <v-col cols="12" sm="12" md="3" lg="3" class="pb-0">
                <v-text-field
                    variant="outlined"
                    label="Organization"
                    v-model="item.organization"
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3" class="pb-0">
                <v-text-field
                    variant="outlined"
                    label="Position"
                    v-model="item.position"
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="5" lg="5" class="pb-0">
                <v-text-field
                    variant="outlined"
                    label="Time Duration"
                    v-model="item.time"
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="1" lg="1">
                <div class="mb-4 d-none d-md-flex">
                    <v-btn
                        v-if="i != 0"
                        icon="mdi-delete"
                        size="small"
                        class="d-none d-md-flex"
                        color="error"
                        @click="experienseRemove(i)"
                    >
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>

    <v-row>
        <v-spacer></v-spacer>
        <v-btn class="mx-3 my-5" color="primary" @click="experienseAdder()">
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
        experienseAdder() {
            this.projects.push({})
        },
        experienseRemove(i) {
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
