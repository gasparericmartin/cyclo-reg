import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/races'>Races</NavLink>
            <NavLink to='/cyclists'>Cyclists</NavLink>
        </nav>
    )
}

export default NavBar