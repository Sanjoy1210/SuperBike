import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

// call initializeAuthentication
initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // initialize auth and googleProvider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register a new user
  const registerUser = (email, password, displayName, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        const newUser = { email, displayName }
        setUser(newUser);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: displayName
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        history.replace('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  }

  // log in user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  }

  // google sign in
  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        setError('');

        const destination = location?.state?.from || '/';
        history.replace(destination);

      }).catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .catch((error) => {

      })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    isLoading,
    error,
    signInUsingGoogle,
    registerUser,
    loginUser,
    logOut
  };
};

export default useFirebase;