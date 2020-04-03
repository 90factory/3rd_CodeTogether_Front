import React from 'react';
import {Route, Link} from 'react-router-dom';
import './css/Header.css'

const Header = () => {
    return(
        <div className='header-container'>
            <header>
                <a href="/">
                    <h1>codeTogether</h1>
                </a>
                <nav>
                    <ul>
                        <li><button className="search">강의검색</button></li>
                        {/* <li><a href="/">회원가입</a></li> */}
                        <li><button className="signup">회원가입</button></li>
                    </ul>
                </nav>
            </header>
            {/* <Route exact path="/"/>
            <Route path="/"/> */}
        </div>
    )
}

export default Header
