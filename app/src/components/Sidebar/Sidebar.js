import { Link } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
const Sidebar = () => {
    return (
       <div className='nav-bar'>
        <Link className='logo' to={'/'}>
            <img src={LogoS} alt="logo"></img>
            {/* TODO: Fix this later on */}
            <img src={LogoSubtitle} alt="NAME"></img>
        </Link>
       </div>
    )
}

export default Sidebar;