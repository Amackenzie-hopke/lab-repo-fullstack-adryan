import pixelLogo from '../../../assets/images/image.png'
import './NavBar.css'
import {SignInButton, SignOutButton, useAuth, UserButton } from "@clerk/clerk-react";


export function Nav() {
    const { isSignedIn } = useAuth();

    return(
        <nav className = 'navbar'>
          <img src={pixelLogo} className="logo" alt="pixel river financial logo" />
           {isSignedIn ? (
          <>
          <a href="employees">Employees</a>
          <a href="organization">Organization</a>
          <SignOutButton/>
          <UserButton />
          </>
           ) : ( <SignInButton>
          <button className="sign-in-btn">Sign In</button>

           </SignInButton>

           )}
        </nav>
    
  );
}


        

      
      