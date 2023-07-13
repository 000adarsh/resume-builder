<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0">Experienses</v-card-text>
        <v-divider></v-divider>
    </div>
    <v-card v-for="(item, i) in experienses" class="my-2 pa-2" elevation="2">
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

            <v-col cols="12" sm="12" md="2" lg="2" class="pb-0">
                <v-text-field
                    variant="outlined"
                    label="Duration"
                    v-model="item.duration"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" class="pb-0">
                <v-text-field
                    variant="outlined"
                    label="Description"
                    v-model="item.description"
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
        experienses: [{}],
    }),
    mounted() {
        const project = JSON.parse(localStorage.getItem('experienses'))
        if (project) {
            this.experienses = project
        }
    },
    methods: {
        experienseAdder() {
            this.experienses.push({})
        },
        experienseRemove(i) {
            this.experienses.splice(i, 1)
        },
        saveData() {
            localStorage.setItem(
                'experienses',
                JSON.stringify(this.experienses)
            )
            this.$router.push({ name: 'preview' })
        },
        back() {
            this.$router.push({ name: 'project' })
        },
    },
}
</script>
