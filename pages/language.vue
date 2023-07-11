<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0">Languages</v-card-text>
        <v-divider></v-divider>
    </div>
    <v-card
        v-for="(item, i) in languages"
        width="100%"
        height="100%"
        class="pa-2 my-5"
        elevation="2"
    >
        <div class="d-flex justify-end mb-2 d-md-none">
            <v-btn
                v-if="i != 0"
                icon="mdi-delete"
                size="small"
                color="error"
                @click="languageRemove(i)"
            >
            </v-btn>
        </div>
        <v-row>
            <v-col
                cols="12"
                sm="12"
                md="6"
                lg="6"
                class="pb-0 d-flex align-center"
            >
                <v-text-field
                    variant="outlined"
                    label="Language"
                    v-model="item.language"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="5"
                lg="5"
                class="pb-0 d-flex align-center"
            >
                <v-select
                    label="Select"
                    :items="['Fluent', 'Medium', 'Begginer']"
                    variant="outlined"
                    v-model="item.select"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="12" md="1" lg="1">
                <div class="mb-4 d-none d-md-flex">
                    <v-btn
                        v-if="i != 0"
                        icon="mdi-delete"
                        size="small"
                        color="error"
                        @click="deletelist(i)"
                    ></v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>
    <v-row>
        <v-spacer></v-spacer>
        <v-btn class="mx-3 mb-6" color="primary" @click="languageAdder()">
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
        languages: [{}],
    }),
    mounted() {
        const language = JSON.parse(localStorage.getItem('languages'))
        if (language) {
            this.languages = language
        }
    },
    methods: {
        languageAdder() {
            this.languages.push({})
        },
        languageRemove(i) {
            this.languages.splice(i, 1)
        },
        saveData() {
            localStorage.setItem('languages', JSON.stringify(this.languages))
            this.$router.push({ name: 'project' })
        },
        back() {
            this.$router.push({ name: 'skill' })
        },
    },
}
</script>
