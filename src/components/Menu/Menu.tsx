import './Menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return(
        <div className='menu'>
            <ul className='menuList'>
                <li className='menuItem'>
                    <Link to ={`/public`} className='menuLink'>Publication</Link>
                </li>
                <li className='menuItem'>
                    <Link to ={`/photo`} className='menuLink'>Photo</Link>
                </li>
                <li className='menuItem'>
                    <Link to ={`/contacts`} className='menuLink'>Contacts</Link>
                </li>
                <li className='menuItem'>
                    <Link to ={`/registration`} className='menuLink'>Registration</Link>
                </li>
            </ul>
        </div>
    )
}