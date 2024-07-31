import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGBsyK2amUNM9UogLuzrESin8y21yOpG0",
  authDomain: "inventory-management-app-cbe0a.firebaseapp.com",
  projectId: "inventory-management-app-cbe0a",
  storageBucket: "inventory-management-app-cbe0a.appspot.com",
  messagingSenderId: "385948376270",
  appId: "1:385948376270:web:ebdc5c4b887698dc3d049f",
  measurementId: "G-PVRZCSE39D",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
