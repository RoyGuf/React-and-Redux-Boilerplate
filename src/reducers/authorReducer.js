import initialState from './initialState';

//Manage authors state
export default function authorReducer(state = initialState.authors, action){
    switch(action.type){
        case 'LOAD_AUTHORS_SUCCESS':
          return action.authors;

        default:
          return state;

    }
}