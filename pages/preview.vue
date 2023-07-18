<template>
    <div v-if="printPdf">
        <h1 class="text-center">Preview PDF</h1>
        <v-divider thickness="3"></v-divider>
        <div class="mt-5 d-flex justify-space-between">
            <v-btn
                class="mx-3"
                prepend-icon="mdi-chevron-left"
                color="primary"
                @click="back()"
            >
                back
            </v-btn>
            <v-btn prepend-icon="mdi-download" color="primary" @click="pdf"
                >Download PDF</v-btn
            >
        </div>
    </div>
    <div class="ma-6">
        <pdf />
    </div>
</template>
<script>
export default {
    data: () => ({
        printPdf: true,
    }),
    methods: {
        pdf() {
            this.printPdf = false
            // delay 5 seconds
            setTimeout(() => {
                window.print()
            }, 3000)
        },
        back() {
            this.$router.push({ name: 'experiense' })
        },
    },
}
</script>
