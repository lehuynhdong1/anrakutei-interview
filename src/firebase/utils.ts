import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { firebaseConfig } from './config';

initializeApp(firebaseConfig);

export const auth = getAuth();

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const handleUserProfile = async ({ userAuth, additionalData }: any) => {
  if (!userAuth) {
    return;
  };
  const { uid } = userAuth;
  const dbRef = ref(getDatabase());
  const userRef = get(child(dbRef, `users/${uid}`));
  // TODO: save data
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        unsubscribe();
        resolve(userAuth);
      }
    }, reject);
  })
}
