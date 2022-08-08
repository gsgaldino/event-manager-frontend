import {
  call,
  all,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import { rootState } from 'store';
import api from 'services/api';
import { toast } from 'components/CustomToast';

import * as actions from './slice';

export function* getPublicEvents() {
  try {
    const { data } = yield call(api.get, '/api/v1/event');

    yield put(actions.getPublicEventsSuccess(data));
    toast.success('Events loaded successfully');
  } catch (error) {
    alert('Desculpe, houve um erro');
    console.log('ERROR', error);
  }
}

export function* createEvent({ payload }: ReturnType<typeof actions.createEvent>) {
  try {
    const { loggedUser } = yield select((s: rootState) => s.user);

    const { data } = yield call(api.post, '/api/v1/event', payload, {
      headers: {
        token: loggedUser.dashboardToken,
      },
    });

    toast.success('Events loaded successfully');
    yield put(actions.createEventSuccess(data));
  } catch (error) {
    alert('Desculpe, houve um erro ao criar o evento');
    console.log('ERROR', error);
  }
}

export default all([
  takeLatest(actions.getPublicEvents.type, getPublicEvents),
  takeLatest(actions.createEvent.type, createEvent),
]);
