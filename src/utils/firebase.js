import firebase from "firebase";
import { getFirebaseConfig } from "../env";

let configuredFirebase;

export function getFirebase() {
  if (configuredFirebase == null) {
    firebase.initializeApp(getFirebaseConfig());
    firebase.auth().languageCode = "pt";
    configuredFirebase = firebase;
    return configuredFirebase;
  } else {
    return configuredFirebase;
  }
}
