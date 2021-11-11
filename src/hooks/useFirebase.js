import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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

  // google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setError('');
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
    logOut
  };
};

export default useFirebase;