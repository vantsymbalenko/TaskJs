/* first task with create object*/
var user={};
user.name="Вася";
console.log(user.name);
user.surname="Петров";
console.log(user.surname);
user.name="Сергей";
console.log(user.name);
delete user.name;
console.log(user.name);

/*Object property seach*/

function isEmpty (obj) {
	var counter=0;
	for (var key  in obj) {
		counter++;
	}
	if(counter==0){
		return true;
	}
	return false;
}
var schedule = {};
// alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
// alert( isEmpty(schedule) ); // false

/*summ of property in object*/
"use strict";
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var salaries2={};

function summSalaries (obj) {
 	var summ=0;
 	for (var key in obj) {
 		summ+=obj[key];
 	}
 	return summ;
}
// alert(summSalaries(salaries2));


/* function which alert name of worker which have the bigest salaries */
function theBiggestSalaries (salaries) {
	var lucky="Нет сотрудников";
	var salarie=0;
	for (var name in salaries) {
		if(salaries[name]>salarie){
			lucky=name;
			salarie=salaries[name];
		}
	}
	return lucky;
}

// alert(theBiggestSalaries(salaries2));

/*function which multiply numeric properties in object*/
function multiplyNumeric (obj) {
	for (var key in obj) {
		if(isNumeric(obj[key])){
			obj[key]*=2;
		}
	}
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);

