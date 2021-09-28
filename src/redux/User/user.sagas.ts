import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { auth, getCurrentUser } from '../../firebase/utils';
import { User } from "../../models";
import { GoogleProvider } from './../../firebase/utils';
import { signInSuccess, signOutUserSuccess, userError } from './user.actions';
import userTypes from './user.types';

export function* getSnapshotFromUserAuth(user: any, additionalData = {}) {
  try {
    // TODO: call save data
    const input: User = { id: user.uid, email: user.email };
    yield put(signInSuccess(input));
  } catch (err) {
    console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }: any) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
    console.log(err);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth: unknown = yield getCurrentUser();
    if (!userAuth) {
      return
    };
    yield getSnapshotFromUserAuth(userAuth);

  } catch (err) {
    console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield signOut(auth);
    yield put(signOutUserSuccess())

  } catch (err) {
    console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: { displayName, email, password, confirmPassword } }: any) {
  if (password !== confirmPassword) {
    const err = ['Password Don\'t match'];
    yield put(
      userError(err)
    );
    return;
  }

  try {
    const { user } = yield createUserWithEmailAndPassword(auth, email, password);
    const additionalData = { displayName };
    yield getSnapshotFromUserAuth(user, additionalData);

  } catch (err) {
    console.log(err);
  }

}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* googleSignIn() {
  try {
    const { user } = yield signInWithPopup(auth, GoogleProvider);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
    console.log(err);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onGoogleSignInStart),
  ])
}
