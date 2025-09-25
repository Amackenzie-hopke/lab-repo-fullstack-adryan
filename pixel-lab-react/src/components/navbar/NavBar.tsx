import pixelLogo from '../../assets/images/image.png'
import './NavBar.css'
export function Nav() {
    return(
        <nav className = 'navbar'>
          <img src={pixelLogo} className="logo" alt="pixel river financial logo" />
          <a href="#">Employees</a>
          <a href="#">Organization</a>
        </nav>
  );
}


        

      
      