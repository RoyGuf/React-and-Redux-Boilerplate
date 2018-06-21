import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import authorApi from '../../api/mockAuthorApi';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      loading: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      // Necessary to update form when existing course is loading directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(evt) {
    const field = evt.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = evt.target.value;
    this.setState({
      course: course
    });
  }

  saveCourse(evt) {
    evt.preventDefault();
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
    this.context.router.push('/courses'); 
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
  const course = courses.find(course => course.id === courseId);
  if (course) return course;
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path '/course/:id'
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

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