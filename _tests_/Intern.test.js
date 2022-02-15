const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should throw an error if not provided a school', () => {
    const cb = () => new Intern('Dan', 1, 'dan@test.com');
    const err = new Error(
      "Expected parameter 'School' to be a non-empty string"
    );

    expect(cb).toThrowError(err);
  });
});
