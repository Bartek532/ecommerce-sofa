import { auth } from "../../lib/firebase";
import { memo, useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "./Loader";

type AuthCheckerProps = {
  readonly children: React.ReactNode;
};

export const AuthChecker = memo<AuthCheckerProps>(({ children }) => {
  const router = useRouter();
  const [userIsLoggedIn, setIsUserLoggedIn] = useState(!!auth.currentUser);

  auth.onAuthStateChanged(user => {
    setIsUserLoggedIn(!!user);
  });

  if (!userIsLoggedIn) {
    router.push("/login");
    return <Loader />;
  }

  return <>{children}</>;
});
