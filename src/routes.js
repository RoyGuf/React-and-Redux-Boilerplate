import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    /*Routing paths. To add another path paste this line:
    '<Route path="pathName" component={componentName}'
    Then change the pathName and the ComponentName as the examples below */
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);