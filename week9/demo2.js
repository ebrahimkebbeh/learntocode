let job = {
    title : "web designer",
    startDate : "october 2022",
    company : "AT&t",
    minSalary : 52000,
    maxSalary : 86000
};

let filter = ["title", "company"]
let str = JSON.stringify(job, filter);

console.log(str)