
"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="header">
      <Link href="/">
        <h2>Clerk-Auth</h2>
      </Link>
      {!isLoaded || !isSignedIn ? (
        <div>
          <Link href="/auth/signup">Sign Up</Link>
          <Link href="/auth/signin">Sign In</Link>
        </div>
      ) : (
        <UserButton showName afterSignOutUrl="/" />
      )}
    </header>
  );
};

export default Header;