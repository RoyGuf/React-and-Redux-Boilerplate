
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
    return { type: 'LOAD_AUTHORS_SUCCESS', authors};
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return fetch('http://localhost:3000/api/author').then(res => res.json()).then(res => {
            dispatch(loadAuthorsSuccess(res));
        }).catch(error => {
            throw(error);
        });
    };
}

