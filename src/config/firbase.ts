import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAvqHJ-oBJh8hJZOYkJPM6iZOlNcAUvfCc",
  authDomain: "search-f0c02.firebaseapp.com",
  projectId: "search-f0c02",
  storageBucket: "search-f0c02.appspot.com",
  messagingSenderId: "934302248462",
  appId: "1:934302248462:web:8c7cacc1e3dcfbaccf965f",
  measurementId: "G-WVHWPRQ7R6"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);