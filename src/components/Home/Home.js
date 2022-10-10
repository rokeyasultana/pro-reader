import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div  data-aos="zoom-in-up" data-aos-duration="1500">
      <h1    className="text-5xl font-bold text-left">A <span className='text-blue-500'>reader</span> lives a <br></br> thousand lives <span className='text-blue-500'>before he dies</span></h1>
      <p className="py-6 text-left">Of all the skills you’ll ever learn growing up, arguably none are more important than the ability to read. Each book that you read is an opportunity to learn something new. You can expand your vocabulary, train your brain, increase wellness, lower stress, and discover something new about yourself.

I still find the human mind amazing. You can see what is ultimately a bunch of scribbles on a page, decipher them into sounds, turn those sounds into words, and then turn those words into thoughts and emotions.</p>
      <button className="btn btn-outline btn-info"><Link to='/books'>Visit Store</Link></button>
    </div>
    <Player 
src='https://assets3.lottiefiles.com/packages/lf20_bnxoocv2.json'
className="player"
loop
autoplay
style={{ height: '600px', width: '600px' }}
/>
<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
  </div>
</div>
        </div>
    );
};

export default Home;