import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// App.js Createstore(reducers) varten oma redux metodi
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});


// console.log(store.getState());
// { libraries: [{ id: 1, title: 'webpack, description:'...''}] }
