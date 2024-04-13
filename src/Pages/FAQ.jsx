import { useState } from 'react';
import leaf from '../assets/faq/leaf.svg';
import line1 from '../assets/faq/line1.svg';
import line2 from '../assets/faq/line2.svg';
import leafmob from '../assets/faq/leafmob.svg';
import linemob from '../assets/faq/linemob.svg';

const Questlist = [
  {
    question: "Who are Women tech makers?",
    answer: 'are a group of smart, pretty, and kind-hearted girls'
  },
  {
    question: "What is the purpose of WTM?",
    answer: 'To empower the role of girls in tech and to provide them with the necessary resources to succeed'
  },
  {
    question: "What are the benefits of joining WTM?",
    answer: 'You will be able to connect with girls who share the same interests as you and you will be able to attend workshops and events'
  },
  {
    question: "What is the future of WTM?",
    answer: 'The future of WTM is bright and promising'
  }
];

function FAQ() {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswers(prevState => {
      // Toggle the state of the clicked question
      const newState = {
        ...prevState,
        [question]: !prevState[question]
      };

      // Hide all other answers
      Object.keys(newState).forEach(key => {
        if (key !== question) {
          newState[key] = false;
        }
      });

      return newState;
    });
  };

  const getRotation = (question) => {
    return showAnswers[question] ? 'rotate-180' : 'rotate-270';
  };

  return (
    <div id='faq' className="font-montserrat overflow-hidden w-screen h-screen relative flex justify-center">
      <img src={leafmob} alt="leafmob" className="lg:hidden block absolute top-4 right-0" />
      <img src={linemob} alt="linemob" className="lg:hidden block absolute bottom-10 left-0" />
      <img src={leaf} alt="leaf" className="lg:block hidden absolute top-0 right-0" />
      <img src={line1} alt="line1" className="lg:block hidden absolute bottom-[5%] -left-[20%] w-1/2 h-1/2" />
      <img src={line2} alt="line2" className="lg:block hidden absolute bottom-0 -right-[5%] w-1/2 h-1/2" />
      <div className='w-[75%] h-[73%] rounded-2xl absolute self-center lg:bg-[#00E09E] lg:shadow-lg shadow-slate-500 flex flex-col justify-evenly '>
        <h1 className='text-xl lg:text-4xl text-center font-bold'>Frequently Asked Questions</h1>
          <div className='flex flex-col justify-center'>
            {Questlist.map((quest) => (
              <div key={quest.question} className='bg-white mb-2 mx-4 rounded-lg shadow-sm shadow-slate-400'>
                <div className='flex justify-between align-middle px-1 lg:px-3 py-1 lg:py-2'>
                  <h1 className='text-sm lg:text-xl font-bold flex-grow'>{quest.question}</h1>
                  <svg
                    onClick={() => toggleAnswer(quest.question)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`lg:h-8 lg:w-8  h-4 w-4 cursor-pointer rounded-full transform transition-transform duration-300 mr-2 ${getRotation(
                      quest.question
                    )}`}
                    style={{ backgroundColor: '#2480F0' }}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='white'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <hr style={{ display: showAnswers[quest.question] ? 'block' : 'none' }} className='border-t-2 border-black w-2/3' />
                </div>
                <p className='px-3 pt-2 text-xs lg:text-lg' style={{ display: showAnswers[quest.question] ? 'block' : 'none' }}>{quest.answer}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
