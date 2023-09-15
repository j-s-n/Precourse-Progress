// Adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
const addTwo = (number) => {
	return number +2;
}

// Adds the two inputted numbers together
// ex: add(5, 10); -> 15
const add = (num1, num2) => {
	return num1 + num2;
}

// Multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
const multiplyByTwo = (numero) => {
	return numero * 2;
}


// Multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
const multiply = (val1, val2) => {
	return val1 * val2;
}

// Returns the square of the inputted number
// ex: square(5); -> 25
const square = (value) => {
	return value * value;
}

// Determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
const isOdd = (num) => {
	if(num % 2 === 1) return true;
	else {return false};
}


// Determines if the number is negative
// Outputs true if the number is negative
// Outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
const isNegative = (num) => {
	if(num < 0) return true;
	else {return false};
}


// Returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
const positive = (num) => {
	if(num < 0) {return num * -1}
	else {return num};
}

// Returns boolean of whether argument is classified as a Number object
// ex: isNumber(5); → true
// ex: isNumber('hi'); → false
const isNumber = (value) => {
	return typeof value === 'number';
}

// Returns boolean of whether argument is classified as an Array object
// ex: isArray(5); → false
// ex: isArray([1,2,3]); → true
const isArray = (value) => {
	return Array.isArray(value);
}

// Returns boolean of whether argument is classified as an Object
// ex: isObject(5); → false
// ex: isObject([1,2,3]); → true
const isObject = (value) => {
	return typeof value === 'object' && value !== null;
}

// Return boolean of whether argument is classified as null
// ex: isNull(null); -> true
// ex: isNull(5); -> false
const isNull = (value) => {
	return value === null;
}


///////////////INTERMEDIATE CHALLENGES///////////////

// This function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
const returnOdds = (array) => {
	  //create a string array
	  const string = [];
	  //iterate through array
	  array.forEach((el) => {
		//push current element if odd to string
		if(el % 2 === 1) {string.push(el)};
	  })
	  //return string
	  return string;
}


// This function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
const returnEvens = (array) => {
    //create a string array
    const string = [];
    //iterate through array
    array.forEach((el) => {
      //push current element if even to string
      if(el % 2 === 0) {string.push(el)};
    })
    //return string
    return string;
}


// Returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
const findMax = (array) => {
  //use the reduce method on the array with a -Infinity accumulator
  return array.reduce((acc, curr) => {
    //if current is greater than acc, reassign acc to current
    if(curr > acc) {acc = curr};
    //return acc
    return acc;
  }, -Infinity)
}


//  remove leading and trailing whitespace or specified characters from string
//  ex: trim(' hello '); -> 'hello'

const trim = (string) => {
  //create a string string
  if(string[0] !== ' ' && string[string.length - 1] !== ' ') {return string;}
  if(string[0] === ' ') {
	string = string.slice(1);
  }
  if(string[string.length - 1] === ' ') {
	string = string.slice(0, string.length - 1)
  }
	return trim(string);
}

// Returns an empty array object. This object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
const createArray = () => {
  // initliize empty array constant
	const arr = [];
    //push method assigns the paramet to the next index
    arr.push = function(val) {arr[arr.length] = val};
    //pop method assigns the paramet to the next index
    obj.pop = function() {
      //assign last value of object to popValue const
      const popValue = obj[Object.values(obj).length];
      //delete the last property
      delete obj[Object.values(obj).length];
      //return popValue
      return popValue;
    };
    //unshift method takes a value
    obj.unshift = function(val) {
      //iterate through the obj and increment all keys
      for(let key in obj) {
        obj[key++];
      }
      //assign obj with 0 key to value
      obj[0] = val;
    };
    //shift method takes a value
    obj.shift = function() {
      const shiftValue = obj[0];
      //delete first property
      delete obj[0];
      //iterate through the obj and decrecrement all keys
      for(let key in obj) {
        obj[key--]
      }
      //return shiftValue
      return shiftValue;
    };
	return arr;
};


///////////////ADVANCED CHALLENGES///////////////

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
const forEach = (array, callback) => {
  // iterate through the array using a for loop
  for(let i = 0; i < array.length; i++) {
    //return eval result of element, i and array
    console.log(callback(array[i], i, array));
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
	//create a results array
	const results = [];
	//iterate through the array using forEach
	array.forEach((el, i, arr) => {
	  //push the eval result of the cb passing in the element, i, and array 
	  results.push(callback(el, i, arr));
	})
	//return results
	return results;
  }

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
	//create a results array
	const results = [];
	//iterate through the collection using forEach
	collection.forEach((el, i, arr) => {
	  //if the eval result of the cb passing in the element, i, and array is true, push the element to results 
	  if(callback(el, i, arr)) {results.push(el)};;
	})
	//return results
	return results;
  }

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
	//check to see if collection is array and assign results array
	//if(Array.isArray(collection)) {let results = []};
	let results = [];
	if(!Array.isArray(collection)) {results = {}};
	//iterate through the collection using forEach
	collection.forEach((el, i, arr) => {
	  //if the eval result of the cb passing in the element, i, and array is true, push the element to results 
	  if(!callback(el, i, arr)) {results.push(el)};;
	})
	//return results
	return results;
  }

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	//create a results array
	const results = [];
	//iterate through array
	array.forEach((el) => {
	  //if results doesn't includes current element, push element to array
	  if(!results.includes(el)) {results.push(el)};
	})
	//return results;
	return results;
  }

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	//iterate through array 
	for(let i =0; i < array.length; i++) {
	  //if current el is value, return index
	  if(array[i] === value) {return i};
	}
	//return -1
	return -1;
  }


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
const once = (func) => {
	//declare a ran boolean variable initialized to false and a result variable
	let ran = false;
	let result = null;
	//return function accepting any args
	return (...args) => {
		//if ran is true, return result
		if(ran) {return result}
		//else reassign ran to true
		ran = true;
		//reassing result to eval res of func and return
		result = func(...args);
		return result;
	}
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
const reduce = (array, callback, start) => {
	//initialize accumulator and current value to 0
	//if there is a start value, reassign current to start
	if(start !==  undefined) {acc = start}
	//else use first element and reassign array as the sliced version from index 1 of the array 
	else{
		acc = array[0];
		array = array.slice(1);
	}
	//iterate through the array 
	array.forEach((curr) => {
		//reassign accumulator to eval result of passing in current element and accumulator
		acc = callback(acc, curr);
	})
	//return accumulator
	return acc;
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
const every = (array, func) => {
	//iterate through the array
	for(let i = 1; i < array.length; i++) {
		//if function passing in current element is false return false, else return true
		if(!func(array[i])) {return false}
		return true;
	}
}

// Flattens a nested array.
// ex: flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
const flatten = (array) => {
	//create a results array

	//iterate through paramter,

		//if current element is not an arry, push to results

	//else, return flatten pasing in current element

	//return results;

}

// Recursively flattens a nested array.
// ex: flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
const flattenDeep = (array) => {
	//CODE HERE

}

// Create a shallow copy of an object
// const obj1 = {a:1, b: {c: 3}};
// const obj2 = copyShallow(obj1);
// obj2 → {a:1, b: {c: 3}};
// obj1 === obj2; → false
// obj1.b === obj2.b → true
const copyShallow = (obj) => {
	//CODE HERE

}

// Create a deep copy of an object
// const obj1 = {a:1, b: {c: 3}};
// const obj2 = copyShallow(obj1);
// obj2 → {a:1, b: {c: 3}};
// obj1 === obj2; → false
// obj1.b === obj2.b → false
const copyDeep = (obj) => {
	//CODE HERE

}
