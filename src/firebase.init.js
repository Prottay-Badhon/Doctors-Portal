import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDDb4bC8a_Fchqdjnv1F6gfzR4-Q6YFdbM",
  authDomain: "doctors-portal-d03ca.firebaseapp.com",
  projectId: "doctors-portal-d03ca",
  storageBucket: "doctors-portal-d03ca.appspot.com",
  messagingSenderId: "1005789279885",
  appId: "1:1005789279885:web:32772dbf2b2f2f1263d4c4",
  measurementId: "G-C5YR416QHQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth