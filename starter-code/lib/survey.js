
var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function randomSurvey(){
  return Math.floor(Math.random() * responses.length);
}
console.log(randomSurvey());

newArray = [];

function tenRandom(){

  for(i = 0; i < 10; i++){
    newArray.push(responses[randomSurvey()]);
  }

}

tenRandom();
