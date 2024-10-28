// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoTYownKDp6cMpffGijHge9Rf7zraOsw0",
  authDomain: "startupwork-3b1f7.firebaseapp.com",
  projectId: "startupwork-3b1f7",
  storageBucket: "startupwork-3b1f7.appspot.com",
  messagingSenderId: "886688162088",
  appId: "1:886688162088:web:845b686a2d096a6a6e701d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };