// Engineer constructor 
const Engineer = rewuire('../lib/Engineer');

// Creating engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 90, 'michaelwelsh356@gmail.com', 'mwelsh356');

    expect(engineer.github).toEqual(expect.any(String));
});

// Tests to see if it can get github
test('gets github username', () => {
    const engineer = new Engineer('Mike', 90, 'michaelwelsh356@gmail.com', 'mwelsh356');

    expect(engineer.getGithub()).toEqual(expect.stringContainer(engineer.github.toString()));
});

// Tests to see if it can get the role
test('gets role of employee', () => {
    const engineer = new Engineer('Mike', 90, 'michaelwelsh356@gmail.com', 'mwelsh356');

    expect(engineer.getRole()).toEqual('Engineer');
});