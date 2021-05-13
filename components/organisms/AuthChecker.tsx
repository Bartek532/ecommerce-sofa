import { auth } from "../../firebase";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

type AuthCheckerProps = {
  readonly children: React.ReactNode;
};

export const AuthChecker = memo<AuthCheckerProps>(({ children }) => {
  const router = useRouter();
  const [userIsLoggedIn, setIsUserLoggedIn] = useState(!!auth.currentUser);

  auth.onAuthStateChanged(user => {
    setIsUserLoggedIn(!!user);
  });
  /*
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(!!auth.currentUser);
    console.log(auth.currentUser, isUserLoggedIn);
  }, [auth.currentUser]);

  if (!isUserLoggedIn) {
    router.push("/login");
    return null;
  }
  */

  if (!userIsLoggedIn) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
});
