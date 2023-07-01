
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';

export default async function Main() {
  const user = await currentUser();
  
  return (
    <main className="main">
      <h2>Main Page - (Restricted)</h2>
      <div className="card">
        <p>Welcome, {user ? `${user.firstName} ${user.lastName}` : "User"}</p>
        <SignOutButton>
          <button>Sign Out</button>
        </SignOutButton>
      </div>
    </main>
  )
}