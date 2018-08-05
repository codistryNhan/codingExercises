/*
  Given an array nums,
  write a function to move all 0's to the end of it
  while maintaining the relative order of the non-zero elements.

  Sample,
  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
*/
/*

*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var moveZeroes = function(nums) {
  let length = nums.length;
  let index = 0;

  while(index < length) {
      if(nums[index] === 0) {
          nums.splice(index, 1);
          nums.splice(nums.length,0,0);
          length--;
      } else {
          index++;
      }
  }

};
