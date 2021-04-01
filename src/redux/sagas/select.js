import { put, call, takeLatest }  from 'redux-saga/effects';
import {
  SELECT_QUIZ_START,
  SELECT_QUIZ_ERROR,
  SELECT_QUIZ_COMPLETE,
  SELECT_QUIZ_BY_ID_START,
  SELECT_QUIZ_BY_ID_ERROR,
  SELECT_QUIZ_BY_ID_COMPLETE
} from '../../consts/actionTypes';

import vod from '../api/vod.json';

export function* selectQuiz() {
  try {
    const videos = yield vod;
    yield put({ type: SELECT_QUIZ_COMPLETE, videos })
  } catch(error) {
    yield put({ type: SELECT_QUIZ_ERROR, error })
  }
}

export function* selectQuizById({payload}) {
  try {
    const video = yield call(vod, `&i=${payload.videoId}`);
    yield put({ type: SELECT_QUIZ_BY_ID_COMPLETE, video })
  } catch(error) {
    yield put({ type: SELECT_QUIZ_BY_ID_ERROR, error })
  }
}

export default function* select() {
  yield takeLatest(SELECT_QUIZ_START, selectQuiz);
  yield takeLatest(SELECT_QUIZ_BY_ID_START, selectQuizById);
}