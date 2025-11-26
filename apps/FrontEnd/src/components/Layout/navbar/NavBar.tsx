import pixelLogo from '../../../assets/images/image.png'
import './NavBar.css'
import {SignInButton, useAuth, UserButton } from "@clerk/clerk-react";


export function Nav() {
    const { isSignedIn } = useAuth();

    return(
        <nav className = 'navbar'>
           {isSignedIn && (
          <>
          <img src={pixelLogo} className="logo" alt="pixel river financial logo" />
          <a href="employees">Employees</a>
          <a href="organization">Organization</a>
          <UserButton />
          </>

           )}
        </nav>
    
  );
}


        

      
      