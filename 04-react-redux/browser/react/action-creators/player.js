import {STOP_PLAYING, START_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS} from '../constants';
import axios from 'axios';
import AUDIO from '../audio';

export const stopPlayer = function () {
  return {
    type: STOP_PLAYING,
  };
};

export const startPlayer = function () {
  return {
    type: START_PLAYING,
  };
};

export const setCurrentSong = function(currentSong) {
  return {
    type: SET_CURRENT_SONG,
    currentSong
  };
}

  export const setCurrentSongList = function(currentSongList) {
  return {
    type: SET_LIST,
    currentSongList
  };
};

export const play = () => (dispatch) => {
  AUDIO.play();
  dispatch(startPlayer());
};
