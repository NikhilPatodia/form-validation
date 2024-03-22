//Output: {4: {1: "Meet"}, 5: {2: "Rohan"}, 6: {3: "Mohan"}}

let initial = {"A":[1, 2, 3], "B": ["Meet", "Rohan", "Mohan"], "C":[4, 5, 6]}


let info = [initial]

for(let i in info){
    console.log(info[i])
}