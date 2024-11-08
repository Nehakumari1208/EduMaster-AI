// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-16a53.firebaseapp.com",
  projectId: "ai-course-generator-16a53",
  storageBucket: "ai-course-generator-16a53.appspot.com",
  messagingSenderId: "846461651017",
  appId: "1:846461651017:web:bc4828fc6dd66e60c51798",
  measurementId: "G-4TWYPPVTS4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
