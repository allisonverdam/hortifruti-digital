/**
 * @typedef {import('firebase')} firebase
 */

import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthConsumer = AuthContext.Consumer;

/**
 * @param {object} props
 * @param {firebase} props.firebase
 * @param {React.ComponentElement} props.children
 */
export const AuthProvider = props => {
  const { firebase } = props;
  const [user, setUser] = useState();

  const updateCurrentUser = () => {
    firebase.auth().onAuthStateChanged(async data => {
      if (data == null) {
        return logout();
      }

      const userDB = await firebase
        .firestore()
        .collection("users/")
        .doc(data.uid)
        .get();

      if (userDB != null) {
        setUser(userDB.data());
      } else if (userDB == null || !data.uid) {
        logout();
      }
    });
  };

  const login = async (email, password) => {
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const {
        user: { uid, displayName }
      } = data;

      let userDB = await firebase
        .firestore()
        .collection("users/")
        .doc(uid)
        .get();

      if (!userDB.exists) {
        userDB = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            uid,
            name: displayName,
            email: email
          });
      }

      setUser(userDB.data());
    } catch (error) {
      console.error({ error });
      alert(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();

      const data = await firebase.auth().signInWithPopup(provider);

      const {
        user: { uid, email, displayName, photoURL }
      } = data;

      let userDB = await firebase
        .firestore()
        .collection("users/")
        .doc(uid)
        .get();

      if (!userDB.exists) {
        userDB = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            uid,
            name: displayName,
            email: email,
            avatarUrl: photoURL
          });
      }

      setUser(userDB.data());
    } catch (error) {
      console.log({ error });
      alert(error.message);
    }
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  const register = async (email, password, name) => {
    try {
      const data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const {
        user: { uid }
      } = data;

      let userDB = await firebase
        .firestore()
        .collection("users/")
        .doc(uid)
        .get();

      if (!userDB.exists) {
        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            uid,
            name,
            email
          });

        userDB = await firebase
          .firestore()
          .collection("users/")
          .doc(uid)
          .get();
      }

      setUser(userDB.data());
    } catch (error) {
      console.error({ error });
      alert(error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        loginWithGoogle,
        logout,
        register,
        user,
        setUser,
        updateCurrentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
