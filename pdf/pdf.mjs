import pdf from 'pdfjs'
import { path, dirname } from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

import helvetica from 'pdfjs/font/Helvetica.js'
import helveticaBold from 'pdfjs/font/Helvetica-Bold.js'
const data = {
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
    projects: [{ title: 'sabsbabs', link: 'sasass', description: 'asasasa' }],
}

const __dirname = dirname(fileURLToPath(import.meta.url))

const img = new pdf.Image(fs.readFileSync(path.join(__dirname, './a.jpeg')))

const capitalize = (str) => {
    const s = `${str}`
    var pieces = s.split(' ')
    for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase()
        pieces[i] = j + pieces[i].substr(1)
    }
    return pieces.join(' ')
}

export const pdfMaker = async (data) => {
    const doc = new pdf.Document({
        font: helvetica,
        padding: 30,
    })

    ;(async () => {
        doc.image(img, {
            x: 70,
            width: 100,
            wrap: false,
            height: 120,
        })

        const table = doc.table({
            widths: [200, null],
        })
        const row = table.row()
        const abc = row.cell()
        abc.cell('', {
            width: 100,
            minHeight: 130,
        })
        const cell1 = abc.cell('', {
            minHeight: 640,
            backgroundColor: 0xbbffbb,
            padding: 10,
        })
        cell1.text(`${capitalize(data.location)}`, { fontSize: 12 })
        cell1.text(`${data.phone}`, { fontSize: 12 })
        cell1.text(`${data.email}`, { fontSize: 12 })
        if (data.website) {
            cell1.text(`${data.website}`, { fontSize: 12 })
        }
        if (data.linkedin) {
            cell1.text(`${data.linkedin}`, { fontSize: 12 })
        }
        if (data.twitter) {
            cell1.text(`${data.twitter}`, { fontSize: 12 })
        }
        if (data.instagram) {
            cell1.text(`${data.instagram}`, { fontSize: 12 })
        }
        if (data.facebook) {
            cell1.text(`${data.facebook}`, { fontSize: 12 })
        }
        if (data.github) {
            cell1.text(`${data.github}`, { fontSize: 12 })
        }
        cell1.text('', { padding: 10 })
        cell1.cell('', {
            padding: 10,
            borderBottomWidth: 2,
            borderBottomColor: 0x2980b9,
        })
        if (data.skills.length > 0) {
            cell1.text('Skills', {
                padding: 10,
                fontSize: 20,
                font: helveticaBold,
            })
            data.skills.forEach((skill) => {
                cell1
                    .text('', { fontSize: 12 })
                    .add('*  ')
                    .add(`${skill.skill}`)
            })
            cell1.cell('', {
                padding: 10,
                borderBottomWidth: 2,
                borderBottomColor: 0x2980b9,
            })
        }
        if (data.languages.length > 0) {
            cell1.text('Languages', {
                padding: 10,
                fontSize: 20,
                font: helveticaBold,
            })
            data.languages.forEach((skill) => {
                cell1
                    .text('', { fontSize: 12 })
                    .add('*  ')
                    .add(`${skill.skill}`)
            })
        }
        //write right side
        const cell2 = row.cell({
            minHeight: 780,
            padding: 10,
        })

        cell2.text(`${data.firstName} ${data.lastName}`, {
            fontSize: 30,
            font: helveticaBold,
            color: 0x2970b9,
        })
        cell2.text(`${data.tagline}`, { fontSize: 20 })
        cell2.cell('', {
            padding: 5,
            borderBottomWidth: 2,
            borderBottomColor: 0x2980b9,
        })
        cell2.cell('', { padding: 10 })
        cell2.text('Profile', {
            fontSize: 20,
            font: helveticaBold,
        })
        cell2.text(`${data.about}`, { fontSize: 12 })
        cell2.cell('', {
            padding: 10,
            borderBottomWidth: 2,
            borderBottomColor: 0x2980b9,
        })
        cell2.cell('', {
            padding: 6,
        })
        if (data.experienses.length > 0) {
            cell2.text('Experienses', {
                fontSize: 20,
                font: helveticaBold,
            })
            cell2.cell('', {
                padding: 4,
            })
            data.experienses.forEach((experiense) => {
                cell2
                    .text('', {
                        fontSize: 18,
                        font: helveticaBold,
                    })
                    .add(
                        `${capitalize(experiense.position)} / ${capitalize(
                            experiense.organization
                        )}`
                    )
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
        }
        if (data.projects.length > 0) {
            cell2.text('Projects', {
                fontSize: 20,
                font: helveticaBold,
            })
            cell2.cell('', {
                padding: 4,
            })
            data.projects.forEach((project) => {
                cell2.text(`${capitalize(project.title)}`, {
                    fontSize: 18,
                    font: helveticaBold,
                })
                cell2.text(`${project.link}`, { fontSize: 12 })
                cell2.cell('', {
                    padding: 5,
                })
                cell2
                    .text('', { fontSize: 12 })
                    .add('*')
                    .add(`${project.description}`)
            })
            cell2.cell('', {
                padding: 5,
                borderBottomWidth: 2,
                borderBottomColor: 0x2980b9,
            })
            cell2.cell('', { padding: 10 })
        }
        if (data.educations.length > 0) {
            cell2.text('Education', {
                fontSize: 20,
                font: helveticaBold,
            })
            cell2.cell('', {
                padding: 4,
            })
            data.educations.forEach((education) => {
                cell2
                    .text('', {
                        fontSize: 18,
                        font: helveticaBold,
                    })
                    .add(
                        `${capitalize(education.course)} / ${capitalize(
                            education.institute
                        )}`
                    )
                cell2.text(`${education.year}`, { fontSize: 12 })
                cell2.cell('', {
                    padding: 5,
                })
                cell2
                    .text('', { fontSize: 12 })
                    .add('*')
                    .add(`${education.description}`)
            })
        }

        await doc.end()
    })()
    doc.pipe(fs.createWriteStream('output.pdf'))
}

pdfMaker(data)
