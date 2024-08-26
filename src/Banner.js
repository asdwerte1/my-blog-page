import './styling/App.css';
import { openNav } from './Nav.js';
import logo from './logo.png';

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
                <h1 className='comic-neue-light display-3'>Samuel Markham<br />Blog Space</h1>
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
            <h2 className='comic-neue-light-italic display-4'>Placeholder</h2>
        </div>
    )
}