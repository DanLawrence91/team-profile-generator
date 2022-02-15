const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should add a new engineer if all arguments given', () => {
    const engineer = new Engineer('Dan', 1, 'dan@test.com', 'DanLawrence91');

    expect(engineer.name).toEqual('Dan');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('dan@test.com');
    expect(engineer.github).toEqual('DanLawrence91');
  });

  it('should throw an error if not provided a github account', () => {
    const cb = () => new Engineer('Dan', 1, 'dan@test.com');
    const err = new Error(
      "Expected parameter 'github' to be a non-empty string"
    );

    expect(cb).toThrowError(err);
  });

  it("should throw an error if 'github' is not a string", () => {
    const cb = () => new Engineer('Dan', 2, 'dan@test.com', 3);
    const err = new Error(
      "Expected parameter 'github' to be a non-empty string"
    );

    expect(cb).toThrowError(err);
  });
});
