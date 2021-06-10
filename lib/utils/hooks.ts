import { useState, useEffect } from "react";
import { auth } from "lib/firebase";
import firebase from "firebase/app";

type Dimensions = { width?: number; height?: number };

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Dimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export const useUser = () => {
  const [user, setUser] = useState<firebase.User | null>(
    auth.currentUser || null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [user]);

  return { user };
};
