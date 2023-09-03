import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3mgm9i-ymP3pguwOEpZ6pSunyYNxaIII",
  authDomain: "socials-aa0d9.firebaseapp.com",
  projectId: "socials-aa0d9",
  storageBucket: "gs://socials-aa0d9.appspot.com",
  messagingSenderId: "261884758451",
  appId: "1:261884758451:web:891b0eae37dcbb0856e3c6"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);