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
    const payload = data.reverse();

    yield put(actions.getPublicEventsSuccess(payload));
  } catch (error) {
    toast.error('Houve um erro ao buscar os eventos! ☹️');
  }
}

export function* getEvent({ payload }: ReturnType<typeof actions.getEvent>) {
  const { loggedUser } = yield select((s: rootState) => s.user);

  try {
    const { data } = yield call(api.get, `/api/v1/event/${payload}`, {
      headers: {
        token: loggedUser.dashboardToken,
      },
    });
    yield put(actions.getEventSuccess(data));
  } catch (error) {
    toast.error('Houve um erro ao buscar o evento! ☹️');
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

    yield put(actions.createEventSuccess(data));
  } catch (error) {
    toast.error('Desculpe, houve um erro ao criar o evento');
  }
}

export function* addParticipants({ payload }: ReturnType<typeof actions.addParticipants>) {
  const { eventId, emails } = payload;

  try {
    const { event } = yield select((s:rootState) => s.event);
    const [email] = emails;

    if (!email || !email.includes('@')) {
      toast.warn('Insira um e-mail válido');
      return;
    }

    if (event.participants.includes(email)) {
      toast.warn('Este usuário já está inscrito no evento');
      return;
    }

    const { loggedUser } = yield select((s: rootState) => s.user);
    const { data } = yield call(
      api.post,
      `/api/v1/event/${eventId}/participants`,
      { emails },
      {
        headers: {
          token: loggedUser.dashboardToken,
        },
      },
    );

    toast.success('Usuário inscrito com sucesso');
    yield put(actions.addParticipantsSuccess(data));
  } catch (error) {
    toast.error('Houve um erro ao adicionar os participantes! ☹️');
  }
}

export function* removeParticipant({ payload }: ReturnType<typeof actions.removeParticipants>) {
  const { eventId, email } = payload;

  try {
    const { loggedUser } = yield select((s: rootState) => s.user);
    const { data } = yield call(
      api.delete,
      `/api/v1/event/${eventId}/participants`,
      {
        headers: {
          token: loggedUser.dashboardToken,
        },
        data: { email },
      },
    );
    yield put(actions.removeParticipantsSuccess(data));
    toast.success('Participante removido com sucesso');
  } catch (error) {
    toast.error('Houve um erro ao adicionar os participantes! ☹️');
  }
}

export default all([
  takeLatest(actions.getPublicEvents.type, getPublicEvents),
  takeLatest(actions.getEvent.type, getEvent),
  takeLatest(actions.createEvent.type, createEvent),
  takeLatest(actions.addParticipants.type, addParticipants),
  takeLatest(actions.removeParticipants.type, removeParticipant),
]);
