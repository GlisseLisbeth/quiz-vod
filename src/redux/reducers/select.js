import { get } from 'lodash';
import {
  SELECT_QUIZ_START,
  SELECT_QUIZ_ERROR,
  SELECT_QUIZ_COMPLETE,
  SELECT_QUIZ_BY_ID_START,
  SELECT_QUIZ_BY_ID_ERROR,
  SELECT_QUIZ_BY_ID_COMPLETE
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_QUIZ_START:
      console.log(action);
      return { ...state, isLoading: true };
      break;
    case SELECT_QUIZ_ERROR:
      console.log(action);
      return { ...state, isLoading: true, videos: null };
      break;
    case SELECT_QUIZ_COMPLETE:
      console.log(action);
      return { ...state, isLoading: false, videos: action.videos};
      break;
    case SELECT_QUIZ_BY_ID_START:
      console.log(action);
      return { ...state, isLoading: true, video: null };
      break;
    case SELECT_QUIZ_BY_ID_ERROR:
      console.log(action);
      return { ...state, isLoading: true, video: null };
      break;
    case SELECT_QUIZ_BY_ID_COMPLETE:
      console.log(action);
      return { ...state, isLoading: false, video: action.video};
      break;
    default:
      return { ...state };
  }
}