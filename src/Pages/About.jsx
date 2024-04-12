import WhatISIWD from './WhatISIWD';
import PastEdit from './PastEdit';

function About()
{
    return (
        <div id='about' className=' w-screen overflow-y-hidden'>
            <WhatISIWD></WhatISIWD>
           <PastEdit></PastEdit>
        </div>
    );
}

export default About;