import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      loading: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course._id !== nextProps.course._id) {
      // Necessary to update form when existing course is loading directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(evt) {
    const field = evt.target.name;
    let course = this.state.course;
    course[field] = evt.target.value;
    this.setState({
      course: course
    });
  
    }
  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if(this.state.course.title.length < 5){
        errors.title = 'Title must be at least 5 characters';
        formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse(evt) {
    evt.preventDefault();
    if(!this.courseFormIsValid()){
        return;
    }
    this.setState({loading: true});
    this.props.saveCourse(this.state.course)
    .then(() => this.redirect())
    .catch(error => {
        toastr.error(error);
        this.setState({loading: false});

    });
  }

  redirect(){
    this.setState({loading: false});
    toastr.success('Course Saved!');
    browserHistory.push('/courses'); 
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        loading={this.state.loading}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  saveCourse: PropTypes.func.isRequired
};

// Pull in the React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, courseId) {
  const course = courses.find(course => String(course._id) === courseId);
  if (course) return course;
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path '/course/:id'
  let course = { watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
   course: course,
   authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveCourse: (course) => dispatch(courseActions.saveCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);