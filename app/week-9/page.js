import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return <button onClick={gitHubSignIn}>Sign In with GitHub</button>;
  }

  return (
    <div>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={firebaseSignOut}>Sign Out</button>
      <a href="/week-9/shopping-list">Go to Shopping List</a>
    </div>
  );
}
