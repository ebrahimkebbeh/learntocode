let str = `{
    "title"" : "web designer",
    "startDate" : "october 2022",
    "company" : "AT&t",
    "minSalary" : 52000,
    "maxSalary" : 86000
}`;

let job = JSON.parse(str);

console.log(job.title)