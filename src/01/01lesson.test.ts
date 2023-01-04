import {mult, splitIntoWords, sum} from "./01lesson";

test("sum should be correct", ()=>{
    //data
    let a = 1
    let b = 2
    let c = 3
    //action
    const result1 = sum(a,b)
    const result2= sum(b,c)
    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test("multiply should be correct", ()=>{
    //data
    let a = 1
    let b = 2
    let c = 3
    //action
    const result1 = mult(a,b)
    const result2= mult(b,c)
    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test ("spliting into words should be correct", ()=>{
    //data
    const sen1 = "Hello my friend!"
    const sen2 = "JS - the best   programming language."
    //action
    const result1=splitIntoWords(sen1)
    const result2=splitIntoWords(sen2)
    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")
})