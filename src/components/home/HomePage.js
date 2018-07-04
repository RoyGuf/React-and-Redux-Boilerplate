import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className='jumotron'>
                <h1><u>React and Redux Boilerplate</u></h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <img src="https://www.hopetutors.com/wp-content/uploads/2017/08/mern-stack-training.png" style={{width: 500, height: 250}}/>
                <hr style={{paddingBottom: 100}}/>
                <Link to='about' className=' btn btn-primary btn-lg'>Learn more</Link>
            </div>
        );
    }
}

export default HomePage;