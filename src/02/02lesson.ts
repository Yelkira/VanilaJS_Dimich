
type LocalCityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechnologiesType>
}
type TechnologiesType = {
    id: number
    title: string
}


export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    adress: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Balarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 1, title: "CSS"},
        {id: 1, title: "React"}
    ]
}

console.log(student.age)
console.log(student.adress.city.title)
console.log(student.technologies[2].title)