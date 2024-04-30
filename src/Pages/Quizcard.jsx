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
        <div className={`lg:w-auto w-2/3 flex justify-center items-center align-middle ${props.ShowScore ? '':' lg:mt-[15vh]'}`}>
            {props.ShowScore ? (
                <>
                <div className='flex justify-center items-center content-center flex-col'>
                <ScoreProgress score={props.score} total={props.number} />
                <button className="text-center self-center mt-3 hover: underline text-black font-bold py-2 px-4 rounded" onClick={props.handleRestart}>Replay</button>
                </div>
                </>
            ) : (
                <>
                <div className='flex justify-center items-center mb-20 flex-col fixed lg:top-[-5vh] '>
                    <ScoreProgressStand score={props.score} total={props.number} />
                    <h3 className='font-bold text-sm mb-2 lg:mb-0'>Score</h3>
                    <div className=' lg:mb-my'>
                    <h1 className='font-bold text-sm lg:text-lg lg:text-center text-left lg:ml-0 mb-4 ml-1 w-[50vw]'>{props.Question}</h1>
                    <ul className='w-full flex flex-col justify-evenly gap-[2vh] items-center'>
                        {props.Answers.map((answer) => (
                            <li
                                key={answer}
                                className={`cursor-pointer text-xs lg:text-sm bg-white border-transparent py-1 px-1 text-center w-[70vw] lg:w-[50vw] rounded-3xl shadow-my answers ${answerSelected ? 'disabled' : ''}`}
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
