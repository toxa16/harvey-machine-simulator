export default function* rootSaga() {
  const url = 'ws://localhost:3001';  // env
  const socket = new WebSocket(url);
}
