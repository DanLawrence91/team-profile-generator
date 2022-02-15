const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('should create a new manager if all arguments given', () => {
    const manager = new Manager('Dan', 1, 'dan@test.com', 1);

    expect(manager.name).toEqual('Dan');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('dan@test.com');
    expect(manager.officeNumber).toEqual(1);
  });

  it('should throw an error if "office number" is not a number', () => {
    const cb = () => new Manager('Dan', 1, 'dan@test.com', 'hi');
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );

    expect(cb).toThrowError(err);
  });

  it('should throw an error if "office number" is a negative number', () => {
    const cb = () => new Manager('Dan', 1, 'dan@test.com', -2);
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );

    expect(cb).toThrowError(err);
  });
});
