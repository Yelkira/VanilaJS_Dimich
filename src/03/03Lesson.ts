import {student, StudentType} from "../02/02lesson";
import {CityType, GovermentBuildingType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const addSkill2 = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.adress.city.title === cityName
}

export const addMoneyToBudget = (building: GovermentBuildingType, budget: number) => {
    building.budget += budget

}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}
export const toFireStaff = (Building: GovermentBuildingType, staffCountToFire: number) => {
    Building.staffCount -= staffCountToFire
}
export const toHireStaff = (Building: GovermentBuildingType, staffCountToFire: number) => {
    Building.staffCount += staffCountToFire
}
export function createMessage(props: CityType){
    return `Hello ${props.title} citizen. I want you be happy. All ${props.citizenNumber} men`
}