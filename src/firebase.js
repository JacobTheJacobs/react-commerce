import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {

};

firebase.initializeApp(config);
//snapshot represent data
//documentRef --> returns documentSnapshot
//collectionRef -->return querySnapshot

//fire return us two types of obj ref and snashots
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //exit function

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get(); //get snapshotObj from the refObj

  if (!snapshot.exits) {
    const { displayName, email } = userAuth; //from google auht props
    const createdAt = new Date();
    console.log(userAuth)
    console.log(additionalData)
    try {
      await userRef.set({//create method
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log(userAuth);
      console.log(additionalData);
    } catch (error) {
      console.log("error", error.message);
    }

    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //google props
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
