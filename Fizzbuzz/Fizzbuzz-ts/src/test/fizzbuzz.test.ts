import { fizzBuzz } from "../fizzbuzz";

describe('Fizz Buzz', () => {
    it('returns the number', () => {
        expect(fizzBuzz(1)).toEqual(1);
    })

    it('returns fizz if it is divizible by 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
    })

    it('returns buzz if it is divisible by 5', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })
    
    it('returns FizzBuzz if it is divisible by 3 and by 5', () => {
        expect(fizzBuzz(15)).toEqual<number | "Fizz" | "Buzz" | "FizzBuzz">("FizzBuzz");
    })
})