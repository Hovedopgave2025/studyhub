// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_CIf5T3oKava1i8h7W4_OUY4wKUFnAr4',
  authDomain: 'studyhub-8c901.firebaseapp.com',
  projectId: 'studyhub-8c901',
  storageBucket: 'studyhub-8c901.firebasestorage.app',
  messagingSenderId: '183069279982',
  appId: '1:183069279982:web:5fca4d65d06dfb69bbd5ff',
  measurementId: 'G-Y0SPKRS9WK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
