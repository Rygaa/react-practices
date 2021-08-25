import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Header = (props) => {
    const isConnected = useSelector((state) => state.user.isConnected);
    return (
        <div>
            <h1>isConnected: {String(isConnected)}</h1>
            <NavLink to='/'>Welcome</NavLink>
            {!!isConnected &&
                <div>
                    <NavLink to='/Join'>Join</NavLink>
                </div>
            }
            {!isConnected && 
                <div>
                    <NavLink to='/SignUp'>Sign Up</NavLink>
                    <NavLink to='/Login'>Login</NavLink>
                </div>
            }

            <main>{props.children}</main>
        </div>

    )
}

export default Header