"use strict";

var employees = require('./employee_data').employees;
var _ = require('lodash');

var currentID = 8;
var _clone = function(item) {
	//console.log(item);
	//console.log(JSON.stringify(item));

	return JSON.parse(JSON.stringify(item));

};

module.exports = {
	getEmployees: function(callback) {
		callback(null, _clone(employees));
	},
  	getEmployeeById: function(id, callback) {
		var employee = _.find(employees, {id: parseInt(id)});
		callback (null, _clone(employee));
  	},
  	updateEmployeeById: function(id, employee, callback) {
			var existingEmployeeIndex = _.indexOf(employees, _.find(employees, {id: parseInt(id)}));
			employee.id = parseInt(id);
			employees.splice(existingEmployeeIndex, 1, employee);
			callback (null);
  	},
  	saveEmployee: function(employee, callback) {
		currentID = currentID + 1;
    	employee.id = currentID;
    	employees.push(employee);
		callback(null, _clone(comment));
	},
	deleteEmployeeById: function(id, callback) {
		_.remove(comments, { id: parseInt(id)});
    callback(null);
	}
};

