import { Link } from "react-router-dom";



function Header() {
    return (
        <>
            <nav className="flex justify-between">
                <img src="../assets/logo.PNG" alt="" />
                <ul className="flex list-none space-x-4">
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/about"><li>About</li></Link>
                    <Link to = "/contact"><li>Contact</li></Link>
                </ul>
            </nav></>
    )
}

export default Header;