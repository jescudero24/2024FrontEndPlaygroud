// map

let numbers = [6, 42, 4, 81, 56, 33];

console.log(numbers);
console.log('****************map**************************')
let doubleNumbers = numbers.map( number => number * 2 );
let plusTwoNumbers = numbers.map( number => number + 2);
let team = [
    {
        name: 'Lydia',
        age: 20
    },
    {
        name: 'Peter',
        age: 23
    }
]
team.map(teamMember => teamMember.age += 10)


console.log(doubleNumbers);
console.log(plusTwoNumbers);
numbers.map(()=>console.log('Hey!'));
console.log(team);


// filter
console.log('****************filter************************')

let filteredNumbers = numbers.filter( number => (number>18 && number >50));


console.log(filteredNumbers);

console.log('****************reduce************************')

// acc= accumulator , cur = current value

let reducedValuePlus = numbers.reduce((acc,cur) => acc+cur );
let reducedValueMinus = numbers.reduce((acc,cur) => acc-cur );
let reducedValuePow = numbers.reduce((acc,cur) => acc*cur );

console.log(reducedValuePlus);
console.log(reducedValueMinus);
console.log(reducedValuePow);