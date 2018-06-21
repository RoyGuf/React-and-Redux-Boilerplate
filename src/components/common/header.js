import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        /*To add another link to the navigation header you need to
        specify a <Link> with the path name similar to the path name in routes */
        <nav>
            <IndexLink to='/' activeClassName='active'>Home</IndexLink>
            {" | "}
            <Link to='/courses' activeClassName='active'>Courses</Link>
            {" | "}
            <Link to='/about' activeClassName='active'>About</Link>
        </nav>
    );
};

export default Header;