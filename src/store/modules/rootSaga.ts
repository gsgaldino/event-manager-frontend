import { all } from 'redux-saga/effects';

import user from './user/sagas';
import event from './event/sagas';

export default function* rootSaga() {
  yield all([
    user,
    event,
  ]);
}
