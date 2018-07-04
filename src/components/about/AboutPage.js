import React from 'react';

class AboutPage extends React.Component{
    render(){
        return(
            <div className='jumotron'>
                <h1>About</h1>
                <p><b>This app uses React, Redux and React Router in ES6 for ultra-responsive web apps.</b></p>
                <hr/>
                <p className="dot"><u>This Boilerplate includes:</u></p>
                <ul>
                    <li className="dot"> React as front-end </li>
                    <li className="dot"> Nodejs with Express as back-end</li>
                    <li className="dot"> Webpack as bundler</li>
                    <li className="dot"> ESList as linter tool</li>
                    <li className="dot"> MongoDB as Database</li>
                    <li className="dot"> React-router for routing</li>
                    <li className="dot"> Redux for managing application state</li>
                </ul>
            </div>
        );
    }
}

export default AboutPage;