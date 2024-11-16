import Nav from "./Nav"

export default function Header({ setMenuOpen, isMenuOpen }) {
    return (
      <div className="relative flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mochima Pool Logo</h1>
        <Nav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    );
  }
  