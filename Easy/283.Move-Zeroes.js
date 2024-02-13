var moveZeroes = function(nums) {

    let lastZero = 0 
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] = nums[lastZero]
            nums[lastZero] = temp
            lastZero++
        }
    }

    return nums
}

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0,0,1])) // [1,0,0]
console.log(moveZeroes([0,0,0])) // [0,0,0]
