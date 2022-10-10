import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';


const About = () => {
    
      
    return (
        <div>
       <h2 className='text-center text-5xl mt-5 mb-5'>A <span className='text-5xl text-blue-400'> reader lives</span> a thousand lives before he dies

       </h2>

       <Player 
src='https://assets6.lottiefiles.com/packages/lf20_zpymeot9.json'
className="player"
loop
autoplay
style={{ height: '600px', width: '600px' }}
/>
<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />


<div className='content-center mb-10' >
  <p className='text-center text-2xl'><span className='text-blue-400'>
  What is the importance of books in our life?</span> <br></br>Books play a quintessential role in every student’s life by introducing them to a world of imagination,<br></br> providing knowledge of the outside world, improving their reading, writing and speaking skills <br></br> as well as boosting memory and intelligence. The importance of books in our life cannot be undermined<br></br> for they not only help in broadening our horizons but also act as doorways of connecting us with the world around us.</p>
</div>
        </div>
    );
};

export default About;