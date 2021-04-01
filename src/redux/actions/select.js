import { SELECT_QUIZ_START, SELECT_QUIZ_BY_ID_START } from '../../consts/actionTypes';

export const selectQuiz = () => ({
  type: SELECT_QUIZ_START
});

export const selectQuizById = payload => ({
  type: SELECT_QUIZ_BY_ID_START,
  payload
});