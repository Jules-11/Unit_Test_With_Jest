const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('One euro should be 1.2 dollars', () => {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(5);
    expect(dollars).toBe(6);
});

test ('One dollar should be 106.58 yens', () => {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    expect(yens).toBe(532.90);
});

test('One yen should be 0.006 pound', () => {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(500);
    expect(pounds).toBe(3);
});



// test("One euro should be 1.206 dollars", function(){
//     //import the function from app.js
//     const { fromEuroToDollar } = require('./app.js')
//     // use the function like its suppoed to be used
//     // const dollars = fromEuroToDollar(3.5)
//     // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
//     const expected = 3.5 * 1.2; 
//     // this is the comparison for the unit test
//      expect(fromEuroToDollar(3.5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
// })                           

