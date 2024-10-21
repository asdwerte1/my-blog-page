const NavButton = () => {
    return (
        <button id="navOpenButton" onClick={openNav}>&#9776;</button>
    )
}

function openNav() {

    // Logic used to decide on menu length
    const viewPortWidth = window.innerWidth;
    const length = viewPortWidth < 768 ? viewPortWidth : viewPortWidth * 0.2;

    document.getElementById("sideNav").style.width = `${length}px`;
    document.getElementById("main").style.marginLeft = `${length}px`;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.querySelector("footer").style.backgroundColor = "rgba(239, 239, 239, 0.4"
}

export default NavButton;