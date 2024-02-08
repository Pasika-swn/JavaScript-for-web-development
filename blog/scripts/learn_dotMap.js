// ex1
let data = ['mike', 'skooldio', 'bootcamp']
for (let i = 0; i<data.length; i++) {
    console.log(data[i])
}

// want to add tag (inefficient way)
for (let i = 0; i<data.length; i++) {
    console.log('<b>' + data[i] + '</b>')
}


// *** using .map
data.map(function(ele) {
    // console.log(ele)
    return '<b>' + ele + '</b>'
})


//create var and calling fn
let newDataHTML = data.map(function(ele) {
    return '<b>' + ele + '</b>' 
})
//print out to show in console
newDataHTML



//great way (abbre)
let data2 = ['mike', 'skooldio', 'bootcamp']

let newDataHTML2 = data2.map(d => `<b>${d}</b>`) //so cooooool
newDataHTML2
