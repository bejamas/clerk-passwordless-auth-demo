
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <h2>Clerk Passwordless Authentication Demo Application</h2>
      <div className="card">
        <p>A simple Next.js 13 application that illustrates Passwordless authentication using Clerk</p>
        <Link href="/auth/signup">Create Account</Link>
      </div>
    </main>
  )
}