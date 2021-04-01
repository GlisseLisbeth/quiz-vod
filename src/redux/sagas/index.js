import { all } from 'redux-saga/effects';

import select from './select';

export default function* rootSaga() {
	yield all([
		select()
	]);
}
