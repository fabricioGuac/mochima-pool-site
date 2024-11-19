import Nav from "./Nav"

export default function Header({ setMenuOpen, isMenuOpen }) {
    return (
      <div className="relative flex justify-between items-center">
        <img className="max-w-40  rounded-lg" src="/logo2.jpg" alt="mochima poll logo" />
        <Nav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    );
  }
  