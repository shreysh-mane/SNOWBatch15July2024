// Index starts from 0
var array1 = [1, 2, 3, {name: "Shreysh", city: "Pune"}, "HI"];

// Accessing elements in the array
// To access the 'name' property of the object at index 3
console.log(array1[3].name); // Output: Shreysh
// To access the first element of the array
console.log(array1[0]); // Output: 1

// Modify array elements
// Changing the first element of the array to 4
array1[0] = 4;
console.log(array1); // Output: [4, 2, 3, {name: "Shreysh", city: "Pune"}, "HI"]

// Add an element to an array
// 1. Using push() to add an element at the end of the array
array1.push(10);
console.log(array1); // Output: [4, 2, 3, {name: "Shreysh", city: "Pune"}, "HI", 10]

// 2. Using unshift() to add an element at the beginning of the array
array1.unshift(40);
console.log(array1); // Output: [40, 4, 2, 3, {name: "Shreysh", city: "Pune"}, "HI", 10]

// Remove an element from an array
// 1. Using pop() to remove the last element of the array
array1.pop();
console.log(array1); // Output: [40, 4, 2, 3, {name: "Shreysh", city: "Pune"}, "HI"]

// 2. Using shift() to remove the first element of the array
array1.shift();
console.log(array1); // Output: [4, 2, 3, {name: "Shreysh", city: "Pune"}, "HI"]

// Remove elements from a particular index
// Using splice() to remove 2 elements starting from index 2
array1.splice(2, 2);
console.log(array1); // Output: [4, 2, "HI"]

// Add elements at a particular index
// Using splice() to add elements at index 2
array1.splice(2, 1, 1, 2);
console.log(array1); // Output: [4, 2, 1, 2]

// Finding the index of an element
// Using indexOf() to find the index of element 20 (which is not in the array)
var index = array1.indexOf(20);
console.log(index); // Output: -1

// Iterating over the array elements
// Using a for loop to print each element in the array
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
// Output: 4
//         2
//         1
//         2
