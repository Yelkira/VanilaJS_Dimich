export const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

export type UsersType = {
    [key:string]: {id:number, name:string}
}

export const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "323312": {id: 323312, name: "Natasha"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"}
}

//users[1]
var user = {id:100500, name:"Igor"}
users[user.id] = user
delete users[user.id]
users[user.id].name = "Vitya"

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 323312, name: "Natasha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"}
]
//usersArray.findIndex()
//usersArray.find(u=>u.id===1)
//var usersCopy = [...usersArray.filter(), user]
//var users = usersArray.filter(u=>u.id !== user.id)