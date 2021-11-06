let timeStart = document.querySelector('.timeStart');
let timeEnd = document.querySelector('.timeEnd');
let name0 = document.querySelector('.name0');
let audience = document.querySelector('.audience');
let lessonType = document.querySelector('.lessonType') ;
let teacher = document.querySelector('.teacher');

let timeStart1 = document.querySelector('.timeStart1');
let timeEnd1 = document.querySelector('.timeEnd1');
let name1 = document.querySelector('.name1');
let audience1 = document.querySelector('.audience1');
let lessonType1 = document.querySelector('.lessonType1') ;
let teacher1 = document.querySelector('.teacher1');

let timeStart2 = document.querySelector('.timeStart2');
let timeEnd2 = document.querySelector('.timeEnd2');
let name2 = document.querySelector('.name2');
let audience2 = document.querySelector('.audience2');
let lessonType2 = document.querySelector('.lessonType2') ;
let teacher2 = document.querySelector('.teacher2');

let timeStart3 = document.querySelector('.timeStart3');
let timeEnd3 = document.querySelector('.timeEnd3');
let name3 = document.querySelector('.name3');
let audience3 = document.querySelector('.audience3');
let lessonType3 = document.querySelector('.lessonType3') ;
let teacher3 = document.querySelector('.teacher3');

let timeStart4 = document.querySelector('.timeStart4');
let timeEnd4 = document.querySelector('.timeEnd4');
let name4 = document.querySelector('.name4');
let audience4 = document.querySelector('.audience4');
let lessonType4 = document.querySelector('.lessonType4') ;
let teacher4 = document.querySelector('.teacher4');

async function getResponse() {
    let response = await fetch('https://journal.bsuir.by/api/v1/studentGroup/schedule?studentGroup=840301');
    let content = await response.json();

    for (let i = 0; i < 1; i++) {
        if( content.todaySchedules[i].numSubgroup !== 2) {
            timeStart.innerHTML =  content.todaySchedules[i].startLessonTime;
            timeEnd.innerHTML =  content.todaySchedules[i].endLessonTime;
            name0.innerHTML =  content.todaySchedules[i].subject;
            lessonType.innerHTML = `(${  content.todaySchedules[i].lessonType})`;
            audience.innerHTML =  content.todaySchedules[i].auditory;
            teacher.innerHTML = content.todaySchedules[i].employee[0].lastName;
        }
    }
    for (let i = 1; i < 2; i++) {
        if( content.todaySchedules[i].numSubgroup !== 2) {
            timeStart1.innerHTML =  content.todaySchedules[i].startLessonTime;
            timeEnd1.innerHTML =  content.todaySchedules[i].endLessonTime;
            name1.innerHTML =  content.todaySchedules[i].subject;
            lessonType1.innerHTML = `(${  content.todaySchedules[i].lessonType})`;
            audience1.innerHTML =  content.todaySchedules[i].auditory;
            teacher1.innerHTML = content.todaySchedules[i].employee[0].lastName;
        }
    }
    for (let i = 2; i < 3; i++) {
        if( content.todaySchedules[i].numSubgroup !== 2) {
            timeStart2.innerHTML =  content.todaySchedules[i].startLessonTime;
            timeEnd2.innerHTML =  content.todaySchedules[i].endLessonTime;
            name2.innerHTML =  content.todaySchedules[i].subject;
            lessonType2.innerHTML = `(${  content.todaySchedules[i].lessonType})`;
            audience2.innerHTML =  content.todaySchedules[i].auditory;
            teacher2.innerHTML = content.todaySchedules[i].employee[0].lastName;
        }
    }
    for (let i = 3; i < 4; i++) {
        if( content.todaySchedules[i].numSubgroup !== 2) {
            timeStart3.innerHTML =  content.todaySchedules[i].startLessonTime;
            timeEnd3.innerHTML =  content.todaySchedules[i].endLessonTime;
            name3.innerHTML =  content.todaySchedules[i].subject;
            lessonType3.innerHTML = `(${  content.todaySchedules[i].lessonType})`;
            audience3.innerHTML =  content.todaySchedules[i].auditory;
            teacher3.innerHTML = content.todaySchedules[i].employee[0].lastName;
        }
    }
    for (let i = 4; i < 5; i++) {
        if( content.todaySchedules[i].numSubgroup !== 2) {
            timeStart4.innerHTML =  content.todaySchedules[i].startLessonTime;
            timeEnd4.innerHTML =  content.todaySchedules[i].endLessonTime;
            name4.innerHTML =  content.todaySchedules[i].subject;
            lessonType4.innerHTML = `(${  content.todaySchedules[i].lessonType})`;
            audience4.innerHTML =  content.todaySchedules[i].auditory;
            teacher4.innerHTML = content.todaySchedules[i].employee[0].lastName;
        }
    }
}


getResponse();