let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

    function courseStart(id){
        for(a=0;a<courses.length;a++){
        let course = courses[a];
        if(course.CourseId == id){
            return course;
        }
    }
    }
    function coursesdeal(deal){
        let matches = []
        for(a=0;a<courses.length;a++){
            let course = courses[a];
            if(Number(course.fee) <= deal){
                matches.push(course)
            }
        }
        return matches;
    }
    function coursesarea(area){
        let matches = []
        for(a=0;a<course.length;a++){
            let course = course[a];
            if(course.area === area ){
                matches.push(course);
            }
        }
        return matches;
    }
    function printCourse(course){
        console.log(`
            CourseId: "${course.CourseId}",
            Title: "${course.Title}",
            Location: "${course.Location}",
            StartDate: "${course.StartDate}",
            Fee: "${course.Fee}"
        `)
    }
    function printCourseListTitles(courseList){
        for(let i=0;i<courseList.length;i++){
            console.log(courseList[i].Title);
        }
    }
    function printCourseList(courseList){
        for(let i=0;i<courseList.length;i++){
            printCourse(courseList[i]);
        }
    }
    console.log("When does the PROG200 course start?");
    console.log(courseStart("PROG200").StartDate)
    
    console.log("What is the title of the PROJ500 course?");
    console.log(courseStart("PROG200").Title)
    
    console.log("What are the titles of the courses that cost $50 or less?");
    printCourseListTitles(coursesdeal(50))
    
    console.log("What classes meet in \"Classroom 1\"?");
    printCourseList(coursesdeal("Classroom 1"))
