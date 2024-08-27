import { openNav } from './Nav.jsx';
import logo from './logo.png';
import { curentTopic } from './State.js';

export default function PageBanner() {
    return (
        <>
            <Header />
            <PageTitleandNavBtn />
        </>);
}

function Header() {
    return (
        <header>
            <div id='blog-header'>
                <a href='https://markhamhome.uk' target='_blank'>
                    <img src={logo} height="fill" alt='Site Logo' /> </a>
                <h1 className='passion-one-regular display-3'>Samuel Markham<br />Blog Space</h1>
            </div>
        </header>
    );
}

function NavButton() {
    return (<button id="navOpenButton" onClick={openNav}>&#9776;</button>)
}

function PageTitleandNavBtn() {
    return (
        <div id="pageTitle">
            <NavButton />
            <h2 className='comic-neue-light-italic display-6'>{capitaliseFirstLetter(curentTopic.topic)}</h2>
        </div>
    )
}

export function capitaliseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}