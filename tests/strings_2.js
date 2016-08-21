/*
* Check Permutation
*
* Given two strings, write a method to decide if one is a permutation of the other.
*
* */
"use strict";
var permutation = require('../Strings/permutation');
// Sol 1. Sort and compare
console.log(permutation.method1("melon", "lemon"));
// Sol 2. Check if both strings have the same character count
// Return false if string's length id different
// Get an array with 128 elements of 0 ~ [0,0,0,0,0...]
// Split the first array and increment the count of the position of the character in the array
// using its ASCII code
// Iterate over the other string subtracting 1 to the character corresponding position
// Return if any value of the array turns into a negative number
//noinspection SpellCheckingInspection
console.log(permutation.method2('mellon', 'llemon'));
//# sourceMappingURL=strings_2.js.map