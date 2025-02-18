import React from 'react';
import '../style/Home.css';
import intro_logo from '../assets/cool_emoji.svg'

function Home() {
  return (
    <div className='i_home'>
        <div className='intro_home'>
            <div className='intro_head'>
                <h1 className='intro_name'>Sanjay Raja S</h1>
                <img src={intro_logo} alt="" />
            </div>
            <div className='designation font-semibold'><p>Frappe Developer</p></div>
            <div className='address'><p>
            I am a passionate developer and designer specializing in custom application development using Frappe and ERPNext. With expertise in HTML, CSS, JavaScript, Python, SQL, and React, I strive to build efficient and user-friendly solutions. I am a continuous learner, always expanding my skills to stay ahead in the tech industry.</p>
            
            <p>
            Beyond coding, I have a deep love for storytelling and poetry, along with a keen interest in movies and books. I hold a Bachelor’s degree in Information Technology from Syed Ammal Arts and Science College, Ramanathapuram, graduating with first-class distinction.    
            </p></div>
        </div>
        <div className='intro_info'>

        </div>
    </div>
  );
}

export default Home;