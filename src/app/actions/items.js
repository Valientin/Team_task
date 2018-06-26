import { ADD_ITEM, SET_ACTIVE } from './actionTypes';

export function addItem(item, id) {
	const newItem = {};
	newItem[id] = item; 
	return {
		type: ADD_ITEM,
		payload: {id, newItem}
	}
}

export function setActive(id){
	return {
		type: SET_ACTIVE,
		payload: id
	}
}