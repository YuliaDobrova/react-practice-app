import logo from './logo.svg';
import './Logo.css';

const Logo = ({ className }) => {
  return (
    <div className={`App-logo ${className}`}>
      <img src={logo} className={`App-logo-img ${className}`} alt="logo" />
    </div>
  );
};

export default Logo;
