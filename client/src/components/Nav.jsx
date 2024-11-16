
import NavLinks from "./NavLinks";

export default function Nav({ setMenuOpen, isMenuOpen }) {
  // Function to toggle the side menu open or closed state based on the current state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="block md:hidden hover:bg-teal-900 px-4 py-2 text-lg text-white bg-teal-800 rounded-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "x" : "≡"}
      </button>

      <nav className="hidden md:block">
        <NavLinks setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
}