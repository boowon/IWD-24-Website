import React, { useState, useEffect } from 'react';
import ScoreProgress from './score';

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
    const totalx =3

    return (
        <div className="">
            {props.ShowScore ? (
                <>
                <ScoreProgress score={props.score} total={totalx} />
                <button className="text-center self-center absolute bottom-1/5 left-[45%] mt-3 hover: underline text-black font-bold py-2 px-4 rounded" onClick={props.handleRestart}>Replay</button>
                </>
            ) : (
                <>
                    <h1 className='font-bold text-2xl text-center'>{props.Question}</h1>
                    <ul className='w-full flex flex-col justify-evenly gap-[2vh] items-center'>
                        {props.Answers.map((answer) => (
                            <li
                                key={answer}
                                className={`cursor-pointer border-transparent py-1 px-8 text-center w-full rounded-3xl shadow-my answers ${answerSelected ? 'disabled' : ''}`}
                                id={answer}
                                onClick={() => checkAnswer(answer)}
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Quizcard;
