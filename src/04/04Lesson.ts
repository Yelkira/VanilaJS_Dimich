const ages = [18,20,22,1,100,90,14]

const predicate = (age:number)=>{
    return age > 90
}

const aldAges = [100]

const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
]
type CourseType ={
    title:string
    price:number
}
const cheapePredicate = (course:CourseType)=>{
    return course.price < 160
}
const chipCourses =[
    {title: "css", price: 110},
    {title: "react", price: 150}

]