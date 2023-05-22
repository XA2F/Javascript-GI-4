//easy
//write a function that takes in an array of numbers and outputs the average of all the numbers.
function calcAvg(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
var average = calcAvg(numbers);
console.log(average);

//Medium
//suppose an array sorted in ascending order is rotaled at some pivot unknown to you beforehand

function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

let result = search(nums, target);
console.log(result);

//medium

function red() {
  document.bgColor = "red";
}

function white() {
  document.bgColor = "white";
}
