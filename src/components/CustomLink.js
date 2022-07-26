import * as React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to)
    console.log('resolved: ', resolved);

    let match = useMatch({ path: resolved.pathname, end: true });
    console.log('match: ', match);

    return ( 
        <Link to={to} {...props} >{children}</Link>
    )
}

export default CustomLink;