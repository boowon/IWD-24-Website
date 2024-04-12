import { useState } from 'react';
import line1 from '../assets/quiz/line1.svg';
import line2 from '../assets/quiz/line2.svg';
import squares from '../assets/quiz/squares.svg';
import next_btn from '../assets/quiz/next-btn.svg';
import wtmlogo from '../assets/quiz/wtmlogoleaf.svg';
import Quizcard from './Quizcard';
import QuestionProgress from './lineprocess';


const QuizList = [
  {
    Question: "What is the capital of Algeria?",
    Answers: [
      "Algiers",
      "Paris",
      "London",
      "Berlin"
    ],
    CorrectAnswer: "Algiers"
  },
  {
    Question: 'Who are WTM', 
    Answers : [
      'Girls',
      'The best girls',
      'The best best girls',
      'The ultimate best girls'
    ],
    CorrectAnswer: 'The ultimate best girls'
  },
  {
    Question: 'Where is the local of WTM Algiers',
    Answers : [
      'USTHB',
      'ENS',
      'ESI',
      'My Heart'
    ],
    CorrectAnswer: 'ESI'
  }
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCurrentQuestion, setAnsweredCurrentQuestion] = useState(false);
  const [showscore, setshowscore] = useState(false);
  const [score, setScore] = useState(0);


  const handleNextQuestion = () => {
    // If the current question is answered and it's not the last question, move to the next question
    if (answeredCurrentQuestion && currentQuestionIndex < QuizList.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnsweredCurrentQuestion(false);
    }
    if (currentQuestionIndex == QuizList.length - 1)
    {
      setshowscore(true);
    }
  };

  const handleAnswer = () => {
    // Mark the current question as answered
    setAnsweredCurrentQuestion(true);
  };

  const handleRestart = () => {
    // Restart the quiz
    setCurrentQuestionIndex(0);
    setAnsweredCurrentQuestion(false);
    setshowscore(false);
    setScore(0);

  };

  const addscore = () => {
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div id="quiz" className="bg-[#C4E7FF] w-screen font-montserrat h-screen overflow-hidden relative flex items-center justify-center">
      <div>
        <img src={line2} alt="" className="absolute bottom-10 z-0 left-0 overflow-hidden" />
        <img src={line1} alt="" className="absolute bottom-0 z-0 right-10 overflow-hidden" />
        <QuestionProgress current={currentQuestionIndex + 1} total={QuizList.length} />
      </div>
      <div className='absolute opacity-60 z-301 bottom-[13%] overflow-hidden border-[#C4E7FF] border-2 bg-white w-[calc(100vw/1.7)] h-2/3 rounded-t-lg rounded-b-3xl'></div>
      <div className='absolute opacity-90 z-300 bottom-[15%] overflow-hidden  border-[#C4E7FF] border-2 bg-white w-[calc(100vw/1.56)] h-2/3 rounded-t-lg rounded-b-3xl'></div>
      <div className="relative flex content-center justify-center items-center bg-white border-[#C4E7FF] border-2 w-[calc(100vw/1.5)] h-2/3 rounded-t-lg rounded-b-3xl shadow-green drop-shadow-2xl">
        <img src={squares} alt="" className="overflow-hidden z-0 absolute -left-[8.5%] -bottom-[21%] h-[130%]" />
        <img src={wtmlogo} className="absolute z-0 top-6 right-8 w-[12%]"/>
        {
          !showscore ? (
            <>
          <div
            onClick={handleNextQuestion}
            className={`z-50 absolute cursor-text -bottom-4 right-3 flex justify-center align-middle content-center ${answeredCurrentQuestion ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
          >   
            <div className={`cursor-pointer text-2xl top-10 font-bold hover:underline text-center mt-5 ${answeredCurrentQuestion ? '' : 'pointer-events-none opacity-50'}`}>
              {currentQuestionIndex === QuizList.length - 1 ? 'Show Score' : 'Next Question'}
            </div>
            <img
              src={next_btn}
              className={`cursor-pointer ${answeredCurrentQuestion ? '' : 'pointer-events-none opacity-50'}`}
            />
          </div>
          </>) : null
         }
        <Quizcard
          className=""
          ShowScore={showscore}
          currentQuestionIndex={currentQuestionIndex}
          Question={QuizList[currentQuestionIndex].Question}
          Answers={QuizList[currentQuestionIndex].Answers}
          CorrectAnswer={QuizList[currentQuestionIndex].CorrectAnswer}
          handleAnswer={handleAnswer} // Pass the handleAnswer function to the Quizcard component
          handleRestart={handleRestart}
          addscore={addscore}
          score={score}
        />
      </div>
    </div>
  );
}

export default Quiz;
