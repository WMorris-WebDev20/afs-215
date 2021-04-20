const fizzbuzzkata = (number) =>{

    let result = number === 1 ? '1': number === 2 ? '2': 
                 number == 3 ? 'Fizz' : number === 5 ? 'Buzz' : 
                 number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz' : 
                 number % 3 === 0 ? 'Fizz' :
                 number % 5 === 0 ? 'Buzz' : null

    return result
}

module.exports = fizzbuzzkata