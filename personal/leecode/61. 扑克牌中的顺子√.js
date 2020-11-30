var isStraight = function(nums) {
    nums = nums.sort((a,b) => a - b);
    let lastZeroIndex = nums.lastIndexOf(0)
    let notZero = nums.slice(lastZeroIndex+1);
    let noRepeat =Array.from( new Set(notZero));
    if(notZero.length>noRepeat.length) return false;
    if(nums[4]-nums[lastZeroIndex+1]<5)
        return true
    return false
};

console.log(isStraight([0,2,3,4,6]))