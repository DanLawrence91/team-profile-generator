const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('Should create an object with name, id and email if given valid arguments', () => {
      const employee = new Employee('Dan', 1, 'dan@test.com');

      expect(employee.name).toEqual('Dan');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('dan@test.com');
    });

    it('should throw an error if provided no arguments', () => {
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameters 'Name', 'ID', and 'Email' are needed"
      );
      expect(cb).toThrowError(err);
    });

    it('should throw an error if not provided an ID or email', () => {
      const cb = () => new Employee('Sarah');
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number and 'Email' to be an email address"
      );
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2, 'dan@test.com');
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee('Dan', 2, 4);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is not a number", () => {
      const cb = () => new Employee('Dan', '2', 'dan@test.com');
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is less than 0", () => {
      const cb = () => new Employee('Dan', -1, 'dan@test.com');
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should be a proper email address in 'email", () => {
      const employee = new Employee('Dan', 1, 'dan@test.com');
      expect(employee.email).toContain('@');
    });
  });
});
