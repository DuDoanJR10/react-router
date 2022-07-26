import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink';

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <CustomLink to='/' >Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='header' >Nothing</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='about' >About</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='no' >Nothing</CustomLink>
                    </li>
                    
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;