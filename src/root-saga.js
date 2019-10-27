import { call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

function websocketChannel(socket) {
  return eventChannel(emit => {
    const onOpen = () => {
      console.log('Connected to the Control Server.');
      const machineConnectAction = {
        type: 'MACHINE_CONNECT',
      };
      socket.send(JSON.stringify(machineConnectAction));
    };
    const onMessage = e => {
      const message = e.data;
      emit(JSON.parse(message));
    };
    const onError = err => {
      console.error('websocket error');
      console.error(err);
    };
    const onClose = () => {
      console.log('Control Server disconnected.');
    };

    socket.addEventListener('open', onOpen);
    socket.addEventListener('error', onError);
    socket.addEventListener('message', onMessage);
    socket.addEventListener('close', onClose);

    return () => {
      socket.removeEventListener('open', onOpen);
      socket.removeEventListener('error', onError);
      socket.removeEventListener('message', onMessage);
      socket.removeEventListener('close', onClose);
    }
  });
}

function* watchChannel(channel) {
  while (true) {
    const action = yield take(channel);
    console.log(action);
    yield put(action);
  }
}

export default function* rootSaga() {
  const url = 'ws://localhost:3001';  // env
  const socket = new WebSocket(url);
  const channel = yield call(websocketChannel, socket);
  yield call(watchChannel, channel);
}
