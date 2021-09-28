var readlineSync= require('readline-sync');

var playerName = readlineSync.question('Who is here to play?');

console.log('Hello '+playerName+'..!Test your skills on Indian Epic Mahabharath...')

var questionsArr = [{
  question:'Mother of Bheeshma? a.Kunti b.Davaki c.Ganga :',
  answer: 'c'
},{
  question: 'Only girl child in kauravas? a.Draupathi b.Gandhari c.Dussala :',
  answer: 'c'
},{
  question: 'Brother of Draupathi? a.Dharmistha b.Drishtadhumna c.Dhanvanthari :',
  answer: 'b'
},{
  question: 'Who killed Bheeshma? a.Karna b.Krishna c.Arjuna :',
  answer: 'c'
},{
  question: 'Who wrote Bhagavandgita? a.VyasBhagavan b.Krishna c.Arjuna :',
  answer: 'a'
}]

var score = 0;
function quizTime(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log('Correct Answer')
    score++;
  }else{
    console.log('Wrong Answer');
  }
}

for(i=0;i<questionsArr.length;i++){
  var input = questionsArr[i];
  quizTime(input.question,input.answer);
}

var highScore=[
  {
    score: '5',
    player: 'Mohan'
  },{
    score: '4',
    player:'Chaitanya'
  }
]

if(score > highScore[0].score){
  console.log('Your final score is : '+ score+'. You reached high score.')
}else{
  console.log('Your final score is : '+ score)
}