import { Link, useMatch, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    
    const match = useMatch(location.pathname);

    console.log('match', match);
    return (
        <>
            <h1>Header</h1>
            <Link to={`${match.pathname}/user`} >To me</Link>
        </>
    )
}

export default Header