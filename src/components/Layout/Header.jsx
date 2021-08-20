
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {
    const isConnected = useSelector((state) => state.user.isConnected)
    return <header>
    <h1>{isConnected}</h1>
        {!isConnected &&
            <div><Link to='/SignUp'>SignUp</Link>
            <Link to='/Login'>Login</Link></div>
        }
        {!!isConnected &&
            <Link to='/profile'>Profile</Link>
        }
    </header>
}

export default Header;