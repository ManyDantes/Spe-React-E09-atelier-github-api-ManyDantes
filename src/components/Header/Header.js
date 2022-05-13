/* impport */
import gitHubLogo from '../../assets/images/logo-github.png';
import './header.css';

function Header() {
  return (
    <img id="header-img" src={gitHubLogo} alt="react logo" />
  );
}

export default Header;
