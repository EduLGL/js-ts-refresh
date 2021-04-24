import * as _ from 'lodash';

interface User {
    name: string;
    lastName:string;
    age:number;
    status: boolean;
}

const user : User = {
    name : 'Eduardo',
    lastName : 'Garcia',
    age : 30,
    status: true,
};

console.log('User :::',user);


const fullName = _.concat(user.name,user.lastName);
console.log('User :::',fullName);
console.log('date :::',_.now());