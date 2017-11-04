var responses = [
  'This is the best job ever!',
  'Satisfied.',
  'At least I get paid.',
  "I'm looking for another job.",
  "I don't want to answer.",
];

function randomSurvey() {
  return Math.floor(Math.random() * responses.length);
}
//console.log(randomSurvey());



function tenRandom() {
  newArray = [];
  for (var i = 0; i < 10; i++) {
    newArray.push(responses[randomSurvey()]);
  }
  return newArray;
}

//5 department survey answer arrays.
function employeeSatisfaction() {
  surveyDepartments = [];
  for (var i = 0; i < 5; i++) {
    //console.log(i);
    surveyDepartments.push(tenRandom);
    surveyDepartments[i] = tenRandom();

  }
  return surveyDepartments;
}

console.log(employeeSatisfaction());

console.log(survey());
