import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED } from '../actions';
import { handleAuthentication } from '../Auth';

export function* fetchToDoList() {
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
    yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([loadToDoList(), handleAuthenticationCallback()]);
}