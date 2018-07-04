import initialState from './initialState';

//Manage courses state
export default function courseReducer(state = initialState.courses, action){
    switch(action.type){
        case 'CREATE_COURSE_SUCCESS':
          return [...state,
            Object.assign({}, action.course)
          ];

        case 'UPDATE_COURSE_SUCCESS':
          return [...state.filter(course => course._id !== action.course._id),
            Object.assign({}, action.course)
          ];

        case 'DELETE_COURSE_SUCCESS':
          return [...state.filter(course => course._id !== action.course._id),
            Object.assign({})
          ];

        case 'LOAD_COURSES_SUCCESS':
          return action.courses;

        default:
          return state;

    }
}