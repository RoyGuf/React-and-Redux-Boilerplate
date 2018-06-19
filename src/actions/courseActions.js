import courseApi from '../api/mockCourseApi';

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

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course){
    return function(dispatch, getState){
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)):
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}