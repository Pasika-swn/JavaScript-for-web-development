new Date("1/4/2024")
//ได้ dateOBJ คืนมา
//output: Thu Jan 04 2024 00:00:00 GMT+0700 (Indochina Time)

//ex2
const currentDate = new Date("4/1/2024")
console.log("currentDate.getDate(), ",currentDate.getDate())
console.log("currentDate.getMonth() + 1, ",currentDate.getMonth() +1)
console.log("currentDate.getTime(), ",currentDate.getTime())
// //output:
// currentDate.getDate(),  1
// currentDate.getMonth() + 1,  4
// currentDate.getTime(),  1711904400000 ==> using this num to sort()

//ascending Date
const dataData = ["4/1/2024", "3/1/2024", "5/1/2024"]
dataData.sort(function(aDate, bDate) {
    return new Date(aDate) - new Date(bDate) //['3/1/2024', '4/1/2024', '5/1/2024']
})


//descending Date
const dataData = ["4/1/2024", "3/1/2024", "5/1/2024"]
dataData.sort(function(aDate, bDate) {
    return new Date(bDate) - new Date(aDate) //['5/1/2024', '4/1/2024', '3/1/2024']
})