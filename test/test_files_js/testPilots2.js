let employees = require('../pilots2.js');
let assert = require('assert');

describe('Pilots Employees',function(){
	describe('human resources',function(){
		it('should find a pilot if they are on the list', function() {
			assert.equal(true, employees.hasPilotNamed("Lintra"));
		});
		it('should fail to find a pilot if they are not on the list', function() {
			assert.equal(false, employees.hasPilotNamed("Paul"));
		});
	});
});
