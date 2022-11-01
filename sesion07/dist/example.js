"use strict";

const compact = array => array.filter(element => !!element);
const originalArray = [0, 1, false, 2, '', 3];
const compactedArray = compact(originalArray);
console.log("\nHere is the original array: ".concat(originalArray, "\nAnd here is the compacted array: ").concat(compactedArray, "\n"));