import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/races'>Races</NavLink>
            <NavLink className='link' to='/cyclists'>Cyclists</NavLink>
        </nav>
    )
}

export default NavBar