import pixelLogo from '../../../assets/images/image.png'
import './NavBar.css'
export function Nav() {
    return(
        <nav className = 'navbar'>
          <img src={pixelLogo} className="logo" alt="pixel river financial logo" />
          <a href="employees">Employees</a>
          <a href="organization">Organization</a>
        </nav>
  );
}


        

      
      