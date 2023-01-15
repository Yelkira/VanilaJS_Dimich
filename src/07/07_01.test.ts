import {ManType} from "./07_01";


let props: ManType;


beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1",name:"pip"}, {title: "2", name:"pup"}, {title: "3", name:"pop"}],
        adress: {
            street: {
                title: "Nezav street"
            }
        }
    }
})

test("", () => {
    /*    const age = props.age;
        const lessons = props.lessons;*/

    const {age, lessons} = props
    const {title} = props.adress.street

    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(l.length).toBe(3)

    expect(title).toBe("Nezav street")
})

test("priv", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...rest] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")


    expect(ls1.title).toBe("1")
    expect(rest.length).toBe(2)
    expect(rest[0].title).toBe("2")
    expect(rest[1].name).toBe("pop")
    expect(rest[1]).toStrictEqual({title: "3", name:"pop"})

})

