import { SignInButton, useAuth } from "@clerk/clerk-react";


export function Landing() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col gap-2 text-lg py-8">
      {!isSignedIn ? (
        <div>
          <span>
            <SignInButton>
              <button className="sign-in-btn">Sign in</button>
            </SignInButton>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}