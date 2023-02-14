const {shuffleArray} = require('./utils')
const testArray = ["kik", "lol", "meep", "bop"]

describe('shuffleArray should return an array when called', () => {
    test("should return instance of array", () => {
        var result = shuffleArray(testArray)
        expect(result).toBeInstanceOf(Array)
    })
    test("should reutrn array that's the same length", () => {
        var result = shuffleArray(testArray)
        expect(result.length).toEqual(testArray.length)
    })
})

