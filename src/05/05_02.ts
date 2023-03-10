import {GovermentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovermentBuildingType>)=>{
    return buildings.map(b=>b.address.street.title)
}

export const getStreetsTitlesOfHouses= (houses: Array<HouseType>)=>{
return houses.map(h=>h.address.street.title)
}

export const createMessages= (houses: Array<HouseType>)=>{
return houses.map(h=>`Hello gyus from ${h.address.street.title}`)
}