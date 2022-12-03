import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyCWMdx0QZm7ohX4QND6pWo6qSknHAOjCbQ",
  authDomain: "fireblog-46fa4.firebaseapp.com",
  projectId: "fireblog-46fa4",
  storageBucket: "fireblog-46fa4.appspot.com",
  messagingSenderId: "250304885190",
  appId: "1:250304885190:web:919de5bf5f0ec7ec0682c7"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
