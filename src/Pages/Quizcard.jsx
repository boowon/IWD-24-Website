/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ScoreProgress from './score';
import ScoreProgressStand from './circlestand';

function Quizcard(props) {
    const [answerSelected, setAnswerSelected] = useState(false);

    useEffect(() => {
        // Reset answerSelected when the currentQuestionIndex changes
        setAnswerSelected(false);
    }, [props.currentQuestionIndex]);

    const checkAnswer = (answer) => {
        if (!answerSelected) {
            setAnswerSelected(true);
            if (answer === props.CorrectAnswer) {
                document.getElementById(answer).style.boxShadow = "0px 3px 8px green";
                props.addscore();
            } else {
                document.getElementById(answer).style.boxShadow = "0px 3px 8px red";
                document.getElementById(props.CorrectAnswer).style.boxShadow = "0px 3px 8px green";
            }
            props.handleAnswer();
        }
    };

    return (              
        <div className="lg:w-auto w-2/3 lg:block">
            {props.ShowScore ? (
                <>
                <div className='flex justify-center items-center content-center flex-col'>
                <ScoreProgress score={props.score} total={props.number} />
                <button className="text-center self-center mt-3 hover: underline text-black font-bold py-2 px-4 rounded" onClick={props.handleRestart}>Replay</button>
                </div>
                </>
            ) : (
                <>
                <div className='flex justify-center items-center mb-20 flex-col '>
                    <ScoreProgressStand score={props.score} total={props.number} />
                    <h3 className='font-bold text-sm'>Score</h3>
                    <br className=''/>
                    <br className=''/>
                    <div className=' lg:mb-my'>
                    <h1 className='font-bold text-xl lg:text-2xl lg:text-center text-left lg:ml-0 mb-4'>{props.Question}</h1>
                    <ul className='w-full flex flex-col justify-evenly gap-[2vh] items-center'>
                        {props.Answers.map((answer) => (
                            <li
                                key={answer}
                                className={`cursor-pointer bg-white border-transparent py-1 px-8 text-center w-full rounded-3xl shadow-my answers ${answerSelected ? 'disabled' : ''}`}
                                id={answer}
                                onClick={() => checkAnswer(answer)}
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                    </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Quizcard;
