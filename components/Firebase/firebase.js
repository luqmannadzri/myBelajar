import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();


export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (fName, lName, email, password) => {
  
  auth.createUserWithEmailAndPassword(email, password).then(function(res){
        db.collection('User').doc(res.user.uid).set(
          {
            email: email,
            fName: fName,
            lName: lName
            
          }
        )
  });
}

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);