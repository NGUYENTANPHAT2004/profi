import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBt-F7e-b5HhMDGw8stYp3UA2UU4yct8IY",
    authDomain: "sample-firebase-ai-app-92209.firebaseapp.com",
    projectId: "sample-firebase-ai-app-92209",
    storageBucket: "sample-firebase-ai-app-92209.firebasestorage.app",
    messagingSenderId: "673041486435",
    appId: "1:673041486435:web:14184035439bf2b7f9de56"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 