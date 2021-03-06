import * as types from '../constants/ActionTypes';

export function addBottle(bottle) {
	return {
    type: types.ADD_BOTTLE,
    payload: {
      bottle: bottle
    }
  };
}

export function deleteBottle(id) {
	return {
    type: types.DELETE_BOTTLE,
    payload: {
      id: id
    }
  };
}

export function editBottle(id, bottle) {
	return {
    type: types.EDIT_BOTTLE,
    payload: {
      id: id,
      bottle: bottle
    }
  };
}
