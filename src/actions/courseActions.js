
import {beginAjaxCall} from './ajaxStatusActions';

export function CreateCourse(course){
    return { type: 'CREATE_COURSE', course};
}

export function loadCoursesSuccess(courses){
    return { type: 'LOAD_COURSES_SUCCESS', courses};
}

export function updateCourseSuccess(course){
    return { type: 'UPDATE_COURSE_SUCCESS', course};
}

export function createCourseSuccess(course){
    return { type: 'CREATE_COURSE_SUCCESS', course};
}

export function deleteCourseSuccess(course){
    return { type: 'DELETE_COURSE_SUCCESS', course};
}

export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return fetch('http://localhost:3000/api/course').then(res => res.json()).then(res => {
            dispatch(loadCoursesSuccess(res));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch, getState){
        let id = course._id;
        dispatch(beginAjaxCall());
        return id !== undefined ? fetch('http://localhost:3000/api/course/'+ id,
                                { method: 'PUT', body: JSON.stringify(course), headers:{'Accept': 'application/json',
                                'Content-Type': 'application/json'
                }}).then(res => res.json()).then(data => dispatch(updateCourseSuccess(course))) :
                            fetch('http://localhost:3000/api/course',
                                { method: 'POST', body: JSON.stringify(course), headers:{'Accept': 'application/json',
                                'Content-Type': 'application/json'
                }}).then(res => res.json()).then(res => dispatch(createCourseSuccess(course)));
    };
}

export function deleteCourse(course){
    return function(dispatch, getState){
        let id = course._id;
        dispatch(beginAjaxCall());
        return fetch(`http://localhost:3000/api/course/${id}`,
                                { method: 'DELETE'
                }).then(res => res.json()).then(res => dispatch(deleteCourseSuccess(course)));
    };
}