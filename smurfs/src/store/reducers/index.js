//in case i need mroe reducers later 
import { combineReducers } from 'redux';

import { smurfReducer as smurfs }  from "./smurfReducer";
import { postReducer } from './postReducer';

export default combineReducers({smurfs, postReducer});

