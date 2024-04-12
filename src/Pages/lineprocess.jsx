/* eslint-disable react/prop-types */

function QuestionProgress({ current, total }) {
  const width = (current / total) * 100;

  return (
    <div className='absolute bottom-[42px] rounded-full left-[230px] w-[20vw] h-6 bg-white'>
      <div style={{ width: `${width}%`, backgroundColor: '#1CE9B6' }} className='h-6 rounded-full'></div>
    </div>
  );
}

export default QuestionProgress;
