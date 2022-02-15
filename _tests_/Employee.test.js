const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('Should create an object with name, id and email if given valid arguments', () => {
      const employee = new Employee('Dan', 1, 'dan@test.com');

      expect(employee.name).toEqual('Dan');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('dan@test.com');
    });
  });
});
