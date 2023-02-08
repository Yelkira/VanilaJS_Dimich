export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type UserWithCompaniesType =  {
    companies: Array<{ id:number,title:string }>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city: city},
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house: house},
    }
}


export function updateUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: title},
    }
    /*
        copy.address = {...u.address, city: city}
    */
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {
        ...u,
        books: [...u.books.concat(books)]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBoook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBoook ? newBook : b)
})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, removedBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== removedBook)
})
