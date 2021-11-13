import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

// call initializeAuthentication
initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

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
        setError('');
        history.replace('/');

        // save user to database
        saveUser(email, displayName, 'POST');

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
        const user = result.user;
        setError('');

        // save to database
        saveUser(user.email, user.displayName, 'PUT');

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

  useEffect(() => {
    fetch(`https://ancient-dawn-23437.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user?.email])

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://ancient-dawn-23437.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  return {
    user,
    isLoading,
    error,
    admin,
    signInUsingGoogle,
    registerUser,
    loginUser,
    logOut
  };
};

export default useFirebase;