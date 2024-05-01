import line from "../assets/pastEdit/line.svg"
import square from "../assets/pastEdit/square.svg"
import cloud from "../assets/pastEdit/cloud.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const data = [
  {
   title : "IWD 20",
   desc : "In its third edition, IWD20 took place in March 2020 and was an absolute success. It was an opportunity for women interested in technology and development to meet, discuss and learn about innovation and new products through various conferences, workshops, and panels. However, the success of this edition is due to the Ideathon, in which they learned about an important subject “Women’s online safety”, and brought together brilliant ideas to make the women's experience using the internet safer and more comfortable.",
   pic : "/src/assets/pastEdit/img1.png"
  },
  {
    title : "IWD 21",
    desc : 'For its fourth edition, Women Techmakers Algiers has brought an innovative touch to the IWD 2021, whose duration has been for the first time spread over a week full of intriguing talks. In addition to a fruitful weekend, marked by a set of in-person workshops, aiming to give a new vision on contemporary technologies. It was a golden opportunity to meet, debate on different subjects, and acquire the "Courage to Create" new memories, skills, and connection.',
    pic : "/src/assets/pastEdit/img2.png"
  },
  {
    title : "IWD 22",
    desc : "For its fifth edition and during two weekends, Women Techmackers Algiers celebrated women in tech and STEM in general for their contributions and achievement under the theme “Progress not Perfection “. The first weekend we had the chance to hold incredible talks and during the second weekend an impressive hackathon holding the theme of 'Striving for Well-being' we were able to witness some excellent work done by the brilliant teams.",
    pic : "/src/assets/pastEdit/img3.png"
  },
  {
    title : "IWD 23",
    desc : "For its sixth edition,",
    pic : "/src/assets/pastEdit/img4.jpg"
  }
];



const settings = {
  dots : false,
  infinite : true,
  speed : 500,
  slidersToShow:1,
  slidersToScroll:1,
  arrows: true,


}

function PastEdit() {
  return (
    <div className=" font-montserrat  w-screen overflow-y-hidden overflow-hidden">
      <div className=" w-screen lg:w-1/2 ml-6 lg:block flex flex-col items-center">
        <div className="hidden lg:flex flex-col relative justify-end items-start px-12 py-0 m-0">
          <img className='-z-50 lg:w-[421px] lg:h-[147px] w-full h-full ' src={line} alt="" />
          
        </div>
        <div className=" -z-50 ml-[1.3rem] flex items-center mt-1 justify-between lg:w-[60%] w-full ">
          <img className='hidden lg:block w-[26px] h-[23px] lg:w-[59px] lg:h-[55px]' src={square} alt="" />
          <h1 className="font-bold lg:text-4xl text-3xl ">Our Past Events</h1>
        </div>
        
      </div>
      
      <div className="w-[80%] mx-auto mt-8 ">
      <div className=" ">
        <Slider {...settings} className="lg:mx-3">
      {
          data.map((d) =>{
            return (
              // eslint-disable-next-line react/jsx-key
              <div className=" py-2 px-2 rounded-xl border-2 border-secondaryBlue ">
                <div className="flex flex-col">
                  <div className="mx-auto md:grid grid-cols-5 gap-4 flex flex-col items-end sm:items-center">
                  <div className="items-center w-full h-auto  md:col-span-2 sm:col-span-2 flex md:p-2  ">
                  <img src={d.pic} alt="" className=" border-2 border-secondaryBlue object-cover lg:h-[70%]"  />
                </div>
                <div className=" md:col-span-3 flex flex-col  sm:col-span-2 ">
                  <h2 className="font-bold lg:text-3xl lg:leading-10 text-left text-lg leading-6 lg:pt-0 pt-2">{d.title}</h2>
                  <p className="font-base text-left">
                    {d.desc}
                  </p>
                </div>
                  </div>
                
                </div>
              </div>
            );
              
          })}

       </Slider>
      </div>
      </div>
      <div>
        <img src={cloud} alt="" className=" w-full object-cover" />
      </div>
    </div>
  );
}

export default PastEdit;
