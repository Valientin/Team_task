import { ADD_COMMENT, SHOW_COMMENTS, SET_ACTIVE } from './actionTypes';

export function addComment(comment, id) {
	const newComment = {};
	newComment[id] = comment; 
	return {
		type: ADD_COMMENT,
		payload: {id, newComment}
	}
}

export function showComments(id){
	return {
		type: SHOW_COMMENTS,
		payload: id
	}
}

export function setActive(id){
	return {
		type: SET_ACTIVE,
		payload: id
	}
}