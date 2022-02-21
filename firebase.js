
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAExrlzC1hwhgXl5VRCq0Xu8sqTJcwXnZ0",
  authDomain: "fir-authenticaion-e46cf.firebaseapp.com",
  projectId: "fir-authenticaion-e46cf",
  storageBucket: "fir-authenticaion-e46cf.appspot.com",
  messagingSenderId: "353569543994",
  appId: "1:353569543994:web:6156de85210c0f4f15a203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
