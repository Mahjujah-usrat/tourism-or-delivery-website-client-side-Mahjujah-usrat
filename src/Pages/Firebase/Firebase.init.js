import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config.js";

const initializationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuthentication;