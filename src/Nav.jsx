import { curentTopic } from "./State";

export function openNav() {
    const proprtiateLen = window.innerWidth * 0.2;

    const minLen = () => {

        const buttons = document.querySelectorAll("#sideNav button");
        let maxWidth = 0;

        buttons.forEach(button => {
            const buttonWidth = button.offsetWidth;

            maxWidth = buttonWidth > maxWidth ? buttonWidth : maxWidth;

        });

        return maxWidth;

    }

    const minLength = minLen();

    // Decide on nav width based on which is bigger, proportion of screen width or minimum for buttons to display
    // Used for altered behaviour on different screens
    const length = proprtiateLen > minLength ? proprtiateLen : minLength;

    document.getElementById("sideNav").style.width = `${length}px`;
    document.getElementById("root").style.marginLeft = `${length}px`;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("root").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function selectTopic(event) {
    curentTopic.topic = event.target.innerHTML.toLowerCase();           
}
export default function Nav() {
    return (
        <nav>
            <div id='sideNav'>
                <button className='closebtn' onClick={closeNav}>&times;</button>
                <button onClick={selectTopic}>Home</button>
                <button onClick={selectTopic}>Development</button>
                <button onClick={selectTopic}>Cooking and Baking</button>
                <button onClick={selectTopic}>Music</button>
            </div>
        </nav>
    )
}

