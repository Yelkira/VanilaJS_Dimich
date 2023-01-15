import React, {useState} from "react";


export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name:string }>
    adress: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }

}

function useDimState(m:string){
    return [ m, function (){}]
}
function useDimState2(m:string){
    return { message: m, setMessage:function (){}}
}


export const ManCompponent: React.FC<PropsType> = ({title,man,...props}) => {
    //const {title, man, ...restProps} = props

    const [massage, setMessage]=useState("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>{man.name}</div>
        <div>{props.food}</div>
    </div>
}