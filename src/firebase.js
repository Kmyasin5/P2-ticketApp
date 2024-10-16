import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8N-U7T916bFi9PliJYo7hp4UDagykTHc",
  authDomain: "p2-ticketapp.firebaseapp.com",
  projectId: "p2-ticketapp",
  storageBucket: "p2-ticketapp.appspot.com",
  messagingSenderId: "936855022714",
  appId: "1:936855022714:web:242b472f36565943969fc3",
  measurementId: "G-BDM3FZSCEY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
