import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6BJ56TkK8uACbAImLgIVSjUeamENYEDk",
  authDomain: "evakey-d1ea6.firebaseapp.com",
  projectId: "evakey-d1ea6",
  storageBucket: "evakey-d1ea6.firebasestorage.app",
  messagingSenderId: "71407915882",
  appId: "1:71407915882:web:e59edb6b03444a6db84b13",
  measurementId: "G-63RDWZ9VZW"
};

const app = initializeApp(firebaseConfig);
let analytics: Analytics | null = null;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

