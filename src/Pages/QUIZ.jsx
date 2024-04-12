import { useState } from 'react';
import line1 from '../assets/quiz/line1.svg';
import line2 from '../assets/quiz/line2.svg';
import line1mob from '../assets/quiz/linemob1.svg';
import line2mob from '../assets/quiz/linemob2.svg';
import squares from '../assets/quiz/squares.svg';
import next_btn from '../assets/quiz/next-btn.svg';
import wtmlogo from '../assets/quiz/wtmlogoleaf.svg';
import flower from '../assets/quiz/flower.svg';
import Quizcard from './Quizcard';
import QuestionProgress from './lineprocess';
import Confetti from 'react-confetti';


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
    <div id="quiz" className="bg-[#C4E7FF] w-screen overflow-y-hidden  h-screen font-montserrat overflow-hidden relative flex items-center justify-center content-center">
      {showscore ? (<Confetti/>) : (null)}
      <div>
        <img src={line2} alt="" className="lg:block hidden absolute bottom-10 z-0 left-0 overflow-hidden" />
        <img src={line1} alt="" className="lg:block hidden absolute bottom-0 z-0 right-10 overflow-hidden" />
        <img src={line2mob} alt="" className="lg:hidden block absolute bottom-6 z-0 left-0 overflow-hidden" />
        <p className='lg:hidden block absolute text-center  bottom-[16%] left-[12%] '>{currentQuestionIndex+1}/{QuizList.length} Questions</p>
        <QuestionProgress current={currentQuestionIndex + 1} total={QuizList.length} />
      </div>
      <div className='absolute opacity-60 z-301 bottom-[13%] overflow-hidden border-[#C4E7FF] border-2 bg-white lg:w-[calc(100vw/1.7)] h-2/3 rounded-t-lg rounded-b-3xl'></div>
      <div className='absolute opacity-90 z-300 bottom-[15%] overflow-hidden  border-[#C4E7FF] border-2 bg-white lg:w-[calc(100vw/1.56)] h-2/3 rounded-t-lg rounded-b-3xl'></div>
      <div className="lg:relative absolute top-4 lg:top-0 flex content-center justify-center items-center bg-white lg:mx-0 mx-7 border-[#C4E7FF] border-2 w-4/5 lg:w-[calc(100vw/1.5)] h-3/4 lg:h-2/3 rounded-t-lg rounded-b-3xl shadow-green drop-shadow-2xl">
        <img src={squares} alt="" className="lg:-scale-x-100 overflow-hidden absolute lg:z-0 -z-10 -right-[0%]  lg:-left-[0] -bottom-[17%] lg:-bottom-[21%] h-[120%] lg:h-[130%]" />
        <img src={wtmlogo} className="lg:block hidden absolute z-0 top-6 right-8 w-[12%]"/>
        {
          !showscore ? (
            <>
          <div
            onClick={handleNextQuestion}
            className={`lg:flex hidden z-50 absolute cursor-text -bottom-4 right-3  justify-center align-middle content-center ${answeredCurrentQuestion ? 'cursor-pointer' : 'pointer-events-none opacity-50'}`}
          >   
            <div className={`hidden lg:block cursor-pointer text-2xl top-10 font-bold hover:underline text-center mt-5 ${answeredCurrentQuestion ? '' : 'pointer-events-none opacity-50'}`}>
              {currentQuestionIndex === QuizList.length - 1 ? 'Show Score' : 'Next Question'}
            </div>
            <img src={flower} className={`lg:block hidden absolute -top-[160%] right-4 -z-20  ${answeredCurrentQuestion ? '' : 'pointer-events-none opacity-50'}`}  />
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
          number={QuizList.length}
        />
      </div>
      {!showscore ? (
          <img src={next_btn} alt="" className="lg:hidden block absolute h-[15vh] bottom-[5%] right-[10%] cursor-pointer" onClick={handleNextQuestion} />
        ):null}
    </div>
  );
}

export default Quiz;
