import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const CourseListRow = (props) => {
  function deleteCourse(course) {
    props.deleteCourse(course).onClick
    .then(props.loadCourses());
  }
  return (
    <tr>
      <td><a href={props.course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + props.course._id}>{props.course.title}</Link></td>
      <td>{props.course.authorId}</td>
      <td>{props.course.category}</td>
      <td>{props.course.length}</td>
      <td><Link to={'/courses/'} onClick={()=>deleteCourse(props.course)}>Delete</Link></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
  return {
    loadCourses: ()=>dispatch(courseActions.loadCourses()),
    deleteCourse: (course)=>dispatch(courseActions.deleteCourse(course)),
    actions: bindActionCreators(courseActions, dispatch) 
  };
}

export default connect(null, mapDispatchToProps)(CourseListRow);