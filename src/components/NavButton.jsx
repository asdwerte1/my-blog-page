const NavButton = () => {
    return (
        <button id="navOpenButton" onClick={openNav}>&#9776;</button>
    )
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

export default NavButton;