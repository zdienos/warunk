import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
);


export function getInisial(str) {
	/*
		function for get initial from name or something
		by. ivan iddo - 25/04/2018
	*/

	var ret = ""; //initial return 
    var res = str.split(" "); //split string
    
    //get 1 character per word
    res.forEach(function(e){
    	ret = ret+e.substr(0,1);
    });
    
    return ret.substr(0,2); //return result
}