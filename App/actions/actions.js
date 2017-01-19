import * as types from './actionTypes';


export function login() {
  return {
    type: types.LOGIN
  };
}

export function capture() {
	console.log("1")
  return {
    type: types.CAPTURE
  };

}

export function close() {
	console.log("1")
  return {
    type: types.CLOSE
  };
  
}
