// Using engineer constructor 
const Engineer = rewuire('../lib/Engineer');

// Creating engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 90, 'michaelwelsh356@gmail.com', 'mwelsh356');

    expect(engineer.github).toEqual(expect)
})