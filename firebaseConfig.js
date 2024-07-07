import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZwf0QdHVOvKPg8n-rAXO2VXOhD4AfsDg",
  authDomain: "musicroom-40637.firebaseapp.com",
  databaseURL: "musicroom-40637.firebaseio.com",
  projectId: "musicroom-40637",
  storageBucket: "musicroom-40637.appspot.com",
  messagingSenderId: "498439110710",
  appId: "1:498439110710:web:eb84d5f2dc2bf58ca85897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };