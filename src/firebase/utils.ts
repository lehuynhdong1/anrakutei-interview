import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { child, get, getDatabase, ref, set } from "firebase/database";
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
  const userRef = child(dbRef, `users/${uid}`);
  get(userRef).then(async (snapshot) => {
    if (snapshot.exists()) {
      const { displayName, email } = userAuth;
      const timestamp = new Date();
      const userRoles = ['user'];

      try {
        const db = getDatabase();
        await set(ref(db, 'users/' + uid), {
          displayName,
          email,
          createdDate: timestamp,
          userRoles,
          ...additionalData
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("No data available");
    }
  });

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}
