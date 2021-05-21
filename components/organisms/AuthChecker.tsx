import { auth } from "lib/firebase";
import { memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Loader } from "./Loader/Loader";

type AuthCheckerProps = {
  readonly children: React.ReactNode;
};

export const AuthChecker = memo<AuthCheckerProps>(({ children }) => {
  const router = useRouter();
  const [userIsLoggedIn, setIsUserLoggedIn] = useState(!!auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsUserLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (!userIsLoggedIn) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }
    return <Loader />;
  }

  return <>{children}</>;
});

AuthChecker.displayName = "AuthChecker";
