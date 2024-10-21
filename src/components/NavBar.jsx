import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="sideNav" className="sideNav">
            <ul>
                <li>
                    <button className="closeBtn" onClick={closeNav}>&times;</button></li>
                <li>
                    <NavLink to="/"><button onClick={closeNav}>Home</button></NavLink>
                </li>
                <li>
                    <NavLink to="development"><button onClick={closeNav}>Development</button></NavLink>
                </li>
                <li>
                    <NavLink to="baking"><button onClick={closeNav}>Baking</button></NavLink>
                </li>
            </ul>
        </nav>
    )
}


function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

export default NavBar;