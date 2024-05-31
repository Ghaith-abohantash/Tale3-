import React from 'react';
import { Fade } from 'react-reveal';
import './homepage.css';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div className="home">
            <div className="H-content">
                <Fade top>
                    <h1>مرحبًا بك في تجربة مثيرة</h1>
                </Fade>
                
                <Fade bottom delay={500}>
                    <h2 className='color'> Tale3 اكتشف عالمنا الجديد وابدأ رحلتك الآن مع </h2>
                </Fade>
                <Fade bottom delay={1000}>
                    <Link to="/login" className="button"> سجل دخولك وأبدأ تجربتك الفعلية    </Link>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
