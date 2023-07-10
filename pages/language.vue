<template>
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0">Languages</v-card-text>
        <v-divider></v-divider>
    </div>

    <v-row v-for="(item, i) in languages" class="d-flex justify-space-between">
        <v-col cols="5" sm="5" md="6" lg="4">
            <v-text-field
                variant="outlined"
                label="Language"
                v-model="item.language"
            ></v-text-field>
        </v-col>
        <v-col cols="5" sm="5" md="5" lg="4">
            <v-select
                label="Select"
                :items="['Fluent', 'Medium', 'Begginer']"
                variant="outlined"
                v-model="item.select"
            ></v-select>
        </v-col>
        <v-col cols="2" sm="2" md="2" lg="4">
            <v-btn
                v-if="i != 0"
                class="mr-4 mt-2"
                icon="mdi-delete"
                size="small"
                color="error"
                @click="languageRemove(i)"
            >
            </v-btn>
        </v-col>
    </v-row>
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
            this.$router.push({ name: 'language' })
        },
        back() {
            this.$router.push({ name: 'skill' })
        },
    },
}
</script>
