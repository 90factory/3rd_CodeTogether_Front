import React,{useState} from 'react';
import Slider from 'infinite-react-carousel';
import Login from './Login';
import Logined from './Logined';
import './css/Contents.css';
import g1 from './images/google.jpg';
import g2 from './images/google2.jpg';
import g3 from './images/google3.jpg';
import ReactPlayer from 'react-player';

const Contents = () => {
    const [isLogin, setIsLogin] = useState(false);

    const event_settings = {
        adaptiveHeight: true,
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: 10,
        dots: true,
        duration: 500,
        wheel: true
    }
    const class_settings = {
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        centerPadding: 10,
        duration: 500,
        slidesPerRow: 2,
        wheel: true      
    }
    return(
        <div className='contents-container'>
            <section>
                <div className="carousel-container">
                    <h2>공지사항</h2>
                    <Slider { ...event_settings }>
                        <div>
                            <h3><img src={g1} alt="g1"/></h3>
                        </div>
                        <div>
                            <h3><img src={g2} alt="g2"/></h3>
                        </div>
                        <div>
                            <h3><img src={g3} alt="g3"/></h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                    </Slider>
                </div>

                {/* 로그인에 따라서 다르게 */}
                {isLogin? <Logined/>:<Login/>} 
            </section>
            <div className="Info">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <section>
                <ReactPlayer url='https://www.youtube.com/watch?v=1EHUz6l3r_w' playing controls/>
                <div className="carousel-container">
                    <Slider {...class_settings}>
                        <div>
                            <h3><img src={g1} alt="g1"/></h3>
                        </div>
                        <div>
                            <h3><img src={g2} alt="g2"/></h3>
                        </div>
                        <div>
                            <h3><img src={g3} alt="g3"/></h3>
                        </div>                    
                    </Slider>
                </div>
            </section>
        </div>  
    )
}

export default Contents;