//case1
let nums = [7,8,9,12,4]
nums.sort() //output:  [12, 4, 7, 8, 9]




//case2 ascending น้อย-> มาก
let nums = [7,8,9,12,4]
nums.sort(function(a, b) {
    return a-b  //output: [4, 7, 8, 9, 12]
})

//case3 descending
let nums = [7,8,9,12,4]
nums.sort(function(a, b) {
    return b-a  //output: [12, 9, 8, 7, 4]
})