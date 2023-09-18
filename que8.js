// Let's say you are working for an event management company. As a web developer, you need to
// build a countdown timer for an upcoming event. You need to build a function that calculates
// the number of days between the current date and the event's start date.

function calculateRemainingDays(eventDate){
const eventScheduleDate= new Date(eventDate);
const currentDate= new Date();
// console.log(eventDate)
// console.log(currentDate)
const timeDifference=eventScheduleDate-currentDate;
// console.log(timeDifference)
const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));