import {createStore, applyMiddleware, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(createLogger(), thunkMiddleware)

export default createStore(
	combineReducers({
					  lyrics: lyricsReducer,
					  player: playerReducer
					}),
	middleware
);
