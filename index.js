"use strict";
exports.__esModule = true;
var _ = require("lodash");
var user = {
    name: 'Eduardo',
    lastName: 'Garcia',
    age: 30,
    status: true
};
console.log('User :::', user);
var fullName = _.concat(user.name, user.lastName);
console.log('User :::', fullName);
console.log('date :::', _.now());
