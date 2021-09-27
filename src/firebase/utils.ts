import {
  initializeApp
} from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
import {
  firebaseConfig
} from './config';

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const handleUserProfile = async ({ userAuth, additionalData }: any) => {
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}
