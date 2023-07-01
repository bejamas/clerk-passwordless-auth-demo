
import Link from "next/link";
import { SignIn, SignUp } from "@clerk/nextjs";

export default function Auth({ params }: {params: {action: string}}) {
  return (
    <main className="main">
      <h2>Auth Page</h2>
      {params.action === "signin" ? <SignIn redirectUrl="/main" /> : <SignUp redirectUrl="/main" />}
    </main>
  )
}