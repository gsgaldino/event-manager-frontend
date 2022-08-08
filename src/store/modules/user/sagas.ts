import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import api from 'services/api';
import * as actions from './slice';
import { setLoading } from '../common/slice';

export function* register({ payload }: ReturnType<typeof actions.register>) {
  yield put(setLoading(true));

  try {
    const { data } = yield call(api.post, '/api/v1/user', payload);

    yield put(actions.registerSuccess(data));
  } catch (error) {
    console.log('ERROR', error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* login({ payload }: ReturnType<typeof actions.login>) {
  yield put(setLoading(true));

  try {
    const { data } = yield call(api.post, '/api/v1/user/login', payload);

    yield put(actions.loginSuccess(data));
  } catch (error: any) {
    if (error.response.status === 401) {
      alert('Usuário ou senha inválidos');
    }
  } finally {
    yield put(setLoading(false));
  }
}

export default all([
  takeLatest(actions.register.type, register),
  takeLatest(actions.login.type, login),
]);
