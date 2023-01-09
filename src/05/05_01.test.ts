import {createGreetingMessage, ManType} from "./05_01";

let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

beforeEach(()=>{
    let people= [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ];
})

test("should get array of greeting messages", ()=>{
    let messages =createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to HELL!")
    expect(messages[1]).toBe("Hello Alexander. Welcome to HELL!")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to HELL!")
})