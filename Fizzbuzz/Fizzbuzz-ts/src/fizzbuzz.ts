export const fizzBuzz = (entry: number): number|"Fizz"|"Buzz"|"FizzBuzz" => {
    if (entry % 3 === 0 && entry % 5 === 0) {
        return "FizzBuzz"
    }

    if (entry % 3 === 0) {
        return "Fizz"
    }

    if (entry % 5 === 0) {
        return "Buzz";
    }
    
    return entry;
}