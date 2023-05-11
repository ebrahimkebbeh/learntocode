let student =[
    {name: "zephaniah", scores: [100, 96, 99, 92]},
    {name: "pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "siddalee", scores: [98, 84, 89, 100, 100, 76]},
    {name: "ian", scores: [98, 84, 89, 1000, 100, 76]},
    {name: "elisha", scores: [89, 100]},
    {bane: "ezra", scores: [100, 99, 100, 87]}
]

for(a=0;a<student.length;a++){
    s = student[a]

    let total = 0
    for(a2=0;a2<s.scores.length; a2++){
        total += s.scores[a2];
    
    }
    const average = total / s.scores.length
    console.log("NAME:", s.name, "AVERAGE:" , average.toFixed(2))
}