const Footer = () => {
    return (
        <footer className="flex justifyBetween">
            <div id="left">
                <p className="bold">Author: Samuel Markham</p>
                <p><a href="mailto:samuel@markhamhome.uk" target="_blank">samuel@markhamhome.uk</a></p>
                <p><a href="http://markhamhome.uk" target="_blank">Main site</a></p>
            </div>
            <div id="right">
                <p className="bold">&copy; 2024 Samuel Jack Markham. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;