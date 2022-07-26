import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <CustomLink to='/' >Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='header' >Header</CustomLink>
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