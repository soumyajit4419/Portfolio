// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAQOFO6LJ0aat8eufvmxMVeo0jk6vtIv54",
  authDomain: "altar-posgrado.firebaseapp.com",
  databaseURL: "https://altar-posgrado-default-rtdb.firebaseio.com",
  projectId: "altar-posgrado",
  storageBucket: "altar-posgrado.appspot.com",
  messagingSenderId: "181566442528",
  appId: "1:181566442528:web:167bd9de73d7ac9e898045",
  measurementId: "G-PBMS4W4WPX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
