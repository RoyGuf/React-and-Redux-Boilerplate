import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import {browserHistory} from 'react-router';
 
class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title: ''}
        };

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    componentDidMount() {
        this.props.loadCourses();
    }
    redirectToAddCoursePage() {
        browserHistory.push('/course/');
    }

    render(){
        const courses = [...this.props.courses];
        return(
            <div className='jumotron'>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
                <hr style={{paddingTop: 100}}/>
                <h2>Add Course</h2>
                <input
                    type='submit'
                    value='Add Course'
                    className='btn btn-primary'
                    onClick={this.redirectToAddCoursePage} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    deleteCourse: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
      deleteCourse: (course)=>dispatch(courseActions.deleteCourse(course)),
      loadCourses: ()=>dispatch(courseActions.loadCourses()),
      actions: bindActionCreators(courseActions, dispatch)  
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);