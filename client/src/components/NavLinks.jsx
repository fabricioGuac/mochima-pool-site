
export default function NavLinks({ className, setMenuOpen, isMenuOpen }) {

    // Function to close the side menu only if it's open when one of the links is clicked
    const handleClick = () => {
        if (isMenuOpen) {
            setMenuOpen(false);
        }
    }

    return (
        <ul className={`space-y-4 md:space-y-0 md:flex md:space-x-8 ${className}`}>
            <li><a href="#about" className="text-lg md:text-xl hover:text-teal-300" onClick={handleClick}>About Us</a></li>
            <li><a href="#services" className=" text-lg md:text-xl hover:text-teal-300" onClick={handleClick}>Services</a></li>
            <li><a href="#testimonials" className="text-lg md:text-xl hover:text-teal-300" onClick={handleClick}>Testimonials</a></li>
            <li><a href="#contact" className="text-lg md:text-xl hover:text-teal-300" onClick={handleClick}>Contact</a></li>
        </ul>
    )
}
