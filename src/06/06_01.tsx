import React, {ChangeEvent, MouseEvent} from "react";
/*
const callback = ():number=>{
    alert("hey")
    return 12
}
window.setTimeout(callback, 1000)
*/

export const User = ()=>{
    const deleteUser = (e:MouseEvent<HTMLButtonElement>)=> {
        alert(e.currentTarget.name)
    }
    const onNameChanged = ()=>{
        console.log("name ch")
    }
    const onBlurFocus = ()=>{
        console.log("name ch")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log("age changed: " + event.currentTarget.value)
    }
    return (
        <div><textarea onBlur={onBlurFocus} onChange={onNameChanged}>Dimych</textarea>
            <input onChange={onAgeChanged} type="number"/>
            <button name="delete" onClick={deleteUser}>delete</button>
        </div>
    )
}