const pdf = require('pdfjs')
const fs = require('fs')
const path = require('path')
const firstName = 'John'
const lastName = 'Doe'
const about =
    ' Freelance web developer Freelance web developer Freelance web developer Freelance web developer Freelance web developer'
const tagline = 'I am a web developer'
const email = 'a@a.com'
const phone = '1234567890'
const location = 'Prayagraj Uttar Pradesh India'
const website = 'https://www.google.com'
const instagram = 'https://www.google.com'
const facebook = 'https://www.google.com'
const twitter = 'https://www.google.com'
const linkedin = 'https://www.google.com'
const github = 'https://www.google.com'
const skills = [{ skill: 'asdgsaui' }, { skill: 'asdas' }]
const languages = [{ skill: 'asdgsaui' }, { skill: 'asdas' }]
const experienses = [
    {
        organization: 'Google',
        position: 'Developer',
        duration: '2 year',
        description: 'I was working on this company on vue  and java language',
    },
]
const educations = [
    {
        institute: 'apple',
        year: '2022-2025',
        course: 'bca',
        description: 'I was working on this company on vue  and java language',
    },
]
const projects = [{ title: 'sabsbabs', link: 'sasass', description: 'asasasa' }]

// const img1 = 'https://avatars.githubusercontent.com/u/4726921?v=4'
// const img = fs.readFileSync(path.join(__dirname, '/a.jpeg'))

// doc.image(img, {
//   wrap: false, x: 0, y: 841.89, width: 595.28
// })
const doc = new pdf.Document({
    font: require('pdfjs/font/Helvetica'),
    padding: 30,
})
;(async () => {
    const table = doc.table({
        widths: [200, null],
    })
    const row = table.row()

    const cell1 = row.cell({
        padding: 0,
        backgroundColor: 0xeeeeee,
        padding: 10,
    })
    // doc.image(img1, { width: 100, height: 100, align: 'center' })
    cell1.text(`${location}`, { fontSize: 12 })
    cell1.text(`${phone}`, { fontSize: 12 })
    cell1.text(`${email}`, { fontSize: 12 })
    cell1.text(`${website}`, { fontSize: 12 })
    cell1.text(`${linkedin}`, { fontSize: 12 })
    cell1.text(`${twitter}`, { fontSize: 12 })
    cell1.text(`${instagram}`, { fontSize: 12 })
    cell1.text(`${facebook}`, { fontSize: 12 })
    cell1.text(`${github}`, { fontSize: 12 })
    cell1.text('', { padding: 10 })
    cell1.cell('', {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell1.text('Skills', {
        padding: 10,
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    skills.forEach((skill) => {
        cell1.text('', { fontSize: 12 }).add('*  ').add(`${skill.skill}`)
    })
    cell1.cell('', {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell1.text('Languages', {
        padding: 10,
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    languages.forEach((skill) => {
        cell1.text('', { fontSize: 12 }).add('*  ').add(`${skill.skill}`)
    })

    //write right side
    const cell2 = row.cell({
        backgroundColor: 0xbbbbbb,
        padding: 10,
    })

    cell2.text(`${firstName} ${lastName}`, {
        fontSize: 30,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    cell2.text(`${tagline}`, { fontSize: 20 })
    cell2.cell('', {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell2.cell('', { padding: 10 })
    cell2.text('Profile', {
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    cell2.text(`${about}`, { fontSize: 12 })
    cell2.cell('', {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell2.cell('', {
        padding: 6,
    })
    cell2.text('Experienses', {
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    cell2.cell('', {
        padding: 4,
    })
    experienses.forEach((experiense) => {
        cell2
            .text('', {
                fontSize: 18,
                font: require('pdfjs/font/Helvetica-Bold'),
            })
            .add(`${experiense.position} / ${experiense.organization}`)
        cell2.text(`${experiense.duration}`, { fontSize: 12 })
        cell2.cell('', {
            padding: 5,
        })
        cell2
            .text('', { fontSize: 12 })
            .add('*')
            .add(`${experiense.description}`)
    })
    cell2.cell('', {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell2.cell('', { padding: 10 })
    cell2.text('Projects', {
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    cell2.cell('', {
        padding: 4,
    })
    projects.forEach((project) => {
        cell2.text(`${project.title}`, {
            fontSize: 18,
            font: require('pdfjs/font/Helvetica-Bold'),
        })
        cell2.text(`${project.link}`, { fontSize: 12 })
        cell2.cell('', {
            padding: 5,
        })
        cell2.text('', { fontSize: 12 }).add('*').add(`${project.description}`)
    })
    cell2.cell('', {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 0x2980b9,
    })
    cell2.cell('', { padding: 10 })
    cell2.text('Education', {
        fontSize: 20,
        font: require('pdfjs/font/Helvetica-Bold'),
    })
    cell2.cell('', {
        padding: 4,
    })
    educations.forEach((education) => {
        cell2
            .text('', {
                fontSize: 18,
                font: require('pdfjs/font/Helvetica-Bold'),
            })
            .add(`${education.course} / ${education.institute}`)
        cell2.text(`${education.year}`, { fontSize: 12 })
        cell2.cell('', {
            padding: 5,
        })
        cell2
            .text('', { fontSize: 12 })
            .add('*')
            .add(`${education.description}`)
    })

    await doc.end()
})()
doc.pipe(fs.createWriteStream('output.pdf'))
