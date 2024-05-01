import { useState } from 'react';
import leaf from '../assets/faq/leaf.svg';
import line1 from '../assets/faq/line1.svg';
import line2 from '../assets/faq/line2.svg';
import leafmob from '../assets/faq/leafmob.svg';
import linemob from '../assets/faq/linemob.svg';

const Questlist = [
  {
    question: "What’s IWD ?",
    answer: "On March 8th, International Women's Day celebrates women's achievements in economics, politics, and society. 🎉 WTM Algiers, part of Women Techmakers, celebrates with coding workshops and inspiring talks, highlighting women's influence in tech and encouraging more to excel! 💫💻"
  },
  {
    question: "What tracks will be covered at IWD 24? 🌟",
    answer:"This year's edition aims to inspire the community to thrive and shape the future! 🚀💪 Explore conferences and panels discussing technology, innovation, and career paths, delving into the impact of cutting-edge technologies on the present and future. 🌐🔍"
  },
  {
    question: "Is this event exclusively for women?👩‍💻🚫",
    answer: "Absolutely not! This event is open to everyone, regardless of gender. We're all about embracing diversity and celebrating technology together! Come join us and share your passion. 😊🌟"
  },
  {
    question: "Do I have to be a developer to attend? ",
    answer: "Nope, you don't need to be a developer or have a background in computer science to attend. If you're curious about technology and eager to learn more, you're more than welcome to join us! See you there! 🚀🎉"
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
      <div className='w-[90%] gap-4  lg:w-[75%] lg:h-[73%] rounded-3xl absolute self-center lg:bg-[#00E09E] lg:bg-opacity-60 lg:shadow-lg p-2 lg:p-10 shadow-slate-500 flex flex-col justify-evenly '>
        <h1 className='text-xl lg:text-4xl text-center font-bold'>Frequently Asked Questions</h1>
          <div className='flex flex-col justify-center'>
            {Questlist.map((quest) => (
              <div key={quest.question} className='bg-white mb-2 mx-4 rounded-xl shadow-sm shadow-slate-400'>
                <div className='flex justify-between items-center align-middle px-1 lg:px-3 py-1 lg:py-2'>
                  <h1 className='text-sm lg:text-xl font-medium flex-grow'>{quest.question}</h1>
                  <svg
                    onClick={() => toggleAnswer(quest.question)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`lg:h-8 lg:w-8  h-4 w-4 cursor-pointer rounded-full transform p-1 transition-transform duration-300 mr-2 ${getRotation(
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
                <div className='flex flex-col pl-3'>
                  <hr style={{ display: showAnswers[quest.question] ? 'block' : 'none' }} className='border-t-1 border-black opacity-40 w-3/4' />
                </div>
                <p className='p-4 text-xs lg:text-lg' style={{ display: showAnswers[quest.question] ? 'block' : 'none' }}>{quest.answer}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
