const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should add a new intern if all arguments given', () => {
    const intern = new Intern('Dan', 1, 'dan@test.com', 'Adelaide');

    expect(intern.name).toEqual('Dan');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('dan@test.com');
    expect(intern.school).toEqual('Adelaide');
  });

  it('should throw an error if not provided a school', () => {
    const cb = () => new Intern('Dan', 1, 'dan@test.com');
    const err = new Error(
      "Expected parameter 'School' to be a non-empty string"
    );

    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'School' is not a string", () => {
    const cb = () => new Intern('Dan', 2, 'dan@test.com', 3);
    const err = new Error(
      "Expected parameter 'School' to be a non-empty string"
    );

    expect(cb).toThrowError(err);
  });
});
