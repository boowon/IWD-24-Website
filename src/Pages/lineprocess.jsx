/* eslint-disable react/prop-types */

function QuestionProgress({ current, total }) {
  const width = (current / total) * 100;

  return (
    <div className='absolute bottom-[12%] lg:bottom-[42px] rounded-full left-[10%] lg:left-[230px] w-[40vw] lg:w-[20vw] h-4 lg:h-6 bg-white'>
      <div style={{ width: `${width}%`, backgroundColor: '#1CE9B6' }} className='h-4 lg:h-6 rounded-full'></div>
    </div>
  );
}

export default QuestionProgress;
