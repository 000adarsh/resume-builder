<template>
    <navbar />
    <div class="my-4">
        <v-card-text class="text-center text-h4 py-0"
            >Education Details
        </v-card-text>
        <v-divider></v-divider>
    </div>
    <v-card
        v-for="(item, i) in education"
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
                @click="deletelist(i)"
            ></v-btn>
        </div>
        <v-row>
            <v-col
                cols="12"
                sm="12"
                md="5"
                lg="5"
                class="pb-0 d-flex align-center"
            >
                <v-text-field
                    variant="outlined"
                    label="Institute Name"
                    v-model="item.institute"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="2"
                lg="2"
                class="pb-0 d-flex align-center"
            >
                <v-text-field
                    variant="outlined"
                    label="Passing Year"
                    v-model="item.year"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="2"
                lg="2"
                class="pb-0 d-flex align-center"
            >
                <v-text-field
                    variant="outlined"
                    label="Course"
                    v-model="item.course"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="2"
                lg="2"
                class="pb-0 d-flex align-center"
            >
                <v-text-field
                    variant="outlined"
                    label="Description"
                    v-model="item.description"
                ></v-text-field>
            </v-col>
            <v-col>
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

    <v-row class="d-flex justify-end my-1">
        <v-btn class="mx-3" color="primary" @click="courseAdder()"> Add </v-btn>
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
        education: [{}],
    }),

    mounted() {
        const ed = JSON.parse(localStorage.getItem('education'))
        if (ed) {
            this.education = ed
        }
    },
    methods: {
        courseAdder() {
            this.education.push({})
        },
        deletelist(i) {
            this.education.splice(i, 1)
        },
        saveData() {
            localStorage.setItem('education', JSON.stringify(this.education))
            this.$router.push({ name: 'skill' })
        },
        back() {
            this.$router.push({ name: 'social' })
        },
    },
}
</script>

<style></style>
